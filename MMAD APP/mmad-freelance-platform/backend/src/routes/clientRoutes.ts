import { Router } from 'express';
import { ClientController } from '../controllers/clientController';

const router = Router();
const clientController = new ClientController();

router.post('/register', clientController.registerClient);
router.get('/:id', clientController.getClient);
router.put('/:id', clientController.updateClient);
router.delete('/:id', clientController.deleteClient);

export default router;