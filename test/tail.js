var Tail = require('tail').Tail;

var tail = new Tail("test/rpc.log");

tail.on("line", function(data) {
  console.log(data);
});