import { Router } from 'express';
import loginController from '../controllers/loginController';
import loginMiddleware from '../middlewares/loginMiddleware';

const router = Router();

router.post('/', loginMiddleware, loginController.getByUsername);

export default router;