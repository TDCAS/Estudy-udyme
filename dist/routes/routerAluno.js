"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ControllerAluno = require('../controllers/ControllerAluno'); var _ControllerAluno2 = _interopRequireDefault(_ControllerAluno);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.post('/cadastra_aluno', _loginRequired2.default, _ControllerAluno2.default.cadastraAlunos);
router.get('/consulta_aluno:id', _ControllerAluno2.default.mostraAluno);
router.get('/consulta_todos_alunos', _ControllerAluno2.default.mostratodosalunos);
router.put('/alterar_aluno:id', _loginRequired2.default, _ControllerAluno2.default.updateAluno);
router.delete('/deleta_aluno:id', _loginRequired2.default, _ControllerAluno2.default.delete);

exports. default = router;
