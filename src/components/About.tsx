import React from "react";
import { BookOpen, MapPin, Brain, Users } from "lucide-react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>

        <div className="about-content">
          <div className="about-text glass-card animate-fade-up">
            <p className="highlight">
              I'm a{" "}
              <span className="text-gradient">
                Computer Science undergraduate
              </span>{" "}
              currently in Year 2, dedicated to mastering DevOps, cloud
              infrastructure, and system reliability.
            </p>
            <p>
              With a strong foundation in analytical problem solving and
              mathematical reasoning, I enjoy bridging the gap between
              development and operations. My experience ranges from building
              full-stack applications with React and Node.js to working with
              Docker, GitHub Actions-based automation, and collaborative
              branch-based Git workflows.
            </p>
            <p>
              I thrive in team environments and am a fast learner, constantly
              adapting to new technologies like Kubernetes and advanced cloud
              deployment practices. I am currently seeking a DevOps Engineering
              internship for my Year 3 industrial placement.
            </p>

            <div className="about-stats-grid">
              <div className="stat-card">
                <MapPin className="stat-icon" />
                <div className="stat-info">
                  <h4>Location</h4>
                  <p>Pannipitiya, Sri Lanka</p>
                </div>
              </div>
              <div className="stat-card">
                <BookOpen className="stat-icon" />
                <div className="stat-info">
                  <h4>Education</h4>
                  <p>BSc (Hons) CS @ UoW (via IIT)</p>
                </div>
              </div>
              <div className="stat-card">
                <Brain className="stat-icon" />
                <div className="stat-info">
                  <h4>Thinking</h4>
                  <p>Analytical / Strategic</p>
                </div>
              </div>
              <div className="stat-card">
                <Users className="stat-icon" />
                <div className="stat-info">
                  <h4>Teamwork</h4>
                  <p>Collaborative Developer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-visual">
            <div className="image-container">
              <div className="image-placeholder">
                <div className="code-block">
                  <pre>
                    <code>
                      {`apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: portfolio
  template:
    metadata:
      labels:
        app: portfolio
    spec:
      containers:
      - name: react-frontend
        image: kavinu/portfolio:latest
        ports:
        - containerPort: 80`}
                    </code>
                  </pre>
                </div>
              </div>
              <div className="image-decoration outline"></div>
              <div className="image-decoration fill"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
