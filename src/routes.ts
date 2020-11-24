import { Router } from 'express';
import ProjectController from './controllers/ProjectController';

import UserController from './controllers/UserController';
import TokenMiddleware from './middleware/TokenMiddleware';

const routes = Router();

const userController = new UserController();
const projectController = new ProjectController();

routes.post('/clients/login', userController.index);
routes.post('/clients/register', userController.store);

routes.post('/projects/create', TokenMiddleware, projectController.create);

export default routes;
