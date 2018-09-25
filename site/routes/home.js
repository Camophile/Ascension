// Construction routes

import { Router } from 'express';

import * as controller from '../controllers/landingController';

const router = new Router();

export default () => {

  router.get('/', controller.index);

  return router;
}
