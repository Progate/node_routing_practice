const request = require('supertest');
const app = require('../answer.app');
// const app = require('../app');

describe('GET /', () => {
  it('should return the home page with a welcome message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('hello world');
  });
});

describe('GET /info', () => {
  it('should return the home page with a welcome message', async () => {
    const res = await request(app).get('/info');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("this is localhost:3000/info page");
  });
});

describe('GET /user', () => {
  it('should return the user page with the specified name', async () => {
    const res = await request(app).get('/user');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Welcome, Ken the Wanko!');
  });
});

describe('GET /form', () => {
  it('should return the form page', async () => {
    const res = await request(app).get('/form');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Fill out the form');
  });
});

describe('POST /submit', () => {
  it('should process the form and display submitted data', async () => {
    const res = await request(app)
      .post('/submit')
      .type('form')
      .send({ name: 'Jane', email: 'jane@example.com' });
    console.log(res.body);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ name: 'Jane', email: 'jane@example.com' });
  });
});
