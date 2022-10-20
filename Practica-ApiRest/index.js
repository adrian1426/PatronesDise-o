const express = require('express');
const services = require('./services');
const handlify = require('./handlers');

const port = 3000;
const app = express();

app.use(express.json());

const usersHandler = handlify('/users');


app.get('/', usersHandler(services).get);
app.post('/', usersHandler(services).post);
app.put('/:id', usersHandler(services).put);
app.delete('/:id', usersHandler(services).delete);


app.listen(port, () => {
  console.log('App listen on port: ', port);
});