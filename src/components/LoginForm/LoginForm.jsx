import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: "LOGIN",
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: "LOGIN_INPUT_ERROR" });
    }
  }; // end login

  return (
    <form className="formPanel" onSubmit={login}>
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        {/* <label htmlFor="username">
          Username: */}
        <TextField
          id="Usename"
          label="Username"
          variant="outlined"
          type="text"
          name="username"
          margin="dense"
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        {/* </label> */}
      </div>
      <div>
        {/* <label htmlFor="password">
          Password: */}
        <TextField
          id="Pword"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          margin="dense"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {/* </label> */}
      </div>
      <div>
        <button
          // variant="contained"
          className="btn"
          type="submit"
          name="submit"
          value="Log In"
        >
          Log In
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
