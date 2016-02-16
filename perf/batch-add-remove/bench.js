/**
 * First argument is the number of total iterations and the second argument
 * is how many items the deque will grow before items are removed from it.
 */
module.exports = require('../bench')(500000, 5000);
