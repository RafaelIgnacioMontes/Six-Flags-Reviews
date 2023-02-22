import { useState } from 'react'
import axios from 'axios'

const ReviewForm = (props) => {
  const initialState = {
    name: '',
    subject: '',
    message: ''
  }
  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
 
const handleSubmit = async (event) => {

  event.preventDefault()
  await axios.post('http://localhost:3001/review', formState)
  
  console.log(formState)
 
  setFormState(initialState)
  props.getReviews()
};

  return (
    <form onSubmit={handleSubmit}>
    <label htmlFor="name">Rides</label>
    <select id="name"onChange={handleChange} value={formState.name}>
      <option value="Batman The Ride">Batman The Ride</option>
      <option value="Cyborg Cyber Spin">Cyborg Cyber Spin</option>
      <option value="Dare Devil Dive">Dare Devil Dive</option>
      <option value="El Toro">El Toro</option>
      <option value="Green Lantern">Green Lantern</option>
      <option value="Jersey Devil Coaster">Jersey Devil Coaster</option>
      <option value="Justice League: Battle for Metropolis">Justice League: Battle for Metropolis</option>
      <option value="Kingda Ka">Kingda Ka</option>
      <option value="Medusa">Medusa</option>
      <option value="Nitro">Nitro</option>
      <option value="Skull Mountain">Skull Mountain</option>
      <option value="Sky Screamer Extreme Flight">Sky Screamer Extreme Flight</option>
      <option value="Sky Screamer">Sky Screamer</option>
      <option value="Slingshot">Slingshot</option>
      <option value="Superman: Ultimate Flight">Superman: Ultimate Flight</option>
      <option value="The Dark Knight Coaster">The Dark Knight Coaster</option>
      <option value="The Joker">The Joker</option>
      <option value="Twister">Twister</option>
      <option value="Wonder Woman Lasso of Truth">Wonder Woman Lasso of Truth</option>
      <option value="Zumanjaro: Drop of Doom">Zumanjaro: Drop of Doom</option>
    </select>
    <label htmlFor="subject">Subject:</label>
    <input type="text" id="subject" onChange={handleChange} value={formState.subject} />
    <label htmlFor="message">Message</label>
    <textarea id="message" cols="30" rows="10" onChange={handleChange} value={formState.message}></textarea>
    <button type="submit">Send</button>
  </form>
  )
}
export default ReviewForm