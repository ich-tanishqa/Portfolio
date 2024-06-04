import React from 'react';
import './styles.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required />
        
        <label>Email:</label>
        <input type="email" name="email" required />
        
        <label>Message:</label>
        <textarea name="message" required></textarea>
        
        <button type="submit">Send</button>
      </form>
      <footer>
        <a href="https://medium.com/@bansaltanishqa">Blog</a>
        <a href="https://www.linkedin.com/in/wiz-coder/">LinkedIn</a>
        <a href="https://github.com/ich-tanishqa">GitHub</a>
        <a href="https://x.com/TanishqaBansal">Twitter</a>
      </footer>
    </div>
  );
};

export default Contact;
