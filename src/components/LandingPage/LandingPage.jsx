import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";

// CUSTOM COMPONENTS
import RegisterForm from "../RegisterForm/RegisterForm";

function LandingPage() {
  const [heading, setHeading] = useState("Welcome To My Practice Journal!");
  const history = useHistory();

  const onLogin = (event) => {
    history.push("/login");
  };

  return (
    <div className="landingcontainer">
      <h1 className="needsCenter">{heading}</h1>

      <div className="grid">
        <div className="grid-col grid-col_5">
          <h2>Are you ready to take your practice into the 21st century?</h2>
          <br />
          <h4>
            My Practice Journal is here to help. Record your sessions in one
            convenient place, with the click of a few buttons! Keep notes,
            record minutes and embed videos. Whatever your needs are as a
            professional or amateur to keep yourself motivated and accountable,
            we're here to help you!
          </h4>
        </div>
        <div className="grid-col grid-col_7">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
