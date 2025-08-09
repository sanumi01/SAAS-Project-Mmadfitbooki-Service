import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Enquiries = () => {
    const [enquiries, setEnquiries] = useState([]);

    useEffect(() => {
        const fetchEnquiries = async () => {
            try {
                const response = await axios.get('/api/enquiries');
                setEnquiries(response.data);
            } catch (error) {
                console.error('Error fetching enquiries:', error);
            }
        };

        fetchEnquiries();
    }, []);

    return (
        <div>
            <h1>Client Enquiries</h1>
            <ul>
                {enquiries.map((enquiry) => (
                    <li key={enquiry.id}>
                        <h2>{enquiry.title}</h2>
                        <p>{enquiry.description}</p>
                        <p><strong>Client:</strong> {enquiry.clientName}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Enquiries;