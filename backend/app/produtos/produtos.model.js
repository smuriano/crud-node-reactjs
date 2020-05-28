'use strict';

const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
    trim: true
  },
  descricao: {
    type: String,
    require: true,
    trim: true
  },
  valor: {
    type: Number,
    require: true,
  }
});

module.exports = mongoose.model('Produtos', produtoSchema);