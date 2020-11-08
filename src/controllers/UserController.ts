import { NextFunction, Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { hash, compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import Users, { UsersProps } from '../database/models/Users';
// eslint-disable-next-line import/extensions
import { secret } from '../configs/auth.json';

export default class UserController {
  async index(request: Request, response: Response, next: NextFunction) {
    const userRepo = getRepository(Users);

    const { email, password } = request.body;

    if (!email || !password) {
      const error = new Error('Please fill all fields!');
      error.status = 400;
      next(error);
    }

    try {
      const findUser = <UsersProps> await userRepo.findOne({ where: { email } });

      if (!findUser) {
        const error = new Error('User not found!');
        error.status = 401;
        next(error);
      }

      if (!await compare(password, findUser.password)) {
        const error = new Error('Invalid Password!');
        error.status = 401;
        next(error);
      }

      findUser.password = '';

      const id = findUser.id as number;

      const token = sign({ id }, secret, { expiresIn: 86400 });

      return response.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }

  async store(request: Request, response: Response, next: NextFunction) {
    const userRepo = getRepository(Users);

    const { name, email, password } = request.body;

    if (!name || !email || !password) {
      const error = new Error('Please fill all fields!');
      error.status = 400;
      next(error);
    }

    try {
      if (await userRepo.findOne({ where: { email } })) {
        const error = new Error('This e-mail is already exists!');
        error.status = 409;
        next(error);
      }

      const hashedPassword = await hash(password, 10);

      const user = new Users();

      user.name = name;
      user.email = email;
      user.password = hashedPassword;

      const { id } = await userRepo.save(user);

      const token = sign({ id }, secret, { expiresIn: 86400 });

      return response.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }
}
