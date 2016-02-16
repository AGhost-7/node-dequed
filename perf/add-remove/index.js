var runBenchmarks = require('../run-benchmarks');
runBenchmarks('add-remove', [
	'dequed',
	'dequed-pooled',
	'double-ended-queue',
	'dequeue',
	'deque'
	// Nope...
	// 'array'
]);
