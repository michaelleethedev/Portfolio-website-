import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🌐',
      title: 'Business Websites',
      description: 'Professional websites and landing pages that represent your brand and convert visitors into customers.',
      details: [
        'Responsive design for all devices',
        'SEO optimization',
        'Fast loading performance',
        'Content management systems'
      ]
    },
    {
      icon: '📊',
      title: 'Internal Dashboards',
      description: 'Custom analytics and reporting dashboards that give your team real-time visibility into key metrics.',
      details: [
        'Data visualization and charts',
        'Real-time updates',
        'Role-based access control',
        'API integrations'
      ]
    },
    {
      icon: '⚙️',
      title: 'Workflow Systems',
      description: 'Automated systems that streamline repetitive tasks and connect your existing tools together.',
      details: [
        'Process automation',
        'Third-party integrations',
        'Custom business logic',
        'Notification systems'
      ]
    },
    {
      icon: '🤖',
      title: 'AI-Assisted Tools',
      description: 'Applications that leverage AI to enhance productivity, automate decisions, and provide intelligent insights.',
      details: [
        'Natural language processing',
        'Intelligent automation',
        'Predictive analytics',
        'Custom AI integrations'
      ]
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle">
          Available for both full-time opportunities and select freelance projects
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-details">
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="service-detail">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
