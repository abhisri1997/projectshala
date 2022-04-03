import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import nav from "../data/nav";
import "../css/nav.css";

const Nav = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="wrapper">
      <nav className="main-nav">
        <div className="mobile-nav">
          <div className="logo">
            <h1>Projectshala</h1>
          </div>
          <div className="menu-icon">
            <FiMenu
              className="icons"
              onClick={() => setIsToggled(!isToggled)}
            />
          </div>
        </div>
        <ul className={isToggled ? "mobile-links" : "links-list"}>
          {nav.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
