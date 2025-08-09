import { Request, Response } from 'express';
import { Enquiry } from '../models/enquiry';

export class ClientController {
    public async submitEnquiry(req: Request, res: Response): Promise<Response> {
        try {
            const enquiryData = req.body;
            const newEnquiry = new Enquiry(enquiryData);
            await newEnquiry.save();
            return res.status(201).json({ message: 'Enquiry submitted successfully', enquiry: newEnquiry });
        } catch (error) {
            return res.status(500).json({ message: 'Error submitting enquiry', error });
        }
    }

    public async getEnquiries(req: Request, res: Response): Promise<Response> {
        try {
            const enquiries = await Enquiry.find();
            return res.status(200).json(enquiries);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching enquiries', error });
        }
    }
}