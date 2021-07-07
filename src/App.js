import React, { useState, createContext } from "react";
import { Route, Switch } from "react-router";
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const ThemeContext = createContext();

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeTheme = {
    darkMode,
    setDarkMode,
  };

  return (
    <ThemeContext.Provider value={darkModeTheme}>
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
    </ThemeContext.Provider>
  );
};

export default App;
