import { Router } from 'express';
import controllerFoto from '../controllers/ControllerFoto';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/', loginRequired, controllerFoto.store);

export default router;
