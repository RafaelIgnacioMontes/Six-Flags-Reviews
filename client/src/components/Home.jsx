import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [rideList, setRideList] = useState([])

  const getAllRides = async () => {
    const response = await axios.get('http://localhost:3001/api/rides')
    console.log(response.data.rides)
    setRideList(response.data.rides)
  }
  useEffect(() => {
    getAllRides()
  }, [])
  return (
    <div>
      <h1></h1>
      <div>
        {rideList.map((rides) => {
          ;<div>
            <div>{rides.name}</div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Home
