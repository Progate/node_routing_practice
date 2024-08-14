const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// "localhost:3000"にアクセスできるようにしてください。
// アクセスしたら"hello world"と表示してください。
app.get('/', (req, res) => {
  res.send('hello world');
})

// "localhost:3000/info”にアクセスできるようにしてください。
// アクセスしたら"this is localhost:3000/info page"と表示してください。
app.get('/info', (req, res) => {
  res.send("this is localhost:3000/info page");
})

const user = "Ken the Wanko";
// "localhost:3000/user"にアクセスできるようにしてください。
// アクセスしたら変数userの情報が表示されるようにしてください。
// 表示に使うファイルはviews/user.ejsにしてください
app.get('/user', (req, res) => {
  res.render('user', {user: user});
})

// "localhost:3000/form"にアクセスできるようにしてください。
// 表示にはviews/form.ejsを使ってください。
app.get('/form', (req, res) => {
  res.render('form')
})

// "localhost:3000/submit"にPOSTリクエストでアクセスできるようにしてください。
// アクセスしたら送信された内容を表示するようにしてください。
app.post('/submit', (req, res) => {
  res.send(req.body);
})

if (require.main === module) {
  app.listen(port, () => {
    console.log(`listening on port ${port}`)
  })
} else {
  module.exports = app;
}
