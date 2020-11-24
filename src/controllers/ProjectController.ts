import { Response, NextFunction } from 'express';
import { UserRequest } from '../@types/request';
import { Project } from '../models/Projects';

export default class ProjectController {
  async create(request: UserRequest, response: Response, next: NextFunction) {
    const { title, description } = request.body;
    const { userID } = request;

    if (!title || !description) {
      const error = new Error('Please fill all fields');
      error.status = 400;
      next(error);
      return;
    }

    try {
      await Project.create({
        title,
        description,
        publisher: userID!,
      });

      return response.status(201).json({ Success: 'Project is created successfully' });
    } catch (error) {
      next(error);
    }
  }
}
