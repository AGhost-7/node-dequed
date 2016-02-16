var Deque = require('deque').Dequeue;
var bench = require('./bench');
var i;

bench('deque:', function(iter) {
	var d = new Deque();
	for(i = 0; i < iter; i++) {
		d.unshift(i);
	}
});
