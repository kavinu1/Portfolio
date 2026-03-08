import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer section">
            <div className="container footer-content">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h3 className="footer-logo">Kavinu<span className="text-gradient">V</span></h3>
                        <p className="footer-desc">
                            DevOps enthusiast and Computer Science undergraduate (University of Westminster via IIT Sri Lanka). Focused on automation, containerization, and scalable deployments.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Navigation</h4>
                            <ul>
                                <li><a href="#about">About</a></li>
                                <li><a href="#skills">Skills</a></li>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Kavinu Vanniarachchi. All rights reserved.</p>
                    <div className="social-links">
                        <a href="https://github.com/kavinu1" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/kavinuv" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:kavinuthepul456@gmail.com" aria-label="Email">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
