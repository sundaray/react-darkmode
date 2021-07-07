import React, { useState, createContext } from "react";
import { Route, Switch } from "react-router";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

export const ThemeContext = createContext();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const theme = darkMode ? "light" : "dark";

  const circleClickHandler = (theme) => {
    setDarkMode(!darkMode);
    document.documentElement.className = theme;
  };

  return (
    <ThemeContext.Provider value={darkMode}>
      <div className="app-wrapper">
        <Navbar />
        <main className={darkMode ? "main-dark" : "main-light"}>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
      <div className="toggle-wrapper">
        <div className="toggle" onClick={() => circleClickHandler(theme)}>
          <div>
            <FontAwesomeIcon icon={faSun} className="sun" />
          </div>
          <div>
            <FontAwesomeIcon icon={faMoon} className="moon" />
          </div>
          <div className={darkMode ? "circle-dark" : "circle-light"}></div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
