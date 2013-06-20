define(['exports', 'module',
        './lib/history'],
function(exports, module, History) {
  if (!!(window.history && window.history.pushState)) {
    exports = module.exports = new History();
  } else {
    exports = module.exports = null;
  }
});
