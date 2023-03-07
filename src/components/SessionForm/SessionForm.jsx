import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const SessionForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");
  const [minutes, setMinutes] = useState(0);
  const user_id = useSelector((store) => store.user.id);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    const newSession = {
      title,
      date,
      description,
      link,
      minutes,
      notes,
      user_id,
    };
    dispatch({ type: "POST_SESSION", payload: newSession });
    setTitle("");
    setDescription("");
    setLink("");
    setDate("");
    setMinutes("");
    setNotes("");
    history.push("/user");
  };
  function goBack() {
    history.push("/user");
  }
  return (
    <>
      <form className="formPanel" onSubmit={handleSubmit}>
        <h2>New Practice Session</h2>
        <label htmlFor="title">Title: </label>
        <br />
        <input
          id="title"
          name="title"
          value={title}
          placeholder="Composition title"
          onChange={(event) => setTitle(event.target.value)}
          required
        />
        <br />
        <label htmlFor="date">Date: </label>
        <br />
        <input
          id="date"
          name="date"
          value={date}
          placeholder="3/1/2023"
          onChange={(event) => setDate(event.target.value)}
          required
        />
        <br />
        <label htmlFor="description">Description: </label>
        <br />
        <input
          id="description"
          name="description"
          value={description}
          placeholder="Measures 35-61"
          onChange={(event) => setDescription(event.target.value)}
          required
        />
        <br />
        <label htmlFor="link">YouTube Link: </label>
        <br />
        <input
          id="link"
          name="link"
          value={link}
          placeholder="YouTube link"
          onChange={(event) => setLink(event.target.value)}
        />
        <br />
        <label htmlFor="minutes">Minutes practiced: </label>
        <br />
        <input
          id="minutes"
          name="minutes"
          type="number"
          value={minutes}
          placeholder="Minutes practiced"
          onChange={(event) => setMinutes(event.target.value)}
          required
        />
        <br />
        <label htmlFor="notes">Notes: </label>
        <br />
        <textarea
          id="notes"
          name="notes"
          value={notes}
          placeholder="Put your notes here"
          onChange={(event) => setNotes(event.target.value)}
        />
        <br />
        <button type="submit" className="btn">
          Submit
        </button>
        <div class="divider" />
        <button className="btn" onClick={goBack}>
          Back
        </button>
      </form>
    </>
  );

  // form is going to need 5 inputs and a textbox, and a submit button
};
export default SessionForm;
