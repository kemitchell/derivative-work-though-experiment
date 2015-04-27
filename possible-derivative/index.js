var underlying = require('underlying');

// NOTE: This module makes a change, at runtime,
// to logic defined by the other module.

underlying.secondary = function(argument) {
  return argument.toLowerCase();
};

module.exports = function(argument) {
  return underlying.primary(argument);
};
