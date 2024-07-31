/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
    }
    else {
      this.last.next = newNode;
      newNode.prev = this.last;
    }
    this.last = newNode;
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    let nodeToReturn;

    if (!this.first) {
      throw new Error("There are no items currently in the queue!");
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
      this.first.prev = null;
    }
    this.size--;
    return nodeToReturn.val;
  }

  /** peek(): return the value of the first node in the queue. Returns null if there are no nodes currently in the queue.*/

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return !this.size;
  }
}

module.exports = Queue;
