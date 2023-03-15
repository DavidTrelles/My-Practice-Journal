import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: "REGISTER",
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        {/* <label htmlFor="username"> */}
        <TextField
          className="textfield"
          label="Username"
          variant="filled"
          type="text"
          name="username"
          margin="dense"
          value={username}
          required
          onChange={(event) => setUsername(event.target.value)}
        />
        {/* </label> */}
      </div>
      <div>
        {/* <label htmlFor="password"> */}
        <TextField
          className="textfield"
          id="Pword"
          label="Password"
          variant="filled"
          type="password"
          name="password"
          margin="dense"
          value={password}
          required
          onChange={(event) => setPassword(event.target.value)}
        />
        {/* </label> */}
      </div>
      <div>
        <input className="btn" type="submit" name="submit" value="Register" />
      </div>
    </form>
  );
}

export default RegisterForm;
