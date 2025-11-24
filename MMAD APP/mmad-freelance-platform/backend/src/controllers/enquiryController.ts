import { Request, Response } from 'express';
import { Enquiry } from '../models/enquiry';

export class EnquiryController {
    public async createEnquiry(req: Request, res: Response): Promise<Response> {
        try {
            const { clientId, serviceId, message } = req.body;
            const newEnquiry = new Enquiry({ clientId, serviceId, message });
            await newEnquiry.save();
            return res.status(201).json({ message: 'Enquiry created successfully', enquiry: newEnquiry });
        } catch (error) {
            return res.status(500).json({ message: 'Error creating enquiry', error });
        }
    }

    public async getEnquiries(req: Request, res: Response): Promise<Response> {
        try {
            const enquiries = await Enquiry.find().populate('clientId serviceId');
            return res.status(200).json(enquiries);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching enquiries', error });
        }
    }

    public async getEnquiryById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const enquiry = await Enquiry.findById(id).populate('clientId serviceId');
            if (!enquiry) {
                return res.status(404).json({ message: 'Enquiry not found' });
            }
            return res.status(200).json(enquiry);
        } catch (error) {
            return res.status(500).json({ message: 'Error fetching enquiry', error });
        }
    }

    public async deleteEnquiry(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const enquiry = await Enquiry.findByIdAndDelete(id);
            if (!enquiry) {
                return res.status(404).json({ message: 'Enquiry not found' });
            }
            return res.status(200).json({ message: 'Enquiry deleted successfully' });
        } catch (error) {
            return res.status(500).json({ message: 'Error deleting enquiry', error });
        }
    }
}