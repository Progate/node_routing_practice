const request = require('supertest');
// const app = require('../answer.app');
const app = require('../app');

describe('GET /', () => {
  it('localhost:3000 にアクセスしたら「hello world」と表示されるようにしてください', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('hello world');
  });
});

describe('GET /info', () => {
  it('localhost:3000/info にアクセスしたら「this is localhost:3000/info page」と表示されるようにしてください', async () => {
    const res = await request(app).get('/info');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain("this is localhost:3000/info page");
  });
});

describe('GET /user', () => {
  it('localhost:3000 にアクセスしたら「Welcome, Ken the Wanko!」と表示されるようにしてください', async () => {
    const res = await request(app).get('/user');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Welcome, Ken the Wanko!');
  });
});

describe('GET /form', () => {
  it('localhost:3000/form にアクセスしたら、form.ejsが表示されるようにしてください', async () => {
    const res = await request(app).get('/form');
    expect(res.statusCode).toBe(200);
    expect(res.text).toContain('Fill out the form');
  });
});

describe('POST /submit', () => {
  it('postリクエストでlocalhost:3000/submit にリクエストを送信した時に、送信された内容が表示されるようにしてください', async () => {
    const res = await request(app)
      .post('/submit')
      .type('form')
      .send({ name: 'Jane', email: 'jane@example.com' });
    console.log(res.body);
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ name: 'Jane', email: 'jane@example.com' });
  });
});
