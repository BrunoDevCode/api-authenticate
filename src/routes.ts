import { Router } from 'express';

import UserController from './controllers/UserController';

const routes = Router();

const userController = new UserController();

routes.post('/clients/login', userController.index);
routes.post('/clients/register', userController.store);

export default routes;
