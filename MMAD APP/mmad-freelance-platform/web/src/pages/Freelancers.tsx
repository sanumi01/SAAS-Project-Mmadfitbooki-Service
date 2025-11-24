import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Freelancers = () => {
    const [freelancers, setFreelancers] = useState([]);

    useEffect(() => {
        const fetchFreelancers = async () => {
            try {
                const response = await axios.get('/api/freelancers');
                setFreelancers(response.data);
            } catch (error) {
                console.error('Error fetching freelancers:', error);
            }
        };

        fetchFreelancers();
    }, []);

    return (
        <div>
            <h1>Available Freelancers</h1>
            <ul>
                {freelancers.map(freelancer => (
                    <li key={freelancer.id}>
                        <h2>{freelancer.name}</h2>
                        <p>{freelancer.services.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Freelancers;