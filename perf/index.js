var Deque = require('double-ended-queue');
var MyDeque = require('../index');

var testLn = 10000000;
var start, end, i, store;

console.log('~~~ Appending at start ~~~');

start = Date.now();
store = new Deque();
for(i = 0; i < testLn; i++) {
	store.unshift(i);
}
end = Date.now();
console.log('double-ended-queue time:', end - start, 'ms');

start = Date.now();
store = new MyDeque();

for(i = 0; i < testLn; i++) {
	store.enqueue(i);
}
end = Date.now();
console.log('my queue impl:', end - start, 'ms');

console.log('~~~ Appending at start and immediately removing at end ~~~');

start = Date.now();
store = new Deque();
for(var i = 0; i < testLn; i++) {
	store.unshift(i);
	store.pop();
}
end = Date.now();
console.log('double-ended-queue:', end - start, 'ms');

start = Date.now();

store = new MyDeque();
for(var i = 0; i < testLn; i++) {
	store.enqueue(i);
	store.dequeue();
}
end = Date.now();
console.log('my queue impl:', end - start, 'ms');

