export interface Enquiry {
    id: string;
    clientId: string;
    freelancerId: string;
    serviceId: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
}