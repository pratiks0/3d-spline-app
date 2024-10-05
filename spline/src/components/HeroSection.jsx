import React from 'react';
import './HeroSection.css';
import Model from '../components/Model'

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="left">
        <h1 className="title">Hello, I'm Pratik Singh</h1>
        <p className="subtitle">Web Developer | 3D Enthusiast</p>
        <p className="description">
          I create interactive web experiences using modern web technologies and love designing.
        </p>
      </div>
      <div className="right">
        <Model/>
      </div>
    </section>
  );
};

export default HeroSection;
