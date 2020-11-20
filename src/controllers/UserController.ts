import { NextFunction, Request, Response } from 'express';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { User } from '../models/Users';
// eslint-disable-next-line import/extensions
import { secret } from '../configs/auth.json';

export default class UserController {
  async index(request: Request, response: Response, next: NextFunction) {
    const { email, password } = request.body;

    if (!email || !password) {
      const error = new Error('Please fill all fields!');
      error.status = 400;
      next(error);
    }

    try {
      const findUser = await User.findOne({ email }).select('+password');

      if (!findUser) {
        const error = new Error('User not found!');
        error.status = 401;
        next(error);
      }

      if (!await compare(password, findUser!.password)) {
        const error = new Error('Invalid Password!');
        error.status = 401;
        next(error);
      }

      findUser!.password = '';

      const _id = findUser!._id as number;

      const token = sign({ _id }, secret, { expiresIn: 86400 });

      return response.status(200).json({ token });
    } catch (error) {
      next(error);
    }
  }

  async store(request: Request, response: Response, next: NextFunction) {
    const { name, email, password } = request.body;

    if (!name || !email || !password) {
      const error = new Error('Please fill all fields!');
      error.status = 400;
      next(error);
    }

    try {
      if (await User.findOne({ where: { email } })) {
        const error = new Error('This e-mail is already exists!');
        error.status = 409;
        next(error);
      }

      const { _id } = await User.create({
        name,
        email,
        password,
      });

      const token = sign({ _id }, secret, { expiresIn: 86400 });

      return response.status(201).json({ token });
    } catch (error) {
      next(error);
    }
  }
}
