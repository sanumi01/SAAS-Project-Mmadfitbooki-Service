export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    role: 'freelancer' | 'client';
}

export interface Service {
    id: string;
    freelancerId: string;
    title: string;
    description: string;
    price: number;
    createdAt: Date;
}

export interface Enquiry {
    id: string;
    clientId: string;
    serviceId: string;
    message: string;
    createdAt: Date;
}

export interface Commission {
    id: string;
    serviceId: string;
    amount: number;
    createdAt: Date;
}