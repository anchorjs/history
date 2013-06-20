define(['events',
        'class'],
function(Emitter, clazz) {
  
  // https://developer.mozilla.org/en-US/docs/DOM/window.history
  // http://www.adequatelygood.com/2010/7/Saner-HTML5-History-Management
  // http://engineering.twitter.com/2012/12/implementing-pushstate-for-twittercom_7.html
  
  function History() {
    Emitter.call(this);
  }
  clazz.inherits(History, Emitter);
  
  History.prototype.back = function() {
    window.history.back();
  }
  
  History.prototype.forward = function() {
    window.history.forward();
  }
  
  History.prototype.go = function(i) {
    window.history.go(i);
  }
  
  History.prototype.push =
  History.prototype.pushState = function(url, data, title) {
    data = data || {};
    window.history.pushState(data, title, url);
    this.emit('pathChange', url);
  }
  
  // TODO: url argument should be optional (possibly not allowed)
  History.prototype.replace =
  History.prototype.replaceState = function(url, data, title) {
    data = data || {};
    window.history.replaceState(data, title, url);
  }
  
  return History;
});
