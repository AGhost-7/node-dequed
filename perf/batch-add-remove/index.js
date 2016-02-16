var runBenchmarks = require('../run-benchmarks');
runBenchmarks('batch-add-remove', [
	'my-deque',
	'my-deque-pooled',
	'double-ended-queue',
	'dequeue',
	'deque'
	// Takes forever...
	// 'array'
]);
