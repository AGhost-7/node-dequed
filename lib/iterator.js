
function Done() {
	this.done = true;
	this.value = undefined;
}

function Next(elem) {
	this.value = elem;
	this.done = false;
}

function Iterator (node) {
	this.node = node;
}

Iterator.prototype.next = function() {
	if(this.node === null) {
		return new Done();
	} else {
		var elem = this.node.element;
		this.node = this.node.next;
		return new Next(elem);
	}
};

module.exports = Iterator;
