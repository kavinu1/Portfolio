import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projectsData = [
    {
        title: 'MediGo – Ambulance Fleet Management System',
        description: 'Developed a smart ambulance fleet management system to improve emergency response coordination. Built a driver mobile application using Flutter and an admin dashboard using React and TypeScript. Used GitHub for version control and collaborative development within a team environment.',
        tags: ['Flutter', 'React', 'TypeScript', 'Node.js', 'Firebase'],
        githubPath: 'https://github.com/SDGP-03/MediGo',
        livePath: 'https://medigo.vercel.app'
    },
    {
        title: 'InnerSage – Climate Action Awareness Website (UN SDG 13)',
        description: 'Developed a website promoting Climate Action (UN Sustainable Development Goal 13). Created educational content explaining climate change causes, impacts, and sustainable solutions. Implemented responsive web design using HTML, CSS, and JavaScript.',
        tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        githubPath: 'https://github.com/thev1ndu/thev1ndu.github.io',
        livePath: 'https://innersage.xyz'
    },
    {
        title: 'Personal Portfolio Website',
        description: 'Developed a personal portfolio website to showcase technical projects and skills. Implemented modern UI components using React and TypeScript. Deployed the website using GitHub Pages.',
        tags: ['React', 'TypeScript', 'GitHub Pages'],
        githubPath: 'https://github.com/kavinu1/Portfolio',
        livePath: 'https://kavinu1.github.io/Portfolio'
    }
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
                        <div className="project-card glass animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }} key={index}>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span className="tag" key={idx}>{tag}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="project-links">
                                <a href={project.githubPath} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub Repo">
                                    <Github size={20} />
                                    <span>Code</span>
                                </a>
                                <a href={project.livePath} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live Demo">
                                    <ExternalLink size={20} />
                                    <span>Demo</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
