var Deque = require('../index');
var expect = require('chai').expect;

describe('array converters', function() {
	var d = Deque.fromArray([1, 2, 3, 4]);
	it('should create an array with multiple items', function() {
		expect(d.toArray()).to.be.eql([1, 2, 3, 4]);
	});
});

describe('inserts', function() {
	describe('#enqueue', function() {
		it('should insert a single item', function() {
			var d = new Deque();
			d.enqueue(1);
			expect(d.toArray()).to.be.eql([1]);
		});
		it('should insert multiple items from the start', function() {
			var d = new Deque();
			d.enqueue(1);
			d.enqueue(2);
			expect(d.toArray()).to.be.eql([2,1]);
		});
	});

	describe('#append', function() {
		it('should insert a single item', function() {
			var d = new Deque();
			d.append(1);
			expect(d.toArray()).to.be.eql([1]);
		});
		it('inserts multiple items from the end', function() {
			var d = new Deque();
			d.append(1);
			d.append(2);
			expect(d.toArray()).to.be.eql([1,2]);
		});
	});

});

describe('removal', function() {
	describe('#dequeue', function() {
		it('should remove a single item', function() {
			var d = new Deque();
			d.enqueue(1);
			d.enqueue(2);
			expect(d.dequeue()).to.be.equal(1);
			expect(d.toArray()).to.be.eql([2]);
		});
		it('should remove multiple items', function() {
			var d = new Deque();
			d.enqueue(1);
			d.enqueue(2);
			d.enqueue(3);
			d.dequeue();
			expect(d.dequeue()).to.be.equal(2);
			expect(d.toArray()).to.be.eql([3]);
		});

		it('should handle unqueueing when already empty', function() {
			var d = Deque.fromArray([1]);
			d.dequeue();
			expect(d.dequeue()).to.be.undefined;
			expect(d.isEmpty()).to.be.true;
		});
		it('should handle items back after it was emptied', function() {
			var d = Deque.fromArray([1]);
			d.dequeue();
			d.enqueue(1);
			expect(d.toArray()).to.be.eql([1]);
		});
	});

	describe('#pop', function() {
		it('should remove a single item', function() {
			var d = Deque.fromArray([1, 2]);
			expect(d.pop()).to.be.equal(1);
			expect(d.toArray()).to.be.eql([2]);
		});
		it('should remove multiple items', function() {
			var d = Deque.fromArray([1, 2, 3, 4]);
			d.pop()
			expect(d.pop()).to.be.equal(2);
			expect(d.toArray()).to.be.eql([3, 4]);
		});
		var d = new Deque();
		it('should handle removing when already empty', function() {
			d.append(1);
			expect(d.pop()).to.be.eql(1);
			expect(d.pop()).to.be.undefined;
			expect(d.isEmpty()).to.be.true;
		});

		it('should still be good to add items back into the queue', function() {
			d.enqueue(1);
			d.enqueue(2);
			expect(d.toArray()).to.be.eql([2, 1]);
		});
	});
});


