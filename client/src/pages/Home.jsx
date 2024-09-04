import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Import the CSS file for styling
import profileImage from '../components/images/profile.jpg'; // Import the image

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the Contact page
  };

  return (
    <div className="home">
      <div className="content">
        <div className="text-content">
          <h1>Soham Ghosh</h1> {/* Fixed name */}
          <p className="typing-animation">Full Stack Developer</p> {/* Typing animation */}
          <p>"Transforming ideas into dynamic digital experiences"</p> {/* Fade in from left */}
          <button onClick={handleContactClick} className="btn-primary">Get in Touch</button> {/* Updated to use button */}
        </div>
        <div className="image-container">
          <img src={profileImage} alt="Soham Ghosh" className="profile-image" /> {/* Display imported image */}
        </div>
      </div>
    </div>
  );
}

export default Home;
