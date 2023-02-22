import { useState, useEffect } from "react";
import axios from "axios";
import ReviewForm from "./ReviewForm";

const Home = (response) => {
  const [rideList, setRideList] = useState([]);

  const getAllRides = async () => {
    const response = await axios.get("http://localhost:3001/api/rides");
    setRideList(response.data.rides);
  };

  const delRide = async (ridesId) => {
    await axios.delete(`http://localhost:3001/api/rides/${ridesId}`);
    getAllRides();
  };

  const delReview = async (id) => {
    await axios.delete(`http://localhost:3001/api/rides/${id}/review/${id}`);
    getAllRides();
  };

  useEffect(() => {
    getAllRides();
  }, []);
  return (
    <div className="Main-Card">
      <h1>Rides!</h1>
      <div>
        {rideList.map((rides) => (
          <div key={rides._id}>
            <div className="Ride-card">
              <h2>{rides.name}</h2>
              <img src={rides.picture} alt="Rides images" />
              <p>Established:{rides.year_built}</p>
              <p>Minimum Height Requirement:{rides.height_requirement}</p>
              <p>Ride Time:{rides.ride_time}</p>
              <p>Max Speed:{rides.max_speed}</p>
              <p>Intensity Level:{rides.intensity}</p>
              <div>
                Reviews:{" "}
                {rides.reviews?.map((review) => (
                  <div key={review._id}>
                    <div>Name:{review.name}</div>
                    <div>Subject:{review.subject}</div>
                    <div>Message:{review.message}</div>
                    <button onClick={() => delReview(review._id)}>
                      Delete
                    </button>
                  </div>
                ))}
              </div>
              <div>
                <ReviewForm rides={rides} getAllRides={getAllRides} />
              </div>

              <button onClick={() => delRide(rides._id)}>
                Delete this Ride
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
