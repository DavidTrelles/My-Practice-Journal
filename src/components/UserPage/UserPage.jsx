import React, { useEffect } from "react";
import LogOutButton from "../LogOutButton/LogOutButton";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const sessions = useSelector((store) => store.sessions);
  const history = useHistory();
  useEffect(() => {
    dispatch({ type: "FETCH_SESSIONS" });
  }, []);

  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <section className="sessions">
        {sessions.map((session) => {
          return (
            <div class="session" key={session.id}>
              <h3>{session.title}</h3>
            </div>
          );
        })}
      </section>

      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
