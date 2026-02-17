import React, { useEffect, useState } from 'react';
import './Hero.css';
import profileImg from '../images/img.png';
import SocialMedia from './SocialMedia';

const dynamicText = 'My name is Muhammad Ahtasham';
const typingSpeed = 80; // ms per char
const pauseAfterTyped = 1200; // ms pause after full text
const pauseAfterDeleted = 600; // ms pause after deletion

const Hero = () => {
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    if (!isDeleting && displayed.length < dynamicText.length) {
      timeout = setTimeout(() => {
        setDisplayed(dynamicText.slice(0, displayed.length + 1));
      }, typingSpeed);
    } else if (!isDeleting && displayed.length === dynamicText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pauseAfterTyped);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(dynamicText.slice(0, displayed.length - 1));
      }, typingSpeed);
    } else if (isDeleting && displayed.length === 0) {
      timeout = setTimeout(() => setIsDeleting(false), pauseAfterDeleted);
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting]);

  return (
    <div className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hi, <span className="dynamic-name">{displayed}</span></h1>
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
      <SocialMedia />
    </div>
  );
};

export default Hero;
