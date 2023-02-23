import { useState } from "react";
import axios from "axios";

const ReviewForm = ({ props, getAllRides, rides }) => {
  const initialState = {
    name: "",
    subject: "",
    message: "",
  };
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(`http://localhost:3001/api/rides/${rides._id}/review`, formState)
      .then(() => {});
    window.location.reload();

    setFormState(initialState);
  };
  return (
    <form className="Form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        className="Input"
        type="text"
        name={"name"}
        value={formState.name}
        onChange={handleChange}
        placeholder="name"
      ></input>
      <label htmlFor="subject">Subject:</label>
      <input
        className="Input"
        type="text"
        name={"subject"}
        onChange={handleChange}
        placeholder="subject"
        value={formState.subject}
      />
      <label htmlFor="message">Message</label>
      <textarea
        className="Input-Message"
        name={"message"}
        cols="30"
        rows="7"
        onChange={handleChange}
        value={formState.message}
      ></textarea>
      <button className="Form-Btn" type="submit">
        Send
      </button>
    </form>
  );
};
export default ReviewForm;
