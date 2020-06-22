const express = require('express');
const routes = require('./routes');
var cors = require('cors');

const app = express();

const corsOpts = {
  origin: '*',

  methods: [
    'GET',
    'POST',
  ],

  allowedHeaders: [
    'Content-Type',
  ],
};

app.use(cors(corsOpts));
app.use(express.json());
app.use(routes);

app.listen(3333)