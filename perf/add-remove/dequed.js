var Deque = require('../../index');
var bench = require('./bench');
var i;

bench('dequed', function(iter) {
	var d = new Deque();
	for(i = 0; i < iter; i++) {
		d.enqueue(i);
		d.dequeue();
	}
});

