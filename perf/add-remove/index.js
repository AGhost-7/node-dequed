var runBenchmarks = require('../run-benchmarks');
runBenchmarks('add-remove', [
	'my-deque',
	'double-ended-queue',
	'dequeue',
	'deque'
	// Nope...
	// 'array'
]);
