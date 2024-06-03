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
        <a href="your_blog_link">Blog</a>
        <a href="your_linkedin_link">LinkedIn</a>
        <a href="your_github_link">GitHub</a>
        <a href="your_twitter_link">Twitter</a>
      </footer>
    </div>
  );
};

export default Contact;
