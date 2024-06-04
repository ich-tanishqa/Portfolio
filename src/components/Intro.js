import React from 'react';
import './styles.css';

const Intro = () => {
  return (
    <div className="intro">
      <div className="intro-content">
        <img className="profile-img" src="/image.png" alt="Profile" />
        <h1>Hi, I'm Tanishqa Bansal</h1>
        <p>A versatile software developer with extensive hands-on experience in web development and machine learning, adept at creating dynamic and user-friendly web applications. With a strong background in developing intelligent algorithms and data-driven solutions, they excel in harnessing the power of technology to solve complex problems and drive innovation.</p>
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
