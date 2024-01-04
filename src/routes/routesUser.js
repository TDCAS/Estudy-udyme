import { Router } from 'express';
import controllerUser from '../controllers/ControllerUser';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
// Não deveria existir
// router.get('/mostratodos/', loginRequired, controllerUser.index); // Lista todos usuario
// router.get('/mostraum:id', controllerUser.show); // Lista usuario

router.post('/', loginRequired, controllerUser.create);
router.put('/mostraum', loginRequired, controllerUser.update);
router.delete('/delete/', loginRequired, controllerUser.delete);

export default router;

/*
  cada controler tem que ter no maximo 5 metodos
    index -> lista todos os usuarios -> GET
    store/create -> cria um novo usuario -> POST
    show  -> mostra um usuario -> GET
    delete -> apaga um usuario -> DELETE
    updata  -> atualizar um usuario -> PATH(somente um valor) ou PUT()
  */
