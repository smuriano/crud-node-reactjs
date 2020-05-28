'use strict';

const express = require('express');
const router = express.Router();

const validationContract = require('../../shared/validator');

const produtosRepository = require('./produtos.model');

router.get('/', async (req, res) => {
  try {
    var produto = await produtosRepository.find({}, '_id nome descricao valor');
    res.send({
      success: true,
      data: produto
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: 'Erro ao buscar a lista de produtos',
      error: err
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    var produto = await produtosRepository.findById(req.params.id, '_id nome descricao valor');
    res.send({
      success: true,
      data: produto
    });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: `Erro ao buscar o produto ${req.params.id}`,
      error: err
    });
  }
});

router.post('/', async (req, res) => {
  let contract = new validationContract();
  contract.hasMinLen(req.body.nome, 2, 'O nome do produto deve conter pelo menos 2 caracteres');
  contract.hasMinLen(req.body.descricao, 2, 'A descrição do produto deve conter pelo menos 2 caracteres');
  contract.isGreaterOrEqualsThan(req.body.valor, 0, 'O valor do produto deve ser maior que ou igual a 0');

  // Se os dados forem inválidos
  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }

  try {
    const {
      nome,
      descricao,
      valor
    } = req.body;

    const produto = await produtosRepository.create({
      nome,
      descricao,
      valor
    });

    await produto.save();

    res
      .status(201)
      .send({
        success: true,
        data: produto
      });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: 'Erro ao cadastrar o produto',
      error: err
    });
  }
});

router.put('/:id', async (req, res) => {
  let contract = new validationContract();
  contract.hasMinLen(req.body.nome, 2, 'O nome do produto deve conter pelo menos 2 caracteres');
  contract.hasMinLen(req.body.descricao, 2, 'A descrição do produto deve conter pelo menos 2 caracteres');
  contract.isGreaterOrEqualsThan(req.body.valor, 0, 'O valor do produto deve ser maior que ou igual a 0');

  // Se os dados forem inválidos
  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }

  const _id = req.params.id;
  try {
    const {
      nome,
      descricao,
      valor
    } = req.body;

    const produto = await produtosRepository.findByIdAndUpdate(_id, {
      nome,
      descricao,
      valor
    }, {
      new: true
    });

    await produto.save();

    res
      .status(204)
      .send({
        success: true,
        data: produto
      });

  } catch (err) {
    res.status(400).send({
      success: false,
      message: `Erro ao atualizar o produto ${_id}`,
      error: err
    });
  }
});

router.delete('/:id', async (req, res) => {
  const _id = req.params.id;
  try {
    await produtosRepository.findByIdAndRemove(_id);

    res
      .send({
        success: true,
        message: 'Produto excluído com sucesso'
      });
  } catch (err) {
    res.status(400).send({
      success: false,
      message: `Erro ao excluir o produto ${_id}`,
      error: err
    });
  }
});

module.exports = app => app.use('/produtos', router);