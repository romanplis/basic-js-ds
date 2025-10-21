const { NotImplementedError } = require('../lib/errors');

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
    this.array = [];
  }
  push(element) {
    this.array.push(element);    
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      return this.array.pop();
    }           
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      return this.array[this.array.length - 1];
    }
  }
  
  isEmpty() {
    return this.array.length === 0;
  }  
}

module.exports = {
  Stack,
};
