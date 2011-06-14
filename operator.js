exports.add = function(a, b) {
  return (+a) + (+b);
};
Object.defineProperty(Math,'add',{value: exports.add});
exports.sum = Math.sum = function(args) {
  return args.reduce(Math.add);
}
module.exports = function() { return 'hi'; };

