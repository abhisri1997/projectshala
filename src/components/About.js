import React from "react";
import about_us from "../data/about";
import "../css/about.css";

const About = () => {
  return (
    <div className="wrapper">
      <div className="about-title">
        <h1>About Us</h1>
        <p>Quality of research always matters</p>
      </div>
      {about_us.map((about) => {
        const { id, title, text, img } = about;
        return (
          <div key={id} className="about-section">
            <div className="about-img">
              <img src={img} alt={title} className="about-img" />
            </div>
            <div className="about-content">
              <div className="content-title">
                <h1>{title}</h1>
              </div>
              <p>{text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default About;
