import React from 'react';
import './Services.css';
import webImage from '../components/images/web.jpg'; // Import the images
import appImage from '../components/images/app.jpg';
import progImage from '../components/images/prog.jpg';
import javaImage from '../components/images/java.jpg';

const servicesData = [
  {
    title: "Website Design",
    description: "Creating visually appealing and user-friendly websites tailored to your needs. Our designs ensure a great user experience and responsiveness across all devices.",
    image: webImage,
  },
  {
    title: "Application Development",
    description: "Developing robust and scalable applications to meet your business goals. From web apps to mobile apps, we deliver solutions that drive results.",
    image: appImage,
  },
  {
    title: "Data Structures Course",
    description: "Offering comprehensive courses on data structures, essential for coding interviews and software development. Learn how to efficiently manage and organize data.",
    image: progImage,
  },
  // {
  //   title: "Java Programming",
  //   description: "Master Java programming with our in-depth courses and tutorials. Perfect for beginners and experienced developers looking to enhance their skills.",
  //   image: javaImage,
  // }
];

const Services = () => {
  return (
    <div className="services-page">
      <h1>My Services</h1>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
