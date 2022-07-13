import { Router } from 'express';
import getAllUsers from '../controllers/productsController';

const router = Router();

router.get('/', getAllUsers);
router.post('/');

export default router;
