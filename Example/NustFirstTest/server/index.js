const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  const { host, port } = nuxt.options.server

  await nuxt.ready()
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express

  const axios = require('axios')
  let movieIndex = 0

  app.get('/movies', async (req, res, next) => {
    const movie = await axios.get(
      'http://localhost:3000/test1'
    )
    res.json(movie.data)
  })

  app.get('/test1',(req, res, next) => {
    console.log(req.body);
    var data = {
      "name": "xxx"
    }
    res.json(data)
  })

  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}
start()
