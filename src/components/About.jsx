import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              I'm a software developer who builds practical applications that solve real business problems. My work focuses on creating internal tools, operational dashboards, and AI-assisted systems that help teams work more efficiently.
            </p>
            <p className="about-paragraph">
              I specialize in full-stack development with a strong emphasis on user experience and business value. Whether it's streamlining a manual workflow, building a custom CRM, or integrating AI capabilities into existing systems, I focus on delivering solutions that make a measurable impact.
            </p>
            <p className="about-paragraph">
              My approach combines technical execution with product thinking. I work to understand the actual problem before writing code, design interfaces that users actually want to use, and build systems that can scale as business needs evolve.
            </p>
          </div>
          <div className="about-highlights">
            <div className="about-highlight-card">
              <div className="about-highlight-icon">🎯</div>
              <h3 className="about-highlight-title">Business-Focused Development</h3>
              <p className="about-highlight-text">
                Building software that addresses real operational needs and delivers ROI
              </p>
            </div>
            <div className="about-highlight-card">
              <div className="about-highlight-icon">⚡</div>
              <h3 className="about-highlight-title">Modern Tech Stack</h3>
              <p className="about-highlight-text">
                Using current frameworks and tools to build maintainable, scalable applications
              </p>
            </div>
            <div className="about-highlight-card">
              <div className="about-highlight-icon">🔧</div>
              <h3 className="about-highlight-title">Full-Stack Capability</h3>
              <p className="about-highlight-text">
                Handling everything from database design to user interface implementation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
