var Deque = require('double-ended-queue');
var bench = require('./bench');
var i;

bench('double-ended-queue', function(iter) {
	var d = new Deque();
	for(i = 0; i < iter; i++) {
		d.unshift(i);
		d.pop();
	}
});
