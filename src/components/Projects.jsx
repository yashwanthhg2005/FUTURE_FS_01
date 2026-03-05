import React from 'react';
import { ExternalLink, Github, Folder } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projectList = [
        {
            title: 'Personal Security and Health Monitor',
            description: 'A hardware-software mini project designed to monitor personal health metrics and provide security alerts. Includes real-time sensing, microcontroller processing, and active communication modules.',
            tech: ['IoT', 'Microcontrollers', 'C', 'Sensors'],
            github: '',
            live: ''
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Some Things I've Built</h2>
                <p className="section-subtitle">A showcase of my recent work and side projects.</p>

                <div className="projects-grid">
                    {projectList.map((project, index) => (
                        <div key={index} className="project-card fade-in">
                            <div className="project-header">
                                <Folder className="folder-icon" size={40} />
                                <div className="project-links">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {project.live && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
                                            <ExternalLink size={20} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="project-body">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>
                            </div>

                            <div className="project-footer">
                                <ul className="project-tech-list">
                                    {project.tech.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
