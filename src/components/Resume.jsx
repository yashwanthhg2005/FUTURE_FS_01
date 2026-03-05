import React from 'react';
import { Download, FileText } from 'lucide-react';
import './Resume.css';

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <div className="container">
                <div className="resume-content">
                    <div className="resume-icon-wrapper">
                        <FileText size={64} className="resume-icon" />
                    </div>
                    <h2 className="section-title">My Resume</h2>
                    <p className="resume-desc">
                        Want to know more about my experience and skills?
                        Download my full resume to get a detailed overview of my professional background.
                    </p>
                    <a href="/resume.pdf" download className="btn btn-primary resume-btn">
                        <Download className="btn-icon-left" size={20} />
                        Download Resume (PDF)
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Resume;
