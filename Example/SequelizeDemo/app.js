const http = require('http');
const express = require('express');
const sequelize = require('./database');
const OpdScreen = require('./opdscreen');

const app = express();
app.use(express.json());

app.get('/hn/:hn/vn/:vn',(req, res, next) => {
  OpdScreen.findAll({
    where: {
      hn: req.params.hn,
      vn: req.params.vn
    },
    attributes: {exclude: ['id']}
  }).then( item => {
    res.json(item)
  }).catch( err => {
    // res.status(404)
    // res.render('error')
    console.log(err)
  })
})

app.put('/hn/:hn/vn/:vn',(req, res, next) => {
  OpdScreen.findAll({
    where: {
      hn: req.params.hn,
      vn: req.params.vn
    },
    attributes: {exclude: ['id']}
  }).then( items => {
    if(items.length > 0) {
      var item = items[0]
      item.bpd = parseFloat(req.body.bpd)
      item.bps = parseFloat(req.body.bps)
      item.save()
      res.json(item)
    }
  }).catch( err => {
    // res.status(404)
    // res.render('error')
    console.log(err)
  })
})

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

const server = http.createServer(app);

sequelize
  .sync()
  .then(result => {
    server.listen(3000)
  })
  .catch(err => {
    console.log(err);
  });
