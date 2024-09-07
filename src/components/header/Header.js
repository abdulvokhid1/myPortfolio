import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {greeting, workExperiences, bigProjects} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const projects = bigProjects.display;

  return (
    <Headroom>
      <header
        style={{background: "#6600ff", color: "white"}}
        className={isDark ? "dark-menu header" : "header"}
      >
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewExperience && (
            <li>
              <a href="#experience">Work Experiences</a>
            </li>
          )}

          {projects && (
            <li>
              <a href="#projects">Projects</a>
            </li>
          )}

          <li>
            <a href="#contact">Contact Me</a>
          </li>
          <li>
            {/* <a href=""> */}
            <ToggleSwitch />
            {/* </a> */}
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
