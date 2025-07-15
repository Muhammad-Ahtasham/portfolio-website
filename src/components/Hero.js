import React from 'react';
import './Hero.css';
import profileImg from '../images/img.png';

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, My name is Muhammad Ahtasham</h1>
          <p>I am a passionate Artificial Intelligence Engineer and a Web Developer</p>
          <div className="hero-buttons">
            <a href="https://drive.google.com/file/d/1Xse8S6Rtas2Q9FH01ZZ66Tl9bxbsa8-T/view?usp=sharing" className="btn" target="_blank" rel="noopener noreferrer">Download Resume</a>
            <a href="https://github.com/Muhammad-Ahtasham/" className="btn" target="_blank" rel="noopener noreferrer">Visit GitHub</a>
          </div>
        </div>
        <div className="hero-image">
          <img src={profileImg} alt="AI Engineer" />
        </div>
      </div>
    </div>
  );
};

export default Hero;