import React from "react";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h3>
          The My Practice Journal app was develeped in 2023 using the following
          technologies:
          <br /> <br />
          - React.js <br /> - Material UI <br /> - CSS <br />- JavaScript <br />
          - Node.js <br /> - Redux <br /> - Redux Sagas <br /> - PostgreSQL
        </h3>
      </div>
    </div>
  );
}

export default AboutPage;
