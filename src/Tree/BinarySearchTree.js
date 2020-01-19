import { Node } from './Node';
import {Compare, defaultCompare } from '../utils'

export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn;
    this.root = null;
  }

  insert(key) {
    if (this.root == null) {
      this.root = new Node(key);
    } else {
      this.insertNode(this.root, key);
    }
  };

  search(key) {
    return this.searchNode(this.root,key);
  };

  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  };

  preOrderTraverse(callback) {
    this.pre
  };

  postOrderTraverse() {
    this.postOrderTraverseNode(node, callback);
  };

  min() {
    return this.minNode(this.root);
  };

  max() {
    return this.maxNode(this.root);
  };

  remove(key) {
    this.root = this.removeNode(this.root, key);
  };

  insertNode(node, key)  {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      if(node.left == null) {
        node.left = new Node(key);
      } else {
        this.insertNode(node.left, key);
      }
    } else {
      if (node.right == null) {
        node.right = new Node(key);
      } else {
        this.insertNode(node.right, key);
      }
    }
  }

  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
    }
    callback(node.key);
    this.inOrderTraverseNode(node.right, callback);
  };

  preOrderTraverseNode(node, callback) {
    if (node != null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  postOrderTraverseNode(node,callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }

  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      current = current.right;
    }
    return current;
  }

  searchNode(node,key) {
    if (node == null) {
      return false;
    }

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      return this.searchNode(node.left, key);
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      return this.searchNode(node.right,key);
    } else {
      return true;
    }
  }

  removeNode(node,key) {
    if (node == null) {
      return null;
    }

    if (this.compareFn(key, node.key) ===  Compare.LESS_THAN) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      }

      if (node.left == null) {
        node = node.right;
        return node;
      } else if (node.right == null) {
        node = node.left;
        return node;
      }
      const aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }

}
