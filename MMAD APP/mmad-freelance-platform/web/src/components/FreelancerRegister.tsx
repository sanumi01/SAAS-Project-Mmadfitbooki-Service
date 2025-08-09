import React, { useState } from 'react';

const FreelancerRegister: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [services, setServices] = useState<string[]>(['']);

    const handleServiceChange = (index: number, value: string) => {
        const updatedServices = [...services];
        updatedServices[index] = value;
        setServices(updatedServices);
    };

    const addService = () => {
        setServices([...services, '']);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const freelancerData = { name, email, password, services };
        // Call API to register freelancer
        console.log('Freelancer Data:', freelancerData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Freelancer Registration</h2>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
                <label>Services Offered:</label>
                {services.map((service, index) => (
                    <div key={index}>
                        <input
                            type="text"
                            value={service}
                            onChange={(e) => handleServiceChange(index, e.target.value)}
                            required
                        />
                    </div>
                ))}
                <button type="button" onClick={addService}>Add Service</button>
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default FreelancerRegister;