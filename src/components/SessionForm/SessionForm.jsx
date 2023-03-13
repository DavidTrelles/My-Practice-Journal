import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextField } from "@mui/material";
const SessionForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState("");
  const [minutes, setMinutes] = useState("");
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
        {/* <label htmlFor="title">Title: </label> */}
        <br />
        <TextField
          variant="outlined"
          id="title"
          name="title"
          value={title}
          placeholder="Composition title"
          onChange={(event) => setTitle(event.target.value)}
          required
          fullWidth
        />
        <br />
        {/* <label htmlFor="date">Date: </label> */}
        <br />
        <TextField
          variant="outlined"
          name="date"
          value={date}
          placeholder="Date"
          onChange={(event) => setDate(event.target.value)}
          required
          fullWidth
        />
        <br />
        {/* <label htmlFor="description">Description: </label> */}
        <br />
        <TextField
          variant="outlined"
          id="description"
          name="description"
          value={description}
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
          required
          fullWidth
        />
        <br />
        {/* <label htmlFor="link">YouTube Link: </label> */}
        <br />
        <TextField
          variant="outlined"
          id="link"
          name="link"
          value={link}
          placeholder="Embed YouTube link"
          onChange={(event) => setLink(event.target.value)}
          fullWidth
        />
        <br />
        {/* <label htmlFor="minutes">Minutes practiced: </label> */}
        <br />
        <TextField
          variant="outlined"
          id="minutes"
          name="minutes"
          type="number"
          value={minutes}
          placeholder="Minutes practiced"
          onChange={(event) => setMinutes(event.target.value)}
          required
          fullWidth
        />
        <br />
        {/* <label htmlFor="notes">Notes: </label> */}
        <br />
        <TextField
          variant="outlined"
          id="notes"
          name="notes"
          multiline
          value={notes}
          placeholder="Put your notes here"
          onChange={(event) => setNotes(event.target.value)}
          fullWidth
        />
        <br />
        <br />
        <br />
        <button type="submit" className="btn">
          Submit
        </button>
        <div className="divider" />
        <button className="btn" onClick={goBack}>
          Back
        </button>
      </form>
    </>
  );

  // form is going to need 5 inputs and a textbox, and a submit button
};
export default SessionForm;
