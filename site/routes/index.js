/*
 * Site Routing
 */

import { Router } from 'express';

import landingRouter from './home';
import constructionRouter from './construction';

const router = new Router();

export default (app) => {
  app.use('/construction', constructionRouter());
  app.use('/', landingRouter());
  
  return router;
}
