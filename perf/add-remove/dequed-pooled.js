var Deque = require('../../index');
var Pool = Deque.ArrayObjectPool;
var bench = require('./bench');
var i;

bench('dequed-pooled', function(iter) {
	var d = new Deque();
	d.poolObjects(new Pool());
	for(i = 0; i < iter; i++) {
		d.enqueue(i);
		d.dequeue();
	}
});

