import { Router } from 'express';
import productsController from '../controllers/productsController';
import { validedateName, validateAmount } from '../middlewares/productsMiddleware';

const router = Router();

router.get('/', productsController.getAllProducts);
router.post('/', validedateName, validateAmount, productsController.createProduct);

export default router;
