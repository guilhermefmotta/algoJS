class Deque {
  constructor() {
    this.count = 0;
    this.lowerCount = 0;
    this.items = {};
  }

  addFront(element) {
    if(this.isEmpty()) {
      this.addBack(element);
    } else if(this.lowerCount > 0) {
      this.lowerCount--;
      this.items[this.lowerCount] = element;
    } else {
      for (let i = this.count; i >0; i--) {
        this.item[i] = this.items[i-1];
      }

      this.count++;
      this.lowerCount = 0;
      this.items[0] = element;
    }
  }

  addBack(element) {

  }

  removeFront() {

  }

  removeBack() {

  }

  peekFront() {

  }

  peekBack() {

  }

}
export default Deque;
