import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../App";

const Navbar = () => {
  const darkMode = useContext(ThemeContext);

  return (
    <nav className={darkMode ? "navigation-dark" : "navigation-light"}>
      <ul>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/projects" activeClassName="active">
          Projetcs
        </NavLink>
        <NavLink to="/blog" activeClassName="active">
          Blog
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
