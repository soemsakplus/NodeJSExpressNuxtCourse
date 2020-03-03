const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json());

app.use('/', (req, res, next) => {
  console.log('This always runs!');
  next();
});

app.get('/product/:id', (req, res, next) => {
  res.send('{"id": ' + req.query.p1 + '}');
});

app.post('/create', (req, res, next) => {
  console.log(req.body);
  res.send(JSON.stringify(req.body));
});

app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});





const server = http.createServer(app);
server.listen(3000);