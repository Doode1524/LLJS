// const treeify = require("treeify");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


class BST {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    function addNode() {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
        addNode();
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
        addNode();
      }
    }
    addNode();
  }
  find(value) {
    if (!this.root) return undefined;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else found = true;
    }

    if (!found) return "Nothing Found!";
    return current;
  }
}

const tree = new BST();

tree.insert(20);
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(30);
tree.insert(25);
tree.insert(32);
tree.insert(12);
tree.insert(16);

console.log(tree)
console.log(tree.find(20), 'find')

// console.log(treeify.asTree(tree, true));

// class BST {
//     constructor() {
//       this.root = null;
//     }
//     insert(value) {
//       const newNode = new Node(value);

//       if (!this.root) {
//         this.root = newNode;
//         return this;
//       }
//       let current = this.root;
//       while (true) {
//         if (value === current.value) return undefined;
//         if (value < current.value) {
//           if (!current.left) {
//             current.left = newNode;
//             return this;
//           }
//           current = current.left;
//         } else if (value > current.value) {
//           if (!current.right) {
//             current.right = newNode;
//             return this;
//           }
//           current = current.right;
//         }
//       }
//     }
//   }
