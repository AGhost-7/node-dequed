function Node(element) {
	this.element = element;
	this.next = null;
	this.previous = null;
}

Node.prototype.toString = function() {
	return 'Node: { ' + this.element + ' }';
};

module.exports = Node;
