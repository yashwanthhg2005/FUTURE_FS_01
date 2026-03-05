import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">Get to know more about my background and experience.</p>

                <div className="about-content">
                    <div className="about-text">
                        <h3>Professional Summary</h3>
                        <p>
                            I am an Electronics and Communication Engineering student with a keen interest in core technologies. I hold certifications in Digital VLSI Testing and Introduction to Python Programming through NPTEL.
                        </p>
                        <p>
                            I love learning and working with Python, C programming, Microcontrollers, VLSI, and IoT. I'm excited about exploring the intersection of hardware and software to build meaningful solutions.
                        </p>

                        <div className="career-objective">
                            <h4>Career Objective</h4>
                            <p>
                                To leverage my hardware and programming skills to contribute to innovative projects in VLSI, IoT, and embedded systems, while continuously growing my technical expertise.
                            </p>
                        </div>
                    </div>

                    <div className="education-cards">
                        <h3>Education</h3>
                        <div className="card edu-card" style={{ marginBottom: '1.5rem' }}>
                            <div className="edu-year">Present</div>
                            <h4>B.E. in Electronics & Communication</h4>
                            <p className="edu-school">Adichunchanagiri Institute of Technology, Chikmagalur</p>
                            <p className="edu-desc">SGPA: 7.92</p>
                        </div>
                        <div className="card edu-card">
                            <div className="edu-year">Pre-University</div>
                            <h4>Class 12 (PUC)</h4>
                            <p className="edu-school">Cauvery Excel PU College, Mandya</p>
                            <p className="edu-desc">Score: 90%</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
