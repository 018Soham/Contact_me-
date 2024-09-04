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
          <h1>Soham Ghosh</h1>
          <p>Full Stack Developer</p>
          <p>"Transforming ideas into dynamic digital experiences"</p>
          <button onClick={handleContactClick} className="btn-primary">Get in Touch</button> {/* Updated to use button */}
        </div>
        <div className="image-container">
          <img src={profileImage} alt="Soham Ghosh" className="profile-image" /> {/* Display imported image */}
        </div>
      </div>
      <section className="about-me">
        {/* <h2>About Me</h2>
        <p>
          Hi, I'm Soham Ghosh, a passionate Full Stack Developer with experience in creating innovative solutions. My skills span across front-end and back-end development, and I'm dedicated to delivering high-quality software.
        </p> */}
        {/* <a href="#projects" className="btn-secondary">View My Projects</a> */}
      </section>
    </div>
  );
}

export default Home;
