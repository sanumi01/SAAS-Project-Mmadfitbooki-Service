import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceShowcase: React.FC = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get('/api/services');
                setServices(response.data);
            } catch (error) {
                console.error('Error fetching services:', error);
            }
        };

        fetchServices();
    }, []);

    return (
        <div className="service-showcase">
            <h2>Freelancer Services</h2>
            <div className="services-list">
                {services.map((service) => (
                    <div key={service.id} className="service-item">
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <p>Price: ${service.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServiceShowcase;