import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import nav from "../data/nav";
import "../css/nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [fixedNav, setFixedNav] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", navbarFixed);
    return () => window.removeEventListener("scroll", navbarFixed);
  }, []);

  const navbarFixed = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setFixedNav("fixed-nav") : setFixedNav("");
    }
  };
  return (
    <div className={`no-wrapper nav ${fixedNav}`}>
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
                <li key={id} className="nav-links">
                  <Link to={url} onClick={() => setIsToggled(false)}>
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
