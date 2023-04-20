import React, { useState } from "react";
import "../styles/portfolio.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const formEndpoint = "https://formspree.io/f/xpzekpzv"; // Replace 'your_form_id' with your actual Formspree form ID

  const clearInputFields = () => {
    setEmail("");
    setMobile("");
    setMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Submit form data
    const formData = new FormData(event.target);

    try {
      await fetch(formEndpoint, {
        method: "POST",
        body: formData,
      });
    } catch (error) {
      // Handle network error
    }

    // Clear input fields after .5 seconds
    setTimeout(() => {
      clearInputFields();
    }, 250);
  };

  return (
    <div className="footer-container">
      <h2 className="footer-header">Give me a shout!</h2>
      <p className="footer-text">
        If you think I'd be useful in helping with a project, fit a role well,
        or you have any questions don't hesitate to send me an email! ps- Hi,
        Reviewer! Please test this as I should be able to recieve your message
      </p>
      <form className="finput-container" onSubmit={handleSubmit}>
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
              value={email}
              placeholder="Please enter your email"
              onChange={(event) => setEmail(event.target.value)}
              required
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
              value={mobile}
              placeholder="Enter Mobile"
              onChange={(event) => setMobile(event.target.value)}
              required
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
              value={message}
              placeholder="Enter your message"
              onChange={(event) => setMessage(event.target.value)}
              required
            ></textarea>
          </div>
        </div>
        <button type="submit" className="fsubmit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Footer;
