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
              focused on DevOps engineering, cloud infrastructure, automation,
              and modern full-stack application delivery.
            </p>
            <p>
              I build and deploy practical software systems across web and
              mobile, including React, Node.js, Flutter, Firebase, SQL, and REST
              APIs. My project work includes containerization with Docker,
              CI/CD automation with GitHub Actions, and deployments across
              Vercel, Render, Netlify, and Cloudflare Pages.
            </p>
            <p>
              I enjoy Linux-based workflows, Git collaboration, code reviews,
              and solving reliability problems with a clear, analytical mindset.
              My goal is to apply DevOps practices to build efficient,
              production-ready systems with strong developer experience.
            </p>

            <div className="about-stats-grid">
              <div className="stat-card">
                <MapPin className="stat-icon" />
                <div className="stat-info">
                  <h4>Location</h4>
                  <p>Padukka, Sri Lanka</p>
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
