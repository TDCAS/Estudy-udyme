"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable spaced-comment */
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();

require('./index.js');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _routesHomejs = require('./routes/routesHome.js'); var _routesHomejs2 = _interopRequireDefault(_routesHomejs);
var _routesUserjs = require('./routes/routesUser.js'); var _routesUserjs2 = _interopRequireDefault(_routesUserjs);
var _routesTokenjs = require('./routes/routesToken.js'); var _routesTokenjs2 = _interopRequireDefault(_routesTokenjs);
var _routerAlunojs = require('./routes/routerAluno.js'); var _routerAlunojs2 = _interopRequireDefault(_routerAlunojs);
var _routerFotojs = require('./routes/routerFoto.js'); var _routerFotojs2 = _interopRequireDefault(_routerFotojs);

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extends: true }));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads','imageS')))
  }

  routes() { //Rotas de requizição ENDPONT
    this.app.use('/', _routesHomejs2.default);
    this.app.use('/users/', _routesUserjs2.default);
    this.app.use('/tokens/', _routesTokenjs2.default);
    this.app.use('/aluno/', _routerAlunojs2.default);
    this.app.use('/fotos/', _routerFotojs2.default);
  }
}

exports. default = new App().app;
