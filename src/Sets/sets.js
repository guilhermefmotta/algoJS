class Set {
  constructor() {
    this.items = {};
  }

  has(element) {
    return Object.prototype.hasOwnProperty.concat(this.items, element);
  }

  add(element) {
    if(!this.has(element)) {
      this.items[element] = element;
      return true;
    }

    return false;
  }

  delete(element) {
    if(!this.has(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
}
