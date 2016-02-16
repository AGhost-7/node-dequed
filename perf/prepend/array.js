
var bench = require('./bench');
var i;

bench('array', function(iter) {
	var d = new Array();
	for(i = 0; i < iter; i++) {
		d.unshift(i);
	}
});
