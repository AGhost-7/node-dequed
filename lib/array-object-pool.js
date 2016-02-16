/**
 * Object recycling!
 */
var Node = require('./node');

// I think this is the max length for arrays?
var maxSafeLn = Math.pow(2, 32) - 1;

function ArrayObjectPool(initialize, maxLn) {
	this.objects = new Array(initialize || 32);
	this.length = 0;
	this.maxLn = maxLn || maxSafeLn;
}

/**
 * Returns a node from the pool or creates a new one. Note that it doesn't
 * zero out the previous and next property.
 */
ArrayObjectPool.prototype.node = function(element) {
	if(this.length === 0) {
		return new Node(element);
	} else {
		var node = this.objects.pop();
		node.element = element;
		this.length--;
		return node;
	}
};

/**
 * Adds a node to the pool unless it hit the cap.
 */
ArrayObjectPool.prototype.store = function(node) {
	if(node === undefined || node === null) throw new Error('Node is nil');
	if(this.objects.length < this.maxLn) {
		this.objects.push(node);
		this.length++;
	}
};

module.exports = ArrayObjectPool;
