"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ControllerHome = require('../controllers/ControllerHome'); var _ControllerHome2 = _interopRequireDefault(_ControllerHome);

const router = new (0, _express.Router)();

router.get('/', _ControllerHome2.default.index);

exports. default = router;
