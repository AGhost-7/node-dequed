var runBenchmarks = require('../run-benchmarks');
runBenchmarks('batch-add-remove', [
	'my-deque',
	'double-ended-queue',
	'dequeue',
	'deque'
	// Takes forever...
	// 'array'
]);
