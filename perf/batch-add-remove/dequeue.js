var bench = require('./bench');
var Deque = require('dequeue');
var i, i2;

bench('dequeue', function(iter, batch) {
	var d = new Deque();
	for(i = 0; i < iter; i++) {
		for(i2 = 0; i2 < batch; i2++) {
			d.unshift(i2);
		}
		for(i2 = 0; i2 < batch; i2++) {
			d.pop();
		}
	}
});
