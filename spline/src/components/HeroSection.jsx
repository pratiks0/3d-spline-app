// src/components/HeroSection.jsx
import React from 'react';
import './HeroSection.css'; // Add styles for hero section

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="left">
        <h1 className="title">Hello, I'm Pratik Singh</h1>
        <p className="subtitle">Web Developer | 3D Enthusiast | Space Explorer</p>
        <p className="description">
          I create interactive web experiences using modern web technologies and love designing things related to space.
        </p>
      </div>
      <div className="right">
        {/* Use an image or a video for space theme */}
        <img 
          src="https://cdn.pixabay.com/photo/2016/04/08/14/22/space-1310293_1280.jpg" 
          alt="Space Theme" 
          className="hero-image"
        />
        {/* Uncomment if you want to use video instead */}
        {/* <video src="/path-to-space-video.mp4" autoPlay muted loop className="hero-video"></video> */}
      </div>
    </section>
  );
};

export default HeroSection;
