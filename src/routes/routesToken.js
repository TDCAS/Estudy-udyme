import { Router } from 'express';

import controllerToken from '../controllers/ControllerToken';

const router = new Router();

router.post('/', controllerToken.store);

export default router;
