import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import './Education.css';

const educationData = [
    {
        degree: 'BSc (Hons) Computer Science',
        institution: 'University of Westminster – via IIT Sri Lanka',
        duration: 'Currently: Year 2 Undergraduate',
        expectation: 'Expected Graduation: 2028',
        location: 'Colombo, Sri Lanka'
    },
    {
        degree: 'International Advanced Level (IAL) – Mathematics Stream',
        institution: 'Pearson Edexcel',
        duration: 'Completed: 2025',
        location: 'Sri Lanka'
    },
    {
        degree: 'GCE Ordinary Level (O/L)',
        institution: 'Dharmapala Vidyalaya Pannipitiya',
        duration: 'Completed: 2023 (2024)',
        location: 'Pannipitiya, Sri Lanka'
    }
];

const Education: React.FC = () => {
    return (
        <section className="education section" id="education">
            <div className="container">
                <h2 className="section-title">
                    Education <span>Journey</span>
                </h2>

                <div className="timeline">
                    {educationData.map((item, index) => (
                        <div className="timeline-item animate-fade-up" style={{ animationDelay: `${index * 0.2}s` }} key={index}>
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass-card">
                                <div className="degree-header">
                                    <GraduationCap size={20} className="text-gradient" />
                                    <h3>{item.degree}</h3>
                                </div>
                                <p className="institution">{item.institution}</p>
                                <div className="edu-meta">
                                    <span className="meta-item">
                                        <Calendar size={14} />
                                        {item.duration}
                                    </span>
                                    {item.expectation && (
                                        <span className="meta-item expectation">
                                            {item.expectation}
                                        </span>
                                    )}
                                    <span className="meta-item">
                                        <MapPin size={14} />
                                        {item.location}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
