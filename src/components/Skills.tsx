import React from 'react';
import { Code, Server, Terminal, Settings, Cpu, Database, GitBranch, Lightbulb } from 'lucide-react';
import './Skills.css';

const skillCategories = [
    {
        title: 'DevOps & Cloud',
        icon: <Settings size={22} />,
        skills: ['Docker', 'CI/CD Concepts', 'Containerization', 'Application Deployment']
    },
    {
        title: 'Version Control',
        icon: <GitBranch size={22} />,
        skills: ['Git', 'GitHub', 'Branch-based Development Workflows']
    },
    {
        title: 'Programming & Scripting',
        icon: <Cpu size={22} />,
        skills: ['Python', 'JavaScript', 'TypeScript', 'Java']
    },
    {
        title: 'Web & App Dev',
        icon: <Code size={22} />,
        skills: ['React', 'Node.js', 'HTML', 'CSS', 'Flutter']
    },
    {
        title: 'Databases & Backend',
        icon: <Database size={22} />,
        skills: ['Firebase', 'REST APIs']
    },
    {
        title: 'Tools & Platforms',
        icon: <Terminal size={22} />,
        skills: ['Linux (Basic Admin)', 'Command Line Interface (CLI)']
    }
];

const learningSkills = [
    'Kubernetes container orchestration',
    'Cloud infrastructure and deployment practices',
    'Linux system administration',
    'DevOps automation workflows'
];

const coreCompetencies = [
    'Analytical problem solving and mathematical reasoning',
    'Strategic thinking (chess)',
    'Pattern recognition and logical reasoning',
    'Team collaboration in software development projects',
    'Fast learner with strong adaptability to new technologies'
];

const Skills: React.FC = () => {
    return (
        <section className="skills section" id="skills">
            <div className="container">
                <h2 className="section-title">
                    Technical <span>Arsenal</span>
                </h2>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div className="skill-category glass animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }} key={index}>
                            <div className="category-header">
                                <div className="category-icon text-gradient">
                                    {category.icon}
                                </div>
                                <h3>{category.title}</h3>
                            </div>
                            <ul className="skill-list">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="skill-item">
                                        <span className="bullet"></span>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="skills-extra-grid">
                    <div className="extra-section glass animate-slide-up" style={{ animationDelay: '0.6s' }}>
                        <div className="category-header">
                            <div className="category-icon text-gradient"><Lightbulb size={22} /></div>
                            <h3>Currently Learning</h3>
                        </div>
                        <ul className="skill-list">
                            {learningSkills.map((skill, idx) => (
                                <li key={idx} className="skill-item">
                                    <span className="bullet learning"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="extra-section glass animate-slide-up" style={{ animationDelay: '0.7s' }}>
                        <div className="category-header">
                            <div className="category-icon text-gradient"><Server size={22} /></div>
                            <h3>Core Competencies</h3>
                        </div>
                        <ul className="skill-list">
                            {coreCompetencies.map((skill, idx) => (
                                <li key={idx} className="skill-item">
                                    <span className="bullet competency"></span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
