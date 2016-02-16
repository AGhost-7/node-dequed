/**
 * This contains some object recycling strategies to optimize add/remove
 * operations by limiting garbage collection.
 * NOTE: Should be array... Duh.
 */
var Node = require('./node');

function Recycler() {
	this.objects = {};
	this.length = 0;
}

Recycler.prototype.getNode = function(element) {
	if(this.length === 0) {
		return new Node(element);
	} else {
		var i = this.length - 1;
		var n = this.objects[i];
		delete this.objects[i];
		this.length = i;
		return n;
	}
};

Recycler.prototype.storeNode = function(node) {
	this.objects[this.length] = node;
	this.length += 1;
};

var noRecycler = {
	getNode: function(element) {
		return new Node(element);
	},
	storeNode: function() {}
};

// lazily initialize...
var globalRecycler = null;

function getRecycler(type, opts) {
	switch(type) {
		case 'norecycler': return noRecycler;
		case 'recycler': return new Recycler(opts);
		case 'global':
			if(globalRecycler === null) {
				globalRecycler = new Recycler();
			}
			return globalRecycler;

	}
}
module.exports = getRecycler;
