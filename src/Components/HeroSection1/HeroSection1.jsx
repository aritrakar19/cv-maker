import React from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import './HeroSection1.css'; // Import the custom CSS file

function HeroSection1() {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <section className="hero-section">
      {/* Right Content (Smaller Image) */}
      <div className="hero-section__image">
        <img
          src="https://geeko.netlify.app/img/core-img/banner2.png"
          alt="CV Builder Illustration"
        />
      </div>

      {/* Left Content (Text) */}
      <div className="hero-section__text">
        <div className="badge">
          <span className="icon">$</span>
          <span className="description">
            Discover The Easiest ways to Build Your CV!
          </span>
        </div>
        <h1>
          Online CV Builder With <br /> Creative Templates.
        </h1>
        <p>
          Our Perfect resume builder takes the hassle out of resume writing.
          Choose from several templates and follow easy prompts to create the
          perfect job-ready resume.
        </p>
        <div className="cta-buttons">
          {/* Change Link to button and add onClick handler */}
          <button className="btn btn-primary" onClick={() => navigate("/home")}>
            CHOOSE TEMPLATE
          </button>
          <button className="btn btn-secondary">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection1;
