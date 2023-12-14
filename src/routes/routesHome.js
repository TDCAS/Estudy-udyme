import { Router } from 'express';
import controllerHome from '../controllers/ControllerHome';

const router = new Router();

router.get('/', controllerHome.index);

export default router;
