import { useEffect, useState, useLayoutEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const SessionDetails = () => {
  const { id } = useParams();
  const session = useSelector((store) => store.session);
  const history = useHistory();
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState(true);
  const [title, setTitle] = useState(session.title);
  const [description, setDescription] = useState(session.description);
  const [link, setLink] = useState(session.link);
  const [notes, setNotes] = useState(session.notes);
  const [date, setDate] = useState(session.date);
  const [minutes, setMinutes] = useState(session.minutes);
  const user_id = useSelector((store) => store.user.id);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedSession = {
      title,
      date,
      description,
      link,
      minutes,
      notes,
      user_id,
      id,
    };
    dispatch({ type: "UPDATE_SESSION", payload: updatedSession });
    history.push("/user");
  };

  useEffect(() => {
    dispatch({ type: "FETCH_SESSION", payload: id });
  }, [id]);
  console.log(title);
  const toggleEdit = (detail) => {
    console.log("clicked!");
    setTitle(detail.title);
    setDescription(detail.description);
    setDate(detail.date);
    setLink(detail.link);
    setMinutes(detail.minutes);
    setNotes(detail.notes);
    setShowDetails(!showDetails);
  };
  function deleteThis() {
    dispatch({ type: "DELETE", payload: id });
    history.push("/user");
  }
  function goBack() {
    history.push("/user");
  }
  console.log(session.title);
  if (showDetails === true) {
    return (
      <>
        {" "}
        {session.length > 0 && (
          <>
            <div>
              {session.map((detail) => {
                return (
                  <div id="details" className="box" key={detail.id}>
                    <h1 className="needsCenter">
                      Your Previous Practice session:
                    </h1>
                    <h2> {detail.title}</h2>
                    <h3>Description: {detail.description}</h3>
                    <h3>Date: {detail.date}</h3>
                    <div className="video">
                      <iframe
                        width="450"
                        height="315"
                        src={detail.link}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </div>
                    <h3>Minutes: {detail.minutes}</h3>
                    <h3>Notes: {detail.notes}</h3>
                    <button
                      className="btn"
                      onClick={() => {
                        toggleEdit(detail);
                      }}
                    >
                      Edit
                    </button>
                    <div class="divider" />
                    <button className="btn" onClick={deleteThis}>
                      Delete
                    </button>
                    <div class="divider" />
                    <button className="btn" onClick={goBack}>
                      Back
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        {" "}
        {session.length > 0 && (
          <>
            <div className="editDiv">
              <form className="formPanel" onSubmit={handleSubmit}>
                {session.map((detail) => {
                  return (
                    <div key={detail.id}>
                      <h2>Edit Practice Session</h2>
                      <label htmlFor="title">Title: </label>
                      <br />
                      <input
                        id="title"
                        type="text"
                        name="title"
                        defaultValue={detail.title}
                        onChange={(event) => setTitle(event.target.value)}
                        required
                      ></input>
                      <br />
                      <label htmlFor="date">Date: </label>
                      <br />
                      <input
                        id="date"
                        name="date"
                        defaultValue={detail.date}
                        onChange={(event) => setDate(event.target.value)}
                        required
                      />
                      <br />
                      <label htmlFor="description">Description: </label>
                      <br />
                      <textarea
                        id="description"
                        name="description"
                        defaultValue={detail.description}
                        onChange={(event) => setDescription(event.target.value)}
                        required
                      />
                      <br />
                      <label htmlFor="link">YouTube Link: </label>
                      <br />
                      <input
                        id="link"
                        name="link"
                        defaultValue={detail.link}
                        onChange={(event) => setLink(event.target.value)}
                      />
                      <br />
                      <label htmlFor="minutes">Minutes practiced: </label>
                      <br />
                      <input
                        id="minutes"
                        name="minutes"
                        type="number"
                        defaultValue={detail.minutes}
                        onChange={(event) => setMinutes(event.target.value)}
                        required
                      />
                      <br />
                      <label htmlFor="notes">Notes: </label>
                      <br />
                      <textarea
                        id="notes"
                        name="notes"
                        defaultValue={detail.notes}
                        onChange={(event) => setNotes(event.target.value)}
                      />
                      <br />
                    </div>
                  );
                })}
                <button className="btn" onClick={toggleEdit}>
                  Cancel
                </button>
                <div class="divider" />
                <button className="btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </>
        )}
      </>
    );
  }
};

export default SessionDetails;
