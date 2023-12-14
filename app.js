/* eslint-disable spaced-comment */
import dotenv from 'dotenv';

dotenv.config();

import './src/database';
import express from 'express';
import routesHome from './src/routes/routesHome';
import routesUser from './src/routes/routesUser';
import routesToken from './src/routes/routesToken';
import routersAluno from './src/routes/routerAluno';
import routerFoto from './src/routes/routerFoto';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extends: true }));
    this.app.use(express.json());
  }

  routes() { //Rotas de requizição ENDPONT
    this.app.use('/', routesHome);
    this.app.use('/users/', routesUser);
    this.app.use('/tokens/', routesToken);
    this.app.use('/aluno/', routersAluno);
    this.app.use('/fotos/', routerFoto);
  }
}

export default new App().app;
