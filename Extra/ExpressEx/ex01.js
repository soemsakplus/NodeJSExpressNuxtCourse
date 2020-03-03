const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json());

app.get('/test1',(req, res, next) => {
  console.log(req.body);
  res.send('<h1>Hi Test1</h1>')
})

app.post('/test2/:id',(req, res, next) => {
  console.log(req.body);
  console.log(req.headers['user-agent'])
  res.send(JSON.stringify(req.body) + ' q: ' + req.query.qparam1 + ' id: ' + req.params.id)
})

// app.use('/',(req, res, next) => {
//   console.log('yyyy')
//   res.send('<h1>Hi Node</h1>')
// })

app.use((req, res, next) => {
  res.status(404)
  res.render('error')
});

const servcer = http.createServer(app)

servcer.listen(3000)