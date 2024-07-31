/** Node: node for a deque. */

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
      this.prev = null;
    }
}

/** Deque: chained-together nodes where you can
 *  remove from the front/back AND add to the front/back. */

 class Deque {
    constructor() {
      this.first = null;
      this.last = null;
      this.size = 0;
    }
  
    /** appendLeft(val): add new value to beginning of the deque. Returns undefined. */
  
    appendLeft(val) {
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

    /**appendRight(val): add new value to the end of the deque. Returns undefined. */

    appendRight(val) {
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
  
    /** popLeft(): remove the node from the start of the deque
     * and return its value. Should throw an error if the deque is empty. */
  
    popLeft() {
      let nodeToReturn;
  
      if (!this.first) {
        throw new Error("There are no items currently in the deque!");
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

    /** popRight(): remove the node from the end of the deque
     * and return its value. Should throw an error if the deque is empty. */

    popRight() {
        let nodeToReturn;
    
        if (!this.last) {
          throw new Error("There are no items currently in the deque!");
        }
        else if (this.first == this.last) {
          nodeToReturn = this.last;
          this.first = null;
          this.last = null;
        }
        else {
          nodeToReturn = this.last;
          this.last = this.last.prev;
          nodeToReturn.prev = null;
          this.last.next = null;
        }
        this.size--;
        return nodeToReturn.val;
    }
  
    /** peekLeft(): return the value of the first node in the deque. Returns null if there are no nodes currently in the deque.*/
  
    peekLeft() {
      return this.first.val;
    }

    /** peekRight(): return the value of the last node in the deque. Returns null if there are no nodes currently in the deque.*/
  
    peekRight() {
        return this.last.val;
    }
  
    /** isEmpty(): return true if the deque is empty, otherwise false */
  
    isEmpty() {
      return !this.size;
    }
  }
