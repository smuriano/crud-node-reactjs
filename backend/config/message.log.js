'use strict';

const chalk = require('chalk');

let def = chalk.gray;
let start = chalk.bold.green;
let connected = chalk.bold.cyan;
let error = chalk.bold.yellow;
let disconnected = chalk.bold.red;

module.exports = (type, message) => {
  switch (type) {
    case 'start':
      console.log(start(message));
      break;
    case 'connected':
      console.log(connected(message));
      break;
    case 'error':
      console.log(error(message));
      break;
    case 'disconnected':
      console.log(disconnected(message));
      break;
    default:
      console.log(def(message));
  }
}