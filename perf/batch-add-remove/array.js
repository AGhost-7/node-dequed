var bench = require('./bench');

var i, i2;

bench('array', function(iter, batch) {
	var d = new Array();
	for(i = 0; i < iter; i++) {
		for(i2 = 0; i2 < batch; i2++) {
			d.unshift(i2);
		}
		for(i2 = 0; i2 < batch; i2++) {
			d.pop();
		}
	}
});
