module.exports = function() {
	var args = arguments;
	return function(msg, block) {
		var start, end;
		start = Date.now();
		block.apply(null, args);
		end = Date.now();
		console.log(msg, end - start, 'ms');
	};
};
