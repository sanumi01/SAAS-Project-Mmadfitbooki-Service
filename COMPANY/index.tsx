import React from 'react';
import './styles.css';

const MamaadConsultantWebsite: React.FC = () => {
  return (
    <div className="website-container">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo-section">
            <h1 className="company-name">MAMAAD CONSULTANT LIMITED</h1>
            <p className="tagline">Cloud Solutions & Data Analytics Excellence</p>
          </div>
          <nav className="navigation">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section id="home" className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h2>Transform Your Business with Cloud Solutions</h2>
              <p>Expert cloud infrastructure, data analytics, and business intelligence solutions tailored for your success</p>
              <a href="#contact" className="cta-button">Get Started Today</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="container">
            <h2>About Mamaad Consultant Limited</h2>
            <div className="about-content">
              <div className="company-info">
                <p>Based in Larkhall, Scotland, United Kingdom, Mamaad Consultant Limited is a leading cloud solutions consultancy specializing in data analytics, cloud infrastructure, and enterprise system implementation.</p>
                <p>With over 9 years of combined expertise, we deliver robust, scalable solutions that drive business transformation and operational efficiency.</p>
              </div>
              
              <div className="leadership-team">
                <h3>Our Leadership Team</h3>
                <div className="team-grid">
                  <div className="team-member">
                    <h4>Mr. Kolade Adio</h4>
                    <p className="role">Senior Director</p>
                  </div>
                  <div className="team-member">
                    <h4>Miss Maya Adio</h4>
                    <p className="role">Co-Director</p>
                  </div>
                  <div className="team-member">
                    <h4>Miss Meggy Adio</h4>
                    <p className="role">Co-Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>     
   {/* Services Section */}
        <section id="services" className="services-section">
          <div className="container">
            <h2>Our Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Cloud Infrastructure</h3>
                <p>AWS/Azure cloud solutions, EC2, S3, Lambda, VPC, IAM configuration and optimization</p>
              </div>
              <div className="service-card">
                <h3>Database Engineering</h3>
                <p>PostgreSQL, MySQL, Snowflake, DynamoDB, NoSQL/NewSQL implementation and optimization</p>
              </div>
              <div className="service-card">
                <h3>Business Intelligence</h3>
                <p>Power BI, Tableau dashboards, data visualization, and predictive analytics solutions</p>
              </div>
              <div className="service-card">
                <h3>DevOps & Automation</h3>
                <p>CI/CD pipelines, Kubernetes, Docker, CloudFormation, and infrastructure automation</p>
              </div>
              <div className="service-card">
                <h3>Data Analytics</h3>
                <p>ETL pipelines, data warehousing, data lakes, and advanced analytics solutions</p>
              </div>
              <div className="service-card">
                <h3>System Integration</h3>
                <p>Enterprise system implementation, API integration, and legacy system modernization</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <h2>Contact Us</h2>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Get in Touch</h3>
                <div className="contact-details">
                  <p><strong>Location:</strong> Larkhall, Scotland, United Kingdom</p>
                  <p><strong>Company:</strong> Mamaad Consultant Limited</p>
                  <p>Ready to transform your business with cloud solutions? Contact us today for a consultation.</p>
                </div>
              </div>
              
              <div className="contact-form">
                <h3>Customer Inquiry Form</h3>
                <form className="inquiry-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input type="text" id="company" name="company" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="service">Service Interest</label>
                    <select id="service" name="service">
                      <option value="">Select a service</option>
                      <option value="cloud-infrastructure">Cloud Infrastructure</option>
                      <option value="database-engineering">Database Engineering</option>
                      <option value="business-intelligence">Business Intelligence</option>
                      <option value="devops-automation">DevOps & Automation</option>
                      <option value="data-analytics">Data Analytics</option>
                      <option value="system-integration">System Integration</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea id="message" name="message" rows={5} required placeholder="Please describe your project requirements or questions..."></textarea>
                  </div>
                  
                  <button type="submit" className="submit-button">Send Inquiry</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>   
   {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Mamaad Consultant Limited</h4>
              <p>Cloud Solutions & Data Analytics Excellence</p>
              <p>Larkhall, Scotland, United Kingdom</p>
            </div>
            
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Cloud Infrastructure</li>
                <li>Database Engineering</li>
                <li>Business Intelligence</li>
                <li>DevOps & Automation</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Technologies</h4>
              <ul>
                <li>AWS / Azure</li>
                <li>PostgreSQL / MySQL</li>
                <li>Power BI / Tableau</li>
                <li>Kubernetes / Docker</li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Leadership</h4>
              <ul>
                <li>Mr. Kolade Adio - Senior Director</li>
                <li>Miss Maya Adio - Co-Director</li>
                <li>Miss Meggy Adio - Co-Director</li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 Mamaad Consultant Limited. All rights reserved.</p>
            <p>Professional Cloud Solutions | Data Analytics | Business Intelligence</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MamaadConsultantWebsite;