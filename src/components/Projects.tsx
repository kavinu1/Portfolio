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
    title: "MediGo – Ambulance Fleet Management System",
    description:
      "Smart ambulance fleet management system with a Flutter driver app and a React/TypeScript admin dashboard.",
    highlights: [
      "Designed and implemented CI/CD automation with GitHub Actions.",
      "Built mobile driver app and web dashboard for coordination workflows.",
      "Collaborated in a team with Git-based workflows and version control.",
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
    livePath: "https://medigolk.vercel.app",
  },
  {
    title: "Pet Clinic Management System (Full-Stack Web App)",
    description:
      "Full-stack pet clinic management web app with secure authentication, role-based access, and scalable deployments.",
    highlights: [
      "Implemented REST API with Express.js and a React (Vite) frontend.",
      "Added email/password auth with Firebase and role-based UI visibility.",
      "Deployed backend on Railway and frontend on Netlify for cloud hosting.",
    ],
    tags: [
      "React (Vite)",
      "Node.js",
      "Express.js",
      "Firebase Auth",
      "Firestore",
      "GitHub Actions",
      "Netlify",
      "Railway",
    ],
    githubPath: "https://github.com/kavinu1/pet-clinic",
    livePath: "https://pawlk.pages.dev",
  },
  {
    title: "InnerSage – Climate Action Awareness Website (UN SDG 13)",
    description:
      "Climate Action awareness website aligned with UN SDG 13, built with a clean responsive UI and educational content.",
    highlights: [
      "Created educational content on climate change causes, impacts, and solutions.",
      "Implemented responsive layout with HTML, CSS, and JavaScript.",
      "Published a lightweight static site focused on clarity and accessibility.",
    ],
    tags: ["HTML", "CSS", "JavaScript"],
    githubPath: "https://github.com/kavinu1/innersage",
    livePath: "https://innersage.xyz",
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
