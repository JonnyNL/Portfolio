import { FaGithub, FaInstagram, FaLinkedin, FaDiscord } from "react-icons/fa";
import React from "react";
import "../styles/portfolio.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="content-container">
        <div className="top-section">
          <div className="left-container">
            <h1 className="intro-text">Hi, I'm Jonathan.</h1>
            <p className="sub-text">
              Software Development Student at Keyin College &<br /> Commercial
              Bakery Clerk at Dominion of 5 Years.
            </p>
            <button className="find-more-btn">Find out more about me! </button>
          </div>
          <div className="right-container">
            <div className="profile-image"></div>
          </div>
        </div>

        <div className="social-container">
          <h2 className="social-title">You might also find me here...</h2>
          <div className="social-links">
            <a
              href="https://github.com/JonnyNL"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={44} />
            </a>
            <a
              href="https://www.instagram.com/your_username"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={46} />
            </a>

            <a
              href="https://www.linkedin.com/in/your_username"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={37} />
            </a>
            <a
              href="https://discord.com/your_profile_url"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaDiscord size={36.59} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
