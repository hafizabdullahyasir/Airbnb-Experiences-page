import React from "react";
import photoGridImage from "/images/photo-grid.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={photoGridImage} alt="Photo Grid" className="heroPhoto" />

      <h1 className="herotag">Online Experiences</h1>
      <p className="herop">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home
      </p>
    </div>
  );
};

export default Hero;
