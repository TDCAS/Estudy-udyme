"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ControllerUser = require('../controllers/ControllerUser'); var _ControllerUser2 = _interopRequireDefault(_ControllerUser);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();
// Não deveria existir
// router.get('/mostratodos/', loginRequired, controllerUser.index); // Lista todos usuario
// router.get('/mostraum:id', controllerUser.show); // Lista usuario

router.post('/', _loginRequired2.default, _ControllerUser2.default.create);
router.put('/mostraum', _loginRequired2.default, _ControllerUser2.default.update);
router.delete('/delete/', _loginRequired2.default, _ControllerUser2.default.delete);

exports. default = router;

/*
  cada controler tem que ter no maximo 5 metodos
    index -> lista todos os usuarios -> GET
    store/create -> cria um novo usuario -> POST
    show  -> mostra um usuario -> GET
    delete -> apaga um usuario -> DELETE
    updata  -> atualizar um usuario -> PATH(somente um valor) ou PUT()
  */
