const express = require('express');
const axios = require('axios');
const { get } = require('./handlers');

const app = express();

app.get('/', get(axios));

app.listen(3000, () => {
  console.log('App listening');
});