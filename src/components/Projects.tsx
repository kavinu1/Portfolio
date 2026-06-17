import React from "react";
import { ExternalLink, Github } from "lucide-react";
import "./Projects.css";

type Project = {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubPath: string;
  livePath: string;
};

const projectsData: Project[] = [
  {
    title: "MediGo - Ambulance Fleet Management System",
    description:
      "Built a smart ambulance fleet management system to improve emergency dispatch efficiency.",
    highlights: [
      "Developed a cross-platform driver app (Flutter) and admin dashboard (React + TypeScript).",
      "Built CI/CD pipelines with GitHub Actions for automated build, test, and deployment.",
      "Integrated Firebase for real-time data, authentication, and backend services.",
      "Collaborated using Git workflows (PRs, code reviews) in a team environment.",
    ],
    tags: [
      "Flutter",
      "React",
      "TypeScript",
      "Node.js",
      "Firebase",
      "GitHub Actions",
      "Vercel",
    ],
    githubPath: "https://github.com/SDGP-03/MediGo",
    livePath: "https://medigolk.vercel.app/",
  },
  {
    title: "Pet Clinic Management System (Full-Stack Web App)",
    description:
      "Engineered a scalable full-stack pet clinic system featuring secure access control and automated containerized deployment.",
    highlights: [
      "Engineered a scalable full-stack pet clinic system using React and Express.js.",
      "Secured user access with Firebase Authentication and role-based authorization.",
      "Designed and deployed containerized applications using Docker and Docker Compose.",
      "Automated build and deployment workflows with GitHub Actions (CI/CD).",
    ],
    tags: [
      "React (Vite)",
      "Node.js",
      "Express.js",
      "Firebase",
      "Docker",
      "GitHub Actions",
      "Cloudflare Pages",
      "Render",
    ],
    githubPath: "https://github.com/kavinu1/pet-clinic",
    livePath: "https://pawlk.pages.dev/",
  },
  {
    title: "InnerSage - Climate Action Awareness Website (UN SDG 13)",
    description:
      "Built a responsive climate awareness platform supporting UN SDG 13 (Climate Action) with educational content.",
    highlights: [
      "Built a responsive climate awareness platform supporting UN SDG 13 (Climate Action).",
      "Delivered educational content on climate change and sustainability practices.",
      "Ensured cross-device compatibility using modern HTML, CSS, and JavaScript.",
      "Automated validation and deployment using GitHub Actions workflows (W3C validation, Jekyll Pages, static checks).",
    ],
    tags: ["HTML", "CSS", "JavaScript", "GitHub Actions"],
    githubPath: "https://github.com/kavinu1/innersage",
    livePath: "https://innersage.xyz",
  },
  {
    title: "Portfolio Website (Vite React TS)",
    description:
      "Developed a modern personal portfolio using React (Vite) and TypeScript to showcase projects and skills.",
    highlights: [
      "Developed a modern personal portfolio using React (Vite) and TypeScript.",
      "Designed responsive and user-friendly UI to showcase projects and skills.",
      "Implemented reusable components and optimized performance for fast loading.",
      "Integrated smooth navigation and clean layout for better user experience.",
      "Deployed production-ready application on Cloudflare Pages with GitHub integration.",
    ],
    tags: ["React (Vite)", "TypeScript", "HTML", "CSS", "GitHub", "Cloudflare Pages"],
    githubPath: "https://github.com/kavinu1/Portfolio.git",
    livePath: "https://kavinu.pages.dev/",
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">
          Featured <span>Projects</span>
        </h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <article
              className="project-card glass-card animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              key={project.title}
            >
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <ul className="project-highlights" aria-label="Key highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span className="tag" key={idx}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a
                  href={project.githubPath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`Open ${project.title} source code on GitHub`}
                >
                  <Github size={20} />
                  <span>Code</span>
                </a>
                <a
                  href={project.livePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`Open ${project.title} live demo`}
                >
                  <ExternalLink size={20} />
                  <span>Demo</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
