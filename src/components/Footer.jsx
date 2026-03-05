import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-links">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <Twitter size={20} />
                    </a>
                </div>

                <p className="copyright">
                    Designed & Built with <Heart size={14} className="heart-icon" /> by <span className="author">Yashwanth HG</span>
                </p>
                <p className="year">© {currentYear} All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
