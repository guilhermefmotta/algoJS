class Queue {
  constructor() {
    this.count = 0;
    this.lowerCount = 0;
    this.items = {}
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  };

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }

    const result = this.items[this.lowerCount];
    delete this.items[this.lowerCount];
    this.lowerCount++;
    return result;
  };

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowerCount];
  };

  isEmpty() {
    return this.count - this.lowerCount === 0;
  };

  size() {
    return this.count - this.lowerCount;
  };

  clear() {
    this.items = {};
    this.count = 0;
    this.lowerCount = 0;
  }

  toString() {
    if(this.isEmpty()) {
      return '';
    }

    let objString = `${this.items[this.lowerCount]}`;
    for (let i = this.lowerCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }

    return objString;
    }
}


export default Queue;
