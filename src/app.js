/* eslint-disable spaced-comment */
import dotenv from 'dotenv';
import { resolve } from "path"

dotenv.config();

import './index.js';
import express from 'express';
import routesHome from './routes/routesHome.js';
import routesUser from './routes/routesUser.js';
import routesToken from './routes/routesToken.js';
import routersAluno from './routes/routerAluno.js';
import routerFoto from './routes/routerFoto.js';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extends: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads','imageS')))
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
