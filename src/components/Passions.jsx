// Auhor: Jonathan Ivany
// The purpose of this component is to render my hobbies section
import React from "react";
import "../styles/portfolio.css";
import Hobby1 from "../hobbies/MyHeadset.jpg";
import Hobby2 from "../hobbies/MyOldPc.jpg";
import Hobby3 from "../hobbies/MyMotorcycle.jpg";

const Passions = () => {
  return (
    <div className="passions-container">
      <div className="passions-wrapper">
        <h1 className="passions-header">Passions</h1>
        <p className="passions-subheader">
          I can pick up and drop passion hobbies like pennies but these few have
          stuck with me longer than most
        </p>
        <div className="passions-section">
          <img
            className="passions-section-image"
            src={Hobby2}
            alt="computer-building"
          />
          <div className="passions-section-text">
            <h2 className="passions-section-title">Computer Building</h2>
            <p className="passions-section-description">
              I picked up the interest in computer building
              <br /> when I was 12. Took my first build on when I was
              <br /> 14, built my dream pc at 19, &amp; 2 others for
              <br /> family. I take any chance I get!
            </p>
            <button className="passions-section-button">
              View Full Build List
            </button>
          </div>
        </div>
        <div className="passions-section">
          <div className="passions-section-text">
            <h2 className="passions-section-title">Virtual Reality</h2>
            <p className="passions-section-description">
              I'm a huge beliver that VR will be rather <br /> significant in
              the future. I'm always updating to <br />
              and trying the latest VR tech, in my spare time <br />
              learning unit to create my first vr application!
            </p>
            <button className="passions-section-button">
              Hardware I have experience with
            </button>
          </div>
          <img
            className="passions-section-image"
            src={Hobby1}
            alt="another-passion"
          />
        </div>
        <div className="passions-section">
          <img
            className="passions-section-image"
            src={Hobby3}
            alt="third-passion"
          />
          <div className="passions-section-text">
            <h2 className="passions-section-title">Motorcycling</h2>
            <p className="passions-section-description">
              If I'm not behind a desk, I'm behind handlebars!
              <br /> It's become habitual for me to leave for work
              <br /> hours early as an excuse to take the bike out for
              <br /> a ride. I love to take part in charity events
              <br /> such as ride for dad!
            </p>
            <button className="passions-section-button">View Full List</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passions;
