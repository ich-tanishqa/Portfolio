import React from 'react';
import './styles.css';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-content">
        <img className="profile-img" src="/image.png" alt="Profile" />
        <h1>Hi, I'm Tanishqa Bansal</h1>
        <p>I'm a passionate Web Developer</p>
        <div className="intro-buttons">
          <a href="/CV.pdf" download>
            <button>Download CV</button>
          </a>
          <a href="#contact">
            <button>Hire Me</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
