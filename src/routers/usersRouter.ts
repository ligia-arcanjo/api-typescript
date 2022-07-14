import { Router } from 'express';
import usersController from '../controllers/usersController';
import { validateUsername,
  validateClass,
  validateLevel,
  validatePassword } from '../middlewares/usersMiddleware';

const router = Router();

router.post(
  '/',
  validateUsername,
  validateClass,
  validateLevel,
  validatePassword,
  usersController.createUser,
);

export default router;
