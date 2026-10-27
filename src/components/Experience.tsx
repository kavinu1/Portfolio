import React from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience: React.FC = () => (
  <section className="education section" id="experience">
    <div className="container">
      <h2 className="section-title">
        Professional <span>Experience</span>
      </h2>
      <div className="timeline">
        <article className="timeline-item animate-fade-up">
          <div className="timeline-dot"></div>
          <div className="timeline-content glass-card">
            <div className="degree-header">
              <Briefcase size={20} className="text-gradient" />
              <h3>DevOps &amp; Cloud Platforms Intern</h3>
            </div>
            <p className="institution">N-able</p>
            <div className="edu-meta">
              <span className="meta-item"><Calendar size={14} /> September 2026 - Present</span>
              <span className="meta-item"><MapPin size={14} /> Colombo, Sri Lanka</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default Experience;
