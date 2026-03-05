import React from 'react';
import './Skills.css';

const Skills = () => {
    const technicalSkills = [
        { name: 'Python', level: 85 },
        { name: 'C Programming', level: 80 },
        { name: 'Microcontrollers', level: 75 },
        { name: 'VLSI Design & Testing', level: 70 },
        { name: 'IoT', level: 75 },
        { name: 'HTML, CSS & JS', level: 65 },
    ];

    const softSkills = [
        'Problem Solving',
        'Team Interaction',
        'Effective Communication',
        'Adaptability',
        'Time Management',
        'Continuous Learning'
    ];

    return (
        <section id="skills" className="skills-section">
            <div className="container">
                <h2 className="section-title">Skills & Expertise</h2>
                <p className="section-subtitle">A comprehensive overview of my technical capabilities and soft skills.</p>

                <div className="skills-content">
                    <div className="technical-skills">
                        <h3>Technical Skills</h3>
                        <div className="progress-bars">
                            {technicalSkills.map((skill, index) => (
                                <div key={index} className="skill-item">
                                    <div className="skill-info">
                                        <span className="skill-name">{skill.name}</span>
                                        <span className="skill-percentage">{skill.level}%</span>
                                    </div>
                                    <div className="progress-bar-bg">
                                        <div
                                            className="progress-bar-fill"
                                            style={{ width: `${skill.level}%` }}
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="soft-skills">
                        <h3>Soft Skills</h3>
                        <div className="soft-skills-grid">
                            {softSkills.map((skill, index) => (
                                <div key={index} className="soft-skill-card">
                                    <div className="soft-skill-dot"></div>
                                    <span>{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
