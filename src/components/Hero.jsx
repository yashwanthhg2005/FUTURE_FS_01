import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero-section">
            <div className="container hero-container">
                <div className="hero-content fade-in">
                    <p className="hero-greeting">Hi, my name is</p>
                    <h1 className="hero-title">Yashwanth HG.</h1>
                    <h2 className="hero-subtitle">Engineering Student & Developer.</h2>
                    <p className="hero-description">
                        I'm an Electronics and Communication Engineering student passionate about VLSI, IoT, and embedded systems. I enjoy bringing ideas to life through software and hardware integration, currently studying at Adichunchanagiri Institute of Technology.
                    </p>

                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary">
                            View Projects
                            <ArrowRight className="btn-icon" size={20} />
                        </a>

                        <div className="social-links">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                                <Linkedin size={24} />
                            </a>
                            <a href="mailto:contact@example.com" className="social-link" aria-label="Email">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
