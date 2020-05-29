'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const message = require('./config/message.log');

const app = express();
const PORT = process.env.PORT || 3030;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const db = require('./database/database');
db();

const Produtos = require('./app/produtos/produtos.model');

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization");
  next();
});

require('./app/produtos/produtos.controller')(app);

app.listen(PORT, () => {
  message('start', `Servidor iniciado em http://localhost:${PORT}`);
});