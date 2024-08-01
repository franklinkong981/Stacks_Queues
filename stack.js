/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.last = newNode;
    }
    else {
      newNode.next = this.first;
    }
    this.first = newNode;
    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    let nodeToReturn;

    if (!this.first) {
      throw new Error("There are no items currently in the stack!");
    }
    else if (this.first == this.last) {
      nodeToReturn = this.first;
      this.first = null;
      this.last = null;
    }
    else {
      nodeToReturn = this.first;
      this.first = this.first.next;
      nodeToReturn.next = null;
    }
    this.size--;
    return nodeToReturn.val;
  }

  /** peek(): return the value of the first node in the stack. Returns null if there are no nodes currently in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return !this.size;
  }
}

function reverseString(word) {
  let wordStack = new Stack();
  for (letter of word) {
    wordStack.push(letter);
  }
  let reversedString = "";
  while (!wordStack.isEmpty()) {
    reversedString = reversedString.concat(wordStack.pop());
  }
  return reversedString;
}

console.log(reverseString('cat'));
console.log(reverseString('abcdefg'));

module.exports = Stack;
