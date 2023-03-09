import React from "react";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>
          The My Practice Journal app is a resource for musicians to record
          their daily practice. Whether you are a seasoned veteran looking to
          track your practice in one convenient place, or a beginner just
          getting started - it's great for all ages and levels, sign up today!
        </p>
      </div>
    </div>
  );
}

export default AboutPage;
