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
  const user = useSelector((store) => store.user);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          name="title"
          value={title}
          placeholder="Composition title"
          onChange={(event) => setTitle(event.target.value)}
        />
      </form>
    </>
  );

  // form is going to need 5 inputs and a textbox, and a submit button
};
export default SessionForm;
