import { Request, Response } from 'express';
import { Freelancer } from '../models/service';
import { S3Service } from '../services/s3Service';
import { CommissionService } from '../services/commissionService';

export class FreelancerController {
    private s3Service: S3Service;
    private commissionService: CommissionService;

    constructor() {
        this.s3Service = new S3Service();
        this.commissionService = new CommissionService();
    }

    public async registerFreelancer(req: Request, res: Response): Promise<void> {
        try {
            const freelancerData = req.body;
            const freelancer = new Freelancer(freelancerData);
            await freelancer.save();
            res.status(201).json({ message: 'Freelancer registered successfully', freelancer });
        } catch (error) {
            res.status(500).json({ message: 'Error registering freelancer', error });
        }
    }

    public async updateFreelancerProfile(req: Request, res: Response): Promise<void> {
        try {
            const freelancerId = req.params.id;
            const updatedData = req.body;
            const freelancer = await Freelancer.findByIdAndUpdate(freelancerId, updatedData, { new: true });
            if (!freelancer) {
                res.status(404).json({ message: 'Freelancer not found' });
                return;
            }
            res.status(200).json({ message: 'Freelancer profile updated successfully', freelancer });
        } catch (error) {
            res.status(500).json({ message: 'Error updating freelancer profile', error });
        }
    }

    public async showcaseServices(req: Request, res: Response): Promise<void> {
        try {
            const freelancerId = req.params.id;
            const services = await Freelancer.findById(freelancerId).populate('services');
            if (!services) {
                res.status(404).json({ message: 'No services found for this freelancer' });
                return;
            }
            res.status(200).json(services);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching services', error });
        }
    }

    public async calculateCommission(req: Request, res: Response): Promise<void> {
        try {
            const { amount } = req.body;
            const commission = this.commissionService.calculate(amount);
            res.status(200).json({ commission });
        } catch (error) {
            res.status(500).json({ message: 'Error calculating commission', error });
        }
    }
}