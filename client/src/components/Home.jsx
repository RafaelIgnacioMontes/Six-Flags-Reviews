import { useState, useEffect } from 'react'
import axios from 'axios'
import ReviewForm from './ReviewForm'

const Home = (response) => {
  const [rideList, setRideList] = useState([])

  const getAllRides = async () => {
    const response = await axios.get('http://localhost:3001/api/rides')
    setRideList(response.data.rides)
  }

  const delRide = async (ridesId) => {
    await axios.delete(`http://localhost:3001/api/rides/${ridesId}`)
    getAllRides()
  }

  const delReview = async (id) => {
    await axios.delete(`http://localhost:3001/api/rides/${id}/review/${id}`)
    getAllRides()
  }

  useEffect(() => {
    getAllRides()
  }, [])
  return (
    <div className="Main-Card">
      <h1 className="Title">
        Six Flags Great Adventure
        {/* in Jackson Township, New Jersey */}
      </h1>

      {rideList.map((rides) => (
        <div className="Ride-card" key={rides._id}>
          <div className="Ride-Div">
            <h2 className="Ride-Name">{rides.name}</h2>
            <img src={rides.picture} alt="Rides images" />
            <p>Established: {rides.year_built}</p>
            <p>Minimum Height Requirement: {rides.height_requirement}</p>
            <p>Ride Time: {rides.ride_time}</p>
            <p>Max Speed: {rides.max_speed}</p>
            <p>Intensity Level: {rides.intensity}</p>
          </div>
          <div>
            <div className="Review-Div">
              <h3>Reviews: </h3>
              <div className="Posted-Reviews">
                {rides.reviews?.map((review) => (
                  <div className="User-Review" key={review._id}>
                    <h4 className="Review-Info">Name:</h4>
                    {review.name}
                    <h4>Subject:</h4>
                    {review.subject}
                    <h4>Message:</h4>
                    {review.message}
                    <div>
                      <button
                        className="Form-Btn-Review-Delete"
                        onClick={() => delReview(review._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="test-card2">
                <ReviewForm rides={rides} getAllRides={getAllRides} />
              </div>
              <button
                className="Form-Btn-Delete"
                onClick={() => delRide(rides._id)}
              >
                Delete Ride
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Home
