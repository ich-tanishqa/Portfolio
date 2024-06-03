import React from 'react';
import './styles.css';

const Projects = () => {
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Plant Disease Prediction</h3>
        <p>Technology Used: Python, CNN, Streamlit, Keras, Numpy</p>
        <ul>
          <li>Developed and fine-tuned a Convolutional Neural Network (CNN) achieving an impressive 87% accuracy in classifying plant diseases from leaf images.</li>
          <li>Collected, annotated, and augmented 10,000+ leaf images, enhancing dataset quality for better model performance.</li>
          <li>Deployed the model as a web app using Streamlit, enabling real-time disease prediction with an average response time of 150ms.</li>
        </ul>
      </div>
      <div className="project">
        <h3>SurDet AI - Suspicious URL Detector</h3>
        <p>Technology Used: Next.Js, Typescript, Javascript, ShadCN, API, ML, Generative AI</p>
        <ul>
          <li>Achieved 97% accuracy in detecting suspicious links using machine learning algorithms, enhancing user safety.</li>
          <li>Integrated a chatbot reducing response times by 50%, improving customer support efficiency.</li>
          <li>Developed a reporting system for suspicious activity, processing 500+ reports.</li>
        </ul>
      </div>
      <div className="project">
        <h3>Echo Pages - A Blog Website</h3>
        <p>Technology Used: JavaScript, CSS, HTML, API, Node.js, Express.js, Bootstrap, Prisma</p>
        <ul>
          <li>Built a blogging website handling 1000+ concurrent users with 200ms response times for real-time interactions.</li>
          <li>Managed 1,000 articles/sec with sub-100ms page loads, ensuring seamless content creation and editing.</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
