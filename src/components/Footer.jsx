import React from "react";
import "../styles/portfolio.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <h2 className="footer-header">Give me a shout!</h2>
      <p className="footer-text">
        If you think I'd be useful in helping with a project, fit a role well,
        or you have any questions don't hesitate to send me an email!
      </p>
      <div className="finput-container">
        <div className="finput-group">
          <label className="finput-label" htmlFor="email">
            Email
          </label>
          <div className="finput-box-container">
            <input
              className="finput-box"
              type="email"
              id="email"
              name="email"
              placeholder="Please enter your email"
            />
          </div>
        </div>
        <div className="finput-group">
          <label className="finput-label" htmlFor="mobile">
            Mobile
          </label>
          <div className="finput-box-container">
            <input
              className="finput-box"
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter Mobile"
            />
          </div>
        </div>
        <div className="finput-group">
          <label className="finput-label" htmlFor="message">
            Message
          </label>
          <div className="finput-box-container">
            <textarea
              className="fmessage-input"
              id="message"
              name="message"
              placeholder="Enter your message"
            ></textarea>
          </div>
        </div>
        <button className="fsubmit-button">Submit</button>
      </div>
    </div>
  );
};

export default Footer;
