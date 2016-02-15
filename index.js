/**
 * Deque with constant time add and remove operations.
 */

var Node = require('./lib/node');

function Deque() {
	this.start = null;
	this.end = null;
}

/**
 * Add item at the start of the deque.
 *
 * Complexity: O(1)
 */
Deque.prototype.enqueue = function(element) {
	var node = new Node(element);
	if(this.start === null) {
		this.start = node;
		this.end = node;
	} else {
		// a bit complicated, but still constant time
		var orig = this.start;
		orig.previous = node;
		node.next = orig;
		this.start = node;
	}
};

/**
 * Remove item at the end of the deque.
 *
 * Complexity: O(1)
 */
Deque.prototype.dequeue = function() {
	var end = this.end;
	if(end === null) {
		return undefined;
	} else {
		var newEnd = end.previous;
		if(newEnd === null) {
			this.start = null;	
			this.end = null;
			return undefined;
		}

		newEnd.next = null;
		this.end = newEnd;
		return end.element;
	}
};

/**
 * Remove item at the begining of the queue.
 *
 * Complexity: O(1)
 */
Deque.prototype.pop = function() {
	if(this.start === null) {
		return undefined;
	}
	var orig = this.start;
	if(orig.next === null) {
		this.start = null;
		this.end = null;
		return orig.element;
	}
	var newStart = orig.next;
	
	newStart.previous = null;
	this.start = newStart;
	return orig.element;
};

/**
 * Inserts the element at the end of the deque.
 */
Deque.prototype.append = function(element) {
	var node = new Node(element);
	if(this.end === null) {
		this.start = node;
		this.end = node;
	} else {
		var orig = this.end;
		this.end = node;
		this.end.previous = orig;
		orig.next = this.end;
	}
};

/**
 * Complexity: O(1)
 */
Deque.prototype.isEmpty = function() {
	return this.start === null;
};

/**
 * Complexity: O(n)
 */
Deque.prototype.forEach = function(traversor) {
	var 
		node = this.start,
		index = 0;
	while(node !== null) {
		traversor(node.element, index, this);
		index += 1;
		node = node.next;
	}
};

/**
 * Converts the deque to an array.
 * Complexity: O(n)
 */
Deque.prototype.toArray = function() {
	var
		result = [],
		node = this.start;
	while(node !== null) {
		result.push(node.element);
		node = node.next;
	}
	
	return result;
};

/**
 * Complexity: O(n)
 */
Deque.fromArray = function(arr) {
	var q = new Deque();
	for(var i = arr.length - 1; i >= 0; i--) {
		q.enqueue(arr[i]);
	}
	return q;
};

module.exports = Deque;

