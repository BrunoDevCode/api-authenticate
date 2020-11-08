import 'reflect-metadata';
import express, {
  Request, Response, NextFunction,
} from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use((request, response, next) => {
  const error = new Error('Not found (404)');
  error.status = 404;
  next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  response.status(error.status || 500);
  response.json({ Error: error.message });
});

export default app;
