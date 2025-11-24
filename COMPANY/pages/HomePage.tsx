
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, TEAM_MEMBERS } from '../constants';
import { Service, TeamMember } from '../types';

const ServiceListItem: React.FC<{ service: Service }> = ({ service }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 text-primary">
                <service.icon className="w-7 h-7" />
            </div>
        </div>
        <div>
            <h3 className="text-lg font-bold text-dark">{service.title}</h3>
            <p className="text-gray-600 mt-1">{service.description}</p>
        </div>
    </div>
);


const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <div className="text-center">
    <img
      src={member.imageUrl}
      alt={member.name}
      className="w-40 h-40 mx-auto rounded-full mb-4 object-cover shadow-lg border-4 border-white"
    />
    <h3 className="text-xl font-bold text-dark">{member.name}</h3>
    <p className="text-accent font-medium">{member.role}</p>
  </div>
);

const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-dark tracking-tighter leading-tight">
            Empowering Business with
            <br />
            <span className="text-primary">Cloud & Data Innovation</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Results-driven solutions in cloud infrastructure, data analytics, and business intelligence to drive transformation, efficiency, and growth.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark">Your Partner in Digital Transformation</h2>
            <div className="w-24 h-1 bg-accent mx-auto mt-4 mb-6"></div>
            <p className="text-lg text-gray-600">
                MAMAAD SOLUTION LIMITED is a results-driven Data, Cloud, and Business Intelligence professional consultancy. We have proven expertise in building, integrating, and optimizing robust database solutions within cloud-native and hybrid enterprise environments. Our team is adept at aligning data platforms with business strategy to drive transformation, operational efficiency, and innovation. We are currently focused on exploring and adopting NewSQL technologies for scalable, distributed database systems to keep our clients ahead of the curve.
            </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dark">Our Core Services</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We provide a comprehensive suite of services to meet your data and cloud needs, from infrastructure and security to advanced analytics and automation.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
                {SERVICES.map((service) => (
                    <ServiceListItem key={service.title} service={service} />
                ))}
            </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-white py-20">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-dark">Meet Our Leadership</h2>
                <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
                    Guided by experienced and forward-thinking directors.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {TEAM_MEMBERS.map((member) => (
                    <TeamMemberCard key={member.name} member={member} />
                ))}
            </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="container mx-auto px-6">
          <div className="bg-primary text-white rounded-lg shadow-xl p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">Let's discuss how our expertise in cloud and data solutions can help you achieve your goals. Reach out today for a no-obligation consultation.</p>
              <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 transform hover:scale-105">
                  Contact Us Now
              </Link>
          </div>
      </section>
    </div>
  );
};

export default HomePage;
