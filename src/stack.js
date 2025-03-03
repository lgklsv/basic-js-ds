const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor() {
    this.length = 0;
  }

  push(element) {
    let stackLength = this.length;
    this[stackLength] = element;
    stackLength++;
    this.length = stackLength;
    return element;
  }

  pop() {
    let stackLength = this.length - 1;
    let element = this[stackLength];
    this.length = stackLength;
    delete this[stackLength];
    return element;
  }

  peek() {
    return this[this.length - 1];
  }
}

module.exports = {
  Stack
};
