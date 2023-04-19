import React, { useState } from "react";
import "../styles/portfolio.css";
import { HiSun, HiMoon } from "react-icons/hi";

const Navbar = ({ toggleTheme }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleThemeHandler = () => {
    setIsDarkTheme(!isDarkTheme);
    toggleTheme();
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`navbar ${isDarkTheme ? "dark" : "light"}`}>
      <nav>
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("passions")}>Passions</button>
        <button onClick={() => scrollToSection("skills")}>
          Skills & Traits
        </button>
        <button
          activeclassName="active"
          onClick={() => scrollToSection("work")}
        >
          Recent Work
        </button>
        <button onClick={() => scrollToSection("contact")}>
          Give me a shout!
        </button>
        <span onClick={toggleThemeHandler} className="theme-toggler">
          {isDarkTheme ? (
            <HiSun style={{ color: "white", fontSize: "2em" }} />
          ) : (
            <HiMoon style={{ color: "black", fontSize: "2em" }} />
          )}
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
