import { Router } from 'express';
import controllerAluno from '../controllers/ControllerAluno';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.post('/cadastra_aluno', loginRequired, controllerAluno.cadastraAlunos);
router.get('/consulta_aluno:id', controllerAluno.mostraAluno);
router.get('/consulta_todos_alunos', controllerAluno.mostratodosalunos);
router.put('/alterar_aluno:id', loginRequired, controllerAluno.updateAluno);
router.delete('/deleta_aluno:id', loginRequired, controllerAluno.delete);

export default router;
