import React, { useState } from "react";
import "./App.css";
import "./styles/lightmode.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Passions from "./components/Passions";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";
// Import other components here

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className={`App ${theme}`}>
      <Navbar
        toggleTheme={() => setTheme(theme === "dark" ? "light" : "dark")}
      />
      <main>
        {/* Add your components with corresponding IDs here */}
        <div id="home">
          <Home />
        </div>

        <div id="passions">
          <Passions />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="work">
          <Work />
        </div>
      </main>
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}

export default App;
