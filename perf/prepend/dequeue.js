var bench = require('./bench');
var Deque = require('dequeue');
var i;

bench('dequeue', function(iter) {
	var d = new Deque();
	for(i = 0; i < iter; i++) {
		d.unshift(i);
	}
});
