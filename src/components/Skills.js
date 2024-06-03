import React from 'react';
import './styles.css';

const Skills = () => {
  return (
    <div className="skills">
      <h2>Skills </h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>Languages</h3>
          <ul>
            <li><img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" alt="C/C++" />C/C++, Python, Java, Javascript, Typescript, HTML+CSS</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Libraries</h3>
          <ul>
            <li><img src="https://img.icons8.com/color/48/000000/python.png" alt="Libraries" />C++ STL, Python Libraries, Javascript Libraries, Bootstrap</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Tools</h3>
          <ul>
            <li><img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Tools" />Nodejs, VScode, Git, Github, Docker, MATLAB, LTspice, Figma</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Frameworks</h3>
          <ul>
            <li><img src="https://img.icons8.com/color/48/000000/react-native.png" alt="Frameworks" />ReactJs, NextJs</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Databases</h3>
          <ul>
            <li><img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="Databases" />MongoDb, PostgresSQL, Relational Database(mySql)</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Relevant Coursework</h3>
          <ul>
            <li>Data Structures & Algorithms, Operating Systems, Object Oriented Programming, Database Management System, Software Engineering, Machine Learning, Deep Learning, Artificial Intelligence, Embedded System, VLSI, Switching Theory, Computer Networks</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Areas of Interest</h3>
          <ul>
            <li>Web Design and Development, Machine Learning, IOT</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>Soft Skills</h3>
          <ul>
            <li>Problem Solving, Self-learning, Leadership, Adaptability, Time management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
