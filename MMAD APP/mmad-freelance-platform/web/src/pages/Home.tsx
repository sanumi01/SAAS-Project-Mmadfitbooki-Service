import React from 'react';
import { Link } from 'react-router-dom';
import ServiceShowcase from '../components/ServiceShowcase';
import FreelancerRegister from '../components/FreelancerRegister';
import ClientEnquiryForm from '../components/ClientEnquiryForm';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the MMAD Freelance Platform</h1>
            <p>Connect with freelancers and submit your enquiries.</p>
            <FreelancerRegister />
            <ClientEnquiryForm />
            <ServiceShowcase />
            <Link to="/freelancers">View Freelancers</Link>
            <Link to="/enquiries">View Enquiries</Link>
        </div>
    );
};

export default Home;