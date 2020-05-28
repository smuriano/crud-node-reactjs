'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let env = process.env.NODE_ENV;
if (!env) {
  env = 'develop'
}

let config = require(`../config/database.${env}.json`);
let uri = `mongodb://root:root2020!@${config.databaseConfig.host}:27017/${config.databaseConfig.database}?authSource=admin`;

const message = require('../config/message.log');

module.exports = () => {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const conn = mongoose.connection;

  conn.on('connected', () =>
    message('connected', `Mongoose conectado em ${uri}`));

  conn.on('disconnected', () =>
    message('disconnected', `Mongoose desconectado de ${uri}`));


  conn.on('error', err =>
    message('error', `Erro de conexão com o Mongoose em ${uri}: ${err}`));
}