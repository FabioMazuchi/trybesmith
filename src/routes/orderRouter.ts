import { Router } from 'express';
import orderController from '../controllers/orderController';
import authToken from '../middlewares/authToken';
import orderMiddleware from '../middlewares/orderMiddleware';

const router = Router();

router.get('/', orderController.getAll);
router.post('/', authToken, orderMiddleware, orderController.create);

export default router;