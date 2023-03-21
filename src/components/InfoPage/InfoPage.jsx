import React from "react";
import MyImage from "../../image/linked-in.png";
// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container2">
      <h1>Info</h1>
      <img
        className="myImage"
        src={MyImage}
        alt="David"
        width="500"
        height="500"
      />
    </div>
  );
}

export default InfoPage;
