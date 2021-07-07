import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer className={darkMode ? "footer-dark" : "footer-light"}>
      &copy; 2021, All Rights Reserved
    </footer>
  );
};

export default Footer;
