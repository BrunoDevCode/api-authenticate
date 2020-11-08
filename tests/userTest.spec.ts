import request from 'supertest';
import { verify } from 'jsonwebtoken';
import app from '../src/app';
// eslint-disable-next-line import/extensions
import { secret } from '../src/configs/auth.json';

describe('Testing user routes', () => {
  it('Should be able to create new user and return jwt token', async () => {
    const response = await request(app)
      .post('/clients/register')
      .send({
        name: 'Bruno Henrique',
        email: 'brunohsantos@icloud.com',
        password: '123456',
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('token');

    const token = verify(response.body.token, secret);

    expect(token).toHaveProperty('id');
  });
});
