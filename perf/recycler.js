/**
 * So, depending on how I decide to implement this it could affect the perf.
 */


// First question I'd like to ask is if adding a function call is going to
// hurt performance much. Should be inlined but ya never know...
var recycler = require('../lib/recycler');
var Node = require('../lib/node');
var bench = require('./bench');
var norecycler = recycler('norecycler');

var i;
var iterations = 10000000;

bench(iterations)('with norecycler', function(iter) {
	var arr = new Array(iter);
	for(i = 0; i < iter; i++) {
		arr.push(norecycler.getNode(1));
	}
});

bench(iterations)('without norecycler', function(iter) {
	var arr = new Array(iter);
	for(i = 0; i < iter; i++) {
		arr.push(new Node(i));
	}
});

bench(iterations)('bool checking without norecycler', function(iter) {
	var arr = new Array(iter);
	var self = { recycler: false };
	for(i = 0; i < iter; i++) {
		if(self.recycler) {
			arr.push(self.recycle(i));
		} else {
			arr.push(new Node(i));
		}
	}
});
// Should my underlying structure be an array or object? Prob an array, but
// I want to see how well it performs with a large number of elements...
//bench(iterations)('object pool: array', function(iter) {
//	var arr = new Array(iter);
//	for(var i = 0; i < iter; i++) {
//		arr.push(i);
//	}
//});

bench(iterations)('object pool: object', function(iter) {
	var ln = 0;
	var obj = {};
	for(var i = 0; i < iter; i++) {
		obj[i] = i;
		ln++;
	}
});
// annnnd seems to fall behind.

