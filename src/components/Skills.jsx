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
            <h2>Skills</h2>
            {/* Your skills content goes here */}
          </div>
        )}
        {activeTab === "traits" && (
          <div>
            <h2>Traits</h2>
            {/* Your traits content goes here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
