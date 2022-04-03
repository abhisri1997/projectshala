import React from "react";
import "../css/services.css";
import slideData from "../data/services";

const Services = () => {
  return (
    <div className="no-wrapper">
      <div className="wrapper">
        <div className="service-heading">
          <h1>
            <span>/</span> Services
          </h1>
        </div>
        <div className="slider-container">
          {slideData.map((slide) => {
            const { id, title, desc, img } = slide;
            return (
              <div key={id} className="slider-card">
                <div className="slide-image">
                  <img src={img} alt={title} className="slider-img" />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Services;
