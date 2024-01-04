"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');

var _ControllerToken = require('../controllers/ControllerToken'); var _ControllerToken2 = _interopRequireDefault(_ControllerToken);

const router = new (0, _express.Router)();

router.post('/', _ControllerToken2.default.store);

exports. default = router;
