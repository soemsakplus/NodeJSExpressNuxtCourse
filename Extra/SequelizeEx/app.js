const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const sequelize = require('./database');
const Product = require('./product');

// app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json());

app.get('/insert',(req, res, next) => {
  console.log(req.body);
  Product.create({
    title: 'title',
    price: 100.0,
    imageUrl: 'imageUrl',
    description: 'description'
  })
    .then(result => {
      res.send('{"success":true}')
    })
    .catch(err => {
      res.status(404)
      res.render('error')
    });
})

app.post('/select',(req, res, next) => {
  console.log('/select');
  Product.findAll().then( products => {
    res.json(products)
  })
})

app.post('/select/:id',(req, res, next) => {
  console.log('/select/:id');
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

app.put('/select/:id',(req, res, next) => {
  console.log('/select/:id');
  Product.findAll({
      where: {
        id: parseInt(req.params.id)
      }
  }).then( products => {
    if(products.length > 0) {
      products[0].title = req.body.title
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

app.delete('/select/:id',(req, res, next) => {
  console.log('/select/:id');
  Product.findByPk(parseInt(req.params.id))
    .then(product => {
      return product.destroy().catch(err => {
        res.status(404)
        res.render('error')
      })
    })
    .then(result => {
      res.send('{"success":true}')
    })
    .catch(err => {
      next()
    });
})

app.post('/insert',(req, res, next) => {
  console.log(req.body);
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
})

app.use((req, res, next) => {
  res.status(404)
  res.render('error')
});

const server = http.createServer(app)

sequelize
  .sync()
  .then(result => {
    server.listen(3000)
  })
  .catch(err => {
    console.log(err);
  });