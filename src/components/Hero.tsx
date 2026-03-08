import React from 'react';
import { ChevronRight, Terminal, Server, GitBranch, Code } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <div className="gradient-sphere one"></div>
                <div className="gradient-sphere two"></div>
                <div className="grid-overlay"></div>
            </div>

            <div className="container hero-content">
                <div className="hero-badge animate-fade-in">
                    <Terminal size={16} />
                    <span>Year 2 CS Undergrad @ University of Westminster (via IIT Sri Lanka)</span>
                </div>

                <h1 className="hero-title animate-fade-in animate-delay-1">
                    DevOps <span className="text-gradient">Enthusiast</span> <br />
                    building reliable systems <br />
                    through automation.
                </h1>

                <p className="hero-subtitle animate-fade-in animate-delay-2">
                    Computer Science undergraduate passionate about cloud infrastructure, CI/CD, and containerization. Seeking a DevOps Engineering internship for my Year 3 industrial placement.
                </p>

                <div className="hero-actions animate-fade-in animate-delay-3">
                    <a href="#projects" className="btn btn-primary">
                        View Projects <ChevronRight size={18} />
                    </a>
                    <a href="#contact" className="btn btn-secondary">
                        Contact Me
                    </a>
                </div>

                <div className="hero-tech-stack animate-fade-in animate-delay-4">
                    <div className="tech-item"><Server size={20} /> Kubernetes (Learning)</div>
                    <div className="tech-item"><Terminal size={20} /> Linux</div>
                    <div className="tech-item"><GitBranch size={20} /> Git & GitHub</div>
                    <div className="tech-item"><Code size={20} /> React & Node.js</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
