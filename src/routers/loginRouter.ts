import { Router } from 'express';
import loginController from '../controllers/loginController';
import { validadeUsername, validatePassword } from '../middlewares/loginMiddleware';

const router = Router();

router.post('/', validadeUsername, validatePassword, loginController.login);

export default router;
