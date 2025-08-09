import { Router } from 'express';
import FreelancerController from '../controllers/freelancerController';

const router = Router();
const freelancerController = new FreelancerController();

// Route to register a freelancer
router.post('/register', freelancerController.registerFreelancer);

// Route to update freelancer profile
router.put('/profile/:id', freelancerController.updateFreelancerProfile);

// Route to get freelancer profile
router.get('/profile/:id', freelancerController.getFreelancerProfile);

// Route to showcase services
router.get('/services/:freelancerId', freelancerController.showcaseServices);

export default router;