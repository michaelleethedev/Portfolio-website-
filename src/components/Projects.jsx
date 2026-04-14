import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      icon: '🤖',
      title: 'AI Sales Ops Assistant',
      summary: 'Intelligent assistant that automates sales operations tasks and provides real-time insights for revenue teams.',
      problem: 'Sales teams waste hours on manual data entry, lead qualification, and report generation. This tool uses AI to handle routine operations work, letting reps focus on closing deals.',
      features: [
        'Automated lead scoring and qualification using GPT-4',
        'Natural language CRM data entry and updates',
        'Intelligent email drafting for outreach campaigns',
        'Real-time pipeline analytics and forecasting',
        'Integration with Salesforce and HubSpot APIs'
      ],
      tech: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL', 'Express', 'REST APIs'],
      github: 'https://github.com/saleem/ai-sales-ops',
      demo: null
    },
    {
      icon: '💻',
      title: 'IT Asset + Support Ticket Manager',
      summary: 'Centralized platform for tracking IT assets, managing support requests, and monitoring equipment lifecycle across an organization.',
      problem: 'IT departments struggle to track hardware inventory, manage support tickets, and plan equipment refreshes. This system consolidates asset management and helpdesk functions into one efficient workflow.',
      features: [
        'Complete asset lifecycle tracking with depreciation',
        'Ticket routing and SLA monitoring',
        'Equipment checkout/return workflow',
        'Automated maintenance reminders',
        'Custom reporting and analytics dashboard'
      ],
      tech: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express', 'Chart.js'],
      github: 'https://github.com/saleem/it-asset-manager',
      demo: null
    },
    {
      icon: '📝',
      title: 'Client Content Request Portal',
      summary: 'Self-service portal that streamlines content requests, approvals, and delivery for marketing and creative teams.',
      problem: 'Content requests arrive through email, Slack, and meetings, creating chaos for creative teams. This portal standardizes intake, tracks progress, and manages approvals in one place.',
      features: [
        'Structured request forms with file uploads',
        'Multi-stage approval workflows',
        'Real-time status tracking for clients',
        'Automated notifications and reminders',
        'Project timeline visualization and capacity planning'
      ],
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS S3', 'Tailwind CSS', 'Express'],
      github: 'https://github.com/saleem/content-request-portal',
      demo: null
    },
    {
      icon: '📊',
      title: 'Tutoring Progress Dashboard',
      summary: 'Analytics platform that helps tutoring businesses track student progress, schedule sessions, and measure learning outcomes.',
      problem: 'Tutoring centers need visibility into student performance trends and session effectiveness. This dashboard aggregates data from assessments and sessions to identify improvement areas and optimize teaching strategies.',
      features: [
        'Student performance tracking with visual trends',
        'Session scheduling and attendance management',
        'Automated progress reports for parents',
        'Subject-specific analytics and insights',
        'Tutor performance metrics and feedback system'
      ],
      tech: ['React', 'Python', 'Flask', 'PostgreSQL', 'Chart.js', 'Tailwind CSS'],
      github: 'https://github.com/saleem/tutoring-dashboard',
      demo: null
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          Real-world applications built to solve practical business problems
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
