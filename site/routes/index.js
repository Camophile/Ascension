/*
 * Site Routing
 */

import { Router } from 'express';

import siteRouter from './site';
import constructionRouter from './construction';

const router = new Router();

export default (app) => {
  app.use('/construction', constructionRouter());
  app.use('/', siteRouter());

  return router;
}
