import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const RidesForm = ({ props, getAllRides }) => {
  let navigate = useNavigate()

  const initialState = {
    name: '',
    picture: '',
    year_built: '',
    height_requirement: '',
    ride_time: '',
    max_speed: '',
    intensity: '',
    reviews: []
  }
  const [formState, setFormState] = useState(initialState)

  const handleSubmit = async (event) => {
    event.preventDefault()

    await axios
      .post('http://localhost:3001/api/rides', formState)
      .then((response) => {})
      .catch((error) => {
        console.error(error)
      })
    setFormState(initialState)
    navigate('/')
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  return (
    <>
      <div className="Form-div">
        <form className="Form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            placeholder="Name Here"
            type="text"
            id="name"
            onChange={handleChange}
            value={formState.name}
          />
          <label htmlFor="picture">picture:</label>
          <input
            placeholder="Url for image"
            type="text"
            id="picture"
            onChange={handleChange}
            value={formState.picture}
          ></input>
          <label htmlFor="year_built">Year Built:</label>
          <input
            placeholder="Year here"
            type="text"
            id="year_built"
            onChange={handleChange}
            value={formState.year_built}
          />
          <label htmlFor="height_requirement">Height Requirement:</label>
          <input
            placeholder="Height here"
            type="text"
            id="height_requirement"
            onChange={handleChange}
            value={formState.height_requirement}
          />

          <label htmlFor="ride_time">Ride Time:</label>
          <input
            placeholder="Ride Time"
            type="text"
            id="ride_time"
            onChange={handleChange}
            value={formState.ride_time}
          />

          <label htmlFor="max_speed">Ride Speed</label>
          <input
            placeholder="Ride Speed here"
            type="text"
            id="max_speed"
            onChange={handleChange}
            value={formState.max_speed}
          />

          <label htmlFor="intensity">intensity</label>
          <input
            placeholder="intensity here"
            type="text"
            id="intensity"
            onChange={handleChange}
            value={formState.intensity}
          />
          <label htmlFor="description">Description</label>
          <textarea
            placeholder="Description here"
            id="description"
            cols="30"
            rows="3"
            onChange={handleChange}
            value={formState.description}
          ></textarea>
          <button className="form-btn" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default RidesForm
