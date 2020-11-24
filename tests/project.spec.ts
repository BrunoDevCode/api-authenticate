import request from 'supertest';
import app from '../src/app';

const tokenString = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmJjNDJiYzFiMGE1MTMxYTA3Yjc4N2YiLCJpYXQiOjE2MDYxNzMzNzMsImV4cCI6MTYwNjI1OTc3M30.-GuFnNdp1Y28mrTA2Z8XDk1-bofBThzLO4m_tR1EXd4';

describe('Routes of Projects', () => {
  it('Should be able to create new project', async () => {
    const createProject = await request(app)
      .post('/projects/create')
      .set({ Authorization: tokenString })
      .send({
        title: 'Create new recipe',
        description: 'We need a new recipe to chef do in new restaurant',
      });

    if (createProject.status !== 201) console.table(createProject.error);

    expect(createProject.status).toBe(201);
  });
});
