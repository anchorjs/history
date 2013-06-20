define(['history'],
function(history) {

  describe("websocket", function() {
    
    it('shoud export singleton instance', function() {
      expect(history).to.be.an('object');
    });
    
  });
  
  return { name: "test.history" }
});
