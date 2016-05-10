const getBabelRelayPlugin = require('babel-relay-plugin');

const schemaData = require('./schema.json').data;

module.exports = getBabelRelayPlugin(schemaData);
