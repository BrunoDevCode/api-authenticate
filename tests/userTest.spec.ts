import request from 'supertest';
import { verify } from 'jsonwebtoken';
import { disconnect } from 'mongoose';
import app from '../src/app';
// eslint-disable-next-line import/extensions
import { secret } from '../src/configs/auth.json';
import { User } from '../src/models/Users';

describe('Testing user routes', () => {
  beforeAll(async () => {
    await User.deleteOne({ name: 'Bruno Henrique' });
  });

  afterAll(async () => {
    await disconnect();
  });

  it('Should be able to create new user and return jwt token', async () => {
    const response = await request(app)
      .post('/clients/register')
      .send({
        name: 'Bruno Henrique',
        email: 'brunohsantos@icloud.com',
        password: '123456',
      });

    if (response.status !== 201) console.log(response.error);

    expect(response.status).toBe(201);

    expect(response.body).toHaveProperty('token');

    const token = verify(response.body.token, secret);

    expect(token).toHaveProperty('_id');
  });

  it('Should be able to login user and return jwt token', async () => {
    const response = await request(app)
      .post('/clients/login')
      .send({
        email: 'brunohsantos@icloud.com',
        password: '123456',
      });

    if (response.status !== 200) console.log(response.error);

    expect(response.status).toBe(200);

    expect(response.body).toHaveProperty('token');

    const token = verify(response.body.token, secret);

    expect(token).toHaveProperty('_id');
  });
});
