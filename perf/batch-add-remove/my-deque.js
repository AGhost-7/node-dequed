var Deque = require('../../index');
var bench = require('./bench');
var i, i2;

bench('my-queue', function(iter, batch) {
	var d = new Deque();
	for(i = 0; i < iter; i++) {
		for(i2 = 0; i2 < batch; i2++) {
			d.enqueue(i2);
		}
		for(i2 = 0; i2 < batch; i2++) {
			d.dequeue();
		}
	}
});
