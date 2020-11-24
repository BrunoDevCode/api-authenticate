import { Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import { UserRequest } from '../@types/request';
// eslint-disable-next-line import/extensions
import { secret } from '../configs/auth.json';

interface TokenProps {
  _id: string;
  iat: number;
  exp: number;
}

function TokenMiddleware(request: UserRequest, response: Response, next: NextFunction) {
  const token = request.headers.authorization;

  if (!token) {
    const error = new Error('Token not found!');
    error.status = 401;
    next(error);
  }

  try {
    const decodedToken = <TokenProps> verify(token!, secret);

    if (!decodedToken._id) {
      const error = new Error('Token is malformated!');
      error.status = 401;
      next(error);
    }

    request.userID = decodedToken._id;

    next();
  } catch (error) {
    next(error);
  }
}

export default TokenMiddleware;
