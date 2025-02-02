import React from 'react';
import { Link } from "react-router-dom";
import '../Styles/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-container" > 
      <nav className="navbar">
        <div className="logo">AD Blogs</div>
        <div className="nav-links">
          <a href="/home">Home</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/login">Log in</a>
          <a href="/signup" className="signup-btn">Sign Up</a>
        </div>
      </nav>

      <header className="hero-section">
        <div className="hero-content">
          <h1>Publish your passions, your way</h1>
          <h2>Create a unique and beautiful blog easily.</h2>
          {/* <button className="get-started-btn">Get Started</button> */}
          <Link to="/home" className="get-started-btn">Get Started</Link>
        </div>
        {/* <div className="hero-image"> <div className='hero-image'> */}
          {/* <img src="/src/assets/images/hero-image.jpg" alt="background image" /> */}
        {/* </div> */}
      </header>
    </div>
  );
};

export default LandingPage;