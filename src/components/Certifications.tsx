import React from 'react';
import { Award } from 'lucide-react';
import './Certifications.css';

const certificationsData = [
    {
        title: 'Microsoft Azure AI Fundamentals',
        provider: 'Microsoft',
        date: 'March 2025',
        icon: <Award size={20} />
    },
    {
        title: 'Kubernetes',
        provider: 'CoDeKu DevOps Academy',
        date: 'September 2025',
        icon: <Award size={20} />
    },
    {
        title: 'Version Controlling',
        provider: 'CoDeKu DevOps Academy',
        date: 'December 2025',
        icon: <Award size={20} />
    },
    {
        title: 'Docker Beginners Guide',
        provider: 'CoDeKu DevOps Academy',
        date: 'September 2025',
        icon: <Award size={20} />
    },
    {
        title: 'Oracle Java Foundations',
        provider: 'LinkedIn Learning',
        date: 'June 2025',
        icon: <Award size={20} />
    },
    {
        title: 'Python Essential Training',
        provider: 'LinkedIn Learning',
        date: 'March 2025',
        icon: <Award size={20} />
    },
    {
        title: 'Data Science Math Skills',
        provider: 'Duke University',
        date: 'November 2023',
        icon: <Award size={20} />
    }
];

const Certifications: React.FC = () => {
    return (
        <section className="certifications section" id="certifications">
            <div className="container">
                <h2 className="section-title">
                    Professional <span>Certifications</span>
                </h2>

                <div className="cert-grid">
                    {certificationsData.map((cert, index) => (
                        <div className="cert-card glass animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }} key={index}>
                            <div className="cert-icon text-gradient">
                                {cert.icon}
                            </div>
                            <div className="cert-info">
                                <h3>{cert.title}</h3>
                                <p className="provider">{cert.provider}</p>
                                <p className="date">{cert.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
