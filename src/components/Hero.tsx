import React from "react";
import { ChevronRight, Terminal, Server, GitBranch, Code, Cpu, Cloud, Globe } from "lucide-react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="gradient-sphere one"></div>
        <div className="gradient-sphere two"></div>
        <div className="gradient-sphere three"></div>
        <div className="grid-overlay"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-up">
            <span className="badge-dot"></span>
            <span className="badge-text">Available for New Projects</span>
          </div>

          <h1 className="hero-title animate-fade-up animate-delay-1">
            Engineering the <span className="text-gradient">Future</span> <br />
            of Cloud & <br />
            <span className="text-gradient">DevOps.</span>
          </h1>

          <p className="hero-subtitle animate-fade-up animate-delay-2">
            Hi, I'm Kavinu. A Computer Science Undergraduate specializing in 
            scalable architectures, automated CI/CD pipelines, and high-performance 
            full-stack development. I turn complex problems into elegant systems.
          </p>

          <div className="hero-actions animate-fade-up animate-delay-3">
            <a href="#projects" className="btn btn-primary">
              View My Work <ChevronRight size={18} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Connect
            </a>
          </div>

          <div className="hero-tech-row animate-fade-up animate-delay-4">
            <div className="tech-pill">
              <Server size={14} /> <span>Docker</span>
            </div>
            <div className="tech-pill">
              <Cloud size={14} /> <span>AWS</span>
            </div>
            <div className="tech-pill">
              <Terminal size={14} /> <span>Linux</span>
            </div>
            <div className="tech-pill">
              <GitBranch size={14} /> <span>CI/CD</span>
            </div>
          </div>
        </div>

        <div className="hero-visual animate-fade-up animate-delay-2">
          <div className="visual-card main-card glass-tilt">
            <div className="card-header">
              <div className="header-dots">
                <span className="dot-red"></span><span className="dot-yellow"></span><span className="dot-green"></span>
              </div>
              <div className="header-title">kavinu@devops: ~</div>
            </div>
            <div className="card-body terminal-body">
              <div className="code-line type-1"><span className="code-cmd">kavinu@devops:~$</span> ./deploy.sh</div>
              <div className="code-line type-2"><span className="code-res">[INFO] Initializing cloud infrastructure...</span></div>
              <div className="code-line type-3"><span className="code-res">[INFO] Provisioning AWS resources...</span></div>
              <div className="code-line type-4"><span className="code-res">[INFO] Running Docker containers...</span></div>
              <div className="code-line type-5 success"><span className="code-cmd">✓</span> All services online & optimized.</div>
              <div className="code-line type-6 cursor-line"><span className="code-cmd">kavinu@devops:~$</span> <span className="cursor"></span></div>
            </div>
          </div>
          
          <div className="visual-card floating-card-1 glass">
            <Cpu size={24} className="icon-glow" />
            <div className="floating-info">
              <span className="label">Uptime</span>
              <span className="value text-gradient">99.99%</span>
            </div>
          </div>

          <div className="visual-card floating-card-2 glass">
            <Globe size={24} className="icon-glow" />
            <div className="floating-info">
              <span className="label">Global Edge</span>
              <span className="value text-gradient">Low Latency</span>
            </div>
          </div>
          
          <div className="visual-card floating-card-3 glass">
            <GitBranch size={24} className="icon-glow" />
            <div className="floating-info">
              <span className="label">Pipelines</span>
              <span className="value text-gradient">Automated</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero;
