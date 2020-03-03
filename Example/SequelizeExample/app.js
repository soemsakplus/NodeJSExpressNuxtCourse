const http = require('http');
const express = require('express');
const sequelize = require('./database');
const Product = require('./product');

const app = express();
app.use(express.json());

app.post('/create', (req, res, next) => {
  Product.create({
    title: req.body.title,
    price: parseFloat(req.body.price),
    imageUrl: req.body.imageUrl,
    description: req.body.description
  })
    .then(result => {
      res.send('{"success":true}')
    })
    .catch(err => {
      res.status(404)
      res.render('error')
    });
});

app.get('/product/:id',(req, res, next) => {
  Product.findAll({
      where: {
        id: parseInt(req.params.id)
      }
  }).then( products => {
    res.json(products)
  }).catch( err => {
    res.status(404)
    res.render('error')
  })
})

app.put('/product/:id',(req, res, next) => {
  Product.findAll({
      where: {
        id: parseInt(req.params.id)
      }
  }).then( products => {
    if(products.length > 0) {
      products[0].description = req.body.description
      return products[0].save()
    }
  }).then(result => {
    res.send('{"success":true}')
  }).catch( err => {
    res.status(404)
    res.render('error')
  })
})

app.get('/product',(req, res, next) => {
  Product.findAll()
  .then( products => {
    res.json(products)
  })
})

app.use('/', (req, res, next) => {
  console.log('In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
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
