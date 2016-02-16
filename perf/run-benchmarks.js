/**
 * Since I'm performance testing what are mostly linked lists, GC pulses
 * are going to affect the benchmark results. As it stands, if I move the order
 * of the benchmarks it seems to change the results. lol
 */
var fork = require('child_process').fork;
var join = require('path').join;

function run(files) {
	fork(files[0]).on('close', function() {
		if(files.length > 1) {
			run(files.slice(1));
		} else {
			console.log('suite completed');
		}
	});
}

module.exports = function(dir, files) {
	console.log('\n~~~ Running benchmark ' + dir + ' ~~~');
	run(files.map(function(file) { return join('perf', dir, file); }));
};
