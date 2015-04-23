var underlying = require('underlying');

underlying.secondary = function(argument) {
  return argument.toLowerCase();
};

module.exports = function(argument) {
  return underlying.primary(argument);
};
