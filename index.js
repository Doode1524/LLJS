class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }
  getFirst() {
    return this.head;
  }
  clear() {
    this.head = null;
  }
  append(node) {
    let lastNode = this.getLast();
    lastNode.next = node;
  }
  prepend(node) {
    node.next = this.head;
    this.head = node;
  }
  addNodeAfterTarget(target, node) {
    let pointer = this.head;
    if (target) {
      while (pointer.data != target) {
        pointer = pointer.next;
      }
      node.next = pointer.next;
      pointer.next = node;
    }
  }
  findMiddle() {
    let pointer1 = this.head;
    let pointer2 = this.head;

    if (this.head) {
      while (pointer2 && pointer2.next) {
        pointer2 = pointer2.next.next;
        pointer1 = pointer1.next;
      }
      return pointer1.data;
    }
  }
  deleteNode(target) {
    let pointer = this.head;
    let prev = null;

    if (pointer && pointer.data == target) {
      this.head = pointer.next;
      return;
    }

    while (pointer && pointer.data != target) {
      prev = pointer;
      pointer = pointer.next;
    }

    if (pointer == null) {
        return
    }

    prev.next = pointer.next;
  }
}

let node1 = new ListNode(2);
let node2 = new ListNode(5);
let node3 = new ListNode(7);
let node4 = new ListNode(10);
let node5 = new ListNode(11);
let node6 = new ListNode(12);
let node7 = new ListNode(13);
let node8 = new ListNode(14);
let node15 = new ListNode(15);

let list = new LinkedList(node1);

list.prepend(node2);
list.prepend(node3);
list.append(node4);
list.append(node5);
list.append(node6);
list.append(node7);
list.append(node8);
list.addNodeAfterTarget(2, node15);
// list.deleteNode(5)
// list.deleteNode(13)
// list.deleteNode(15)

console.log(list.findMiddle(), "middle"); /// Charles' Code Challenge

console.log(list, "list");
console.log(list.size(), "size");

// console.log(list.getLast(), "last Node");
// console.log(list.getFirst(), "first node Node");
// console.log(list.clear());

// node1.next = node2;
// node2.next = node3;
