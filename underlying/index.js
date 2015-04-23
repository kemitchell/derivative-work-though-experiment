exports.primary = function(argument) {
  return secondary(argument).reverse();
};

exports.secondary = function(argument) {
  return argument.toUpperCase();
};
