class Queue {
  constructor() {
    this.queue = [];
  };

  get length() {
    return this.queue.length;
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    return this.queue.shift();
  }

  peak() {
    return this.queue[0];
  }

  isEmpty() {
    return this.length === 0;
  }
}

const movieQueue = new Queue();
movieQueue.enqueue("Chris");
movieQueue.enqueue("Jasper");
movieQueue.enqueue("Cooper");
movieQueue.enqueue("Sarah");
console.log(movieQueue.length); // 4
console.log(movieQueue.peek()); // Chris
movieQueue.dequeue();
console.log(movieQueue.peek()); // Jasper
movieQueue.dequeue();
movieQueue.dequeue();
movieQueue.dequeue();
console.log(movieQueue.isEmpty()); // true