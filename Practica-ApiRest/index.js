const express = require('express');
const services = require('./services');
const handlers = require('./handlers');

const port = 3000;
const app = express();


app.get('/', handlers(services).get);


app.listen(port, () => {
  console.log('App listen on port: ', port);
});