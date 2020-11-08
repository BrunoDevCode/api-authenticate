import 'reflect-metadata';
import express from 'express';
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

app.use((error, request, response, next) => {
  response.status(error.status || 500);
  response.json({ Error: error.message });
});

export default app;