import React from 'react';
import './HomePageComponent.css'; // Import the CSS file for styling

const HomePageComponent = () => {
  return (
    <div className="landing-page">
      <header className="landing-page-header">
        <h1>Welcome to the Home Page</h1>
        <p>Your journey to excellence starts here.</p>
        <button className="cta-button">Get Started</button>
      </header>
    </div>
  );
};

export default HomePageComponent;