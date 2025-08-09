import { Router } from 'express';
import EnquiryController from '../controllers/enquiryController';

const router = Router();

router.post('/enquiries', EnquiryController.createEnquiry);
router.get('/enquiries/:id', EnquiryController.getEnquiry);
router.get('/enquiries', EnquiryController.getAllEnquiries);
router.delete('/enquiries/:id', EnquiryController.deleteEnquiry);

export default router;