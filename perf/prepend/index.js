
var runBenchmarks = require('../run-benchmarks');
runBenchmarks('prepend', [
	'my-deque',
	'double-ended-queue',
	'deque',
	'dequeue'
	// takes way too long
	//'array'
]);
