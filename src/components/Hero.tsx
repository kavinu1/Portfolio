import React from "react";
import { ChevronRight, Terminal, Server, GitBranch, Code } from "lucide-react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-sphere one"></div>
        <div className="gradient-sphere two"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge animate-fade-up">
          <Terminal size={16} />
          <span>
            Aspiring DevOps Engineer | BSc CS Undergrad @ UoW (via IIT)
          </span>
        </div>

        <h1 className="hero-title animate-fade-up animate-delay-1">
          DevOps <span className="text-gradient">Enthusiast</span> <br />
          building resilient systems <br />
          through automation.
        </h1>

        <p className="hero-subtitle animate-fade-up animate-delay-2">
          Computer Science undergraduate passionate about cloud infrastructure,
          automation, full-stack development, and deployment workflows with
          Docker, GitHub Actions, Vercel, Render, and Cloudflare Pages.
        </p>

        <div className="hero-actions animate-fade-up animate-delay-3">
          <a href="#projects" className="btn btn-primary">
            View Projects <ChevronRight size={18} />
          </a>
          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>

        <div className="hero-tech-stack animate-fade-up animate-delay-4">
          <div className="tech-item">
            <Server size={18} /> Docker
          </div>
          <div className="tech-item">
            <Terminal size={18} /> Linux
          </div>
          <div className="tech-item">
            <GitBranch size={18} /> Git & GitHub
          </div>
          <div className="tech-item">
            <Code size={18} /> React & Node.js
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
