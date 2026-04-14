import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind CSS', 'Responsive Design']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'REST APIs', 'PostgreSQL', 'MongoDB']
    },
    {
      title: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'Vercel', 'Postman', 'VS Code']
    },
    {
      title: 'Focus Areas',
      skills: ['Internal Dashboards', 'Business Tools', 'AI Integration', 'Workflow Automation', 'Data Visualization', 'User Experience']
    }
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Technologies and tools I use to build effective software solutions
        </p>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="skill-category-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
