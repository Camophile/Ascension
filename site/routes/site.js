// Construction routes

import { Router } from 'express';

import { loadPage } from '../controllers/siteController';

const router = new Router();

export default () => {

  router.get('/about', loadPage);
  router.get('/', loadPage);

  return router;
}
