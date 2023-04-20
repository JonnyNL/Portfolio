import React, { useState } from "react";
import "../styles/portfolio.css";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("skills");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="skills-wrapper">
      <div className="skills-header">
        <div
          className={`tab ${activeTab === "skills" ? "active" : ""}`}
          onClick={() => handleTabClick("skills")}
        >
          Skills
        </div>
        <div
          className={`tab ${activeTab === "traits" ? "active" : ""}`}
          onClick={() => handleTabClick("traits")}
        >
          Traits
        </div>
      </div>
      <div className="skills-content">
        {activeTab === "skills" && (
          <div>
            <div>Python</div>
            <div>HTML</div>
            <div>Javascript</div>
            <div>React</div>
            <div>Figma</div>
            <div>Canva</div>

            <div>Inclusion</div>
            <div>Customer Service</div>
            <div>Time Management</div>
          </div>
        )}
        {activeTab === "traits" && (
          <div>
            <div>Loyal</div>
            <div>Honest</div>
            <div>Honorable</div>
            <div>Disciplined</div>
            <div>Ambitious</div>
            <div>Courageous</div>
            <div>Shy</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
