/*
 * Site Routing
 */

import { Router } from 'express';

import siteRouter from './site';
import constructionRouter from './construction';

const router = new Router();

export default (app) => {
  app.use('/no-view-mode', siteRouter());
  app.use('/', constructionRouter());

  return router;
}
