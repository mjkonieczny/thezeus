const airbnbBase = require('@neutrinojs/airbnb-base');
const node = require('@neutrinojs/node');
const mocha = require('@neutrinojs/mocha');

module.exports = {
  options: {
    root: __dirname,
  },
  use: [
    airbnbBase(),
    node(),
    mocha(),
  ],
};
