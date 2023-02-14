type Node<T> = {
  value: T,
  prev?: Node<T>,
  next?: Node<T>
}

// class NodeN<T> {
//   public value: T;
//   public next?: Node<T>;
//   public prev?: Node<T>;

//   constructor(value: T) {
//     this.value = value;
//     this.next = undefined;
//     this.prev = undefined;
//   }
// }


export default class DoublyLinkedList<T> {
  public length: number;
  private head?: Node<T>;
  private tail?: Node<T>;

  constructor() {
    this.length = 0;
    this.head = undefined;
    this.tail = undefined;
  }

  prepend(item: T): void {
    if (!this.head) {
      this.head = this.tail = { value: item };
    }
    else {
      const oldHead = this.head;
      const newHead = {
        value: item,
        prev: undefined,
        next: oldHead
      }
      this.head = newHead;
      oldHead.prev = newHead;
    }
    this.length++;
  }
  insertAt(item: T, idx: number): void {
    if (idx === 0) this.prepend(item);
    if (idx === this.length) this.append(item);
    else {
      const current = this.find(item);
      const node = { value: item} as Node<T>;
      if (current) {
        node.next = current;
        node.prev = current.prev;
        current.prev = node;
        current.prev.next = node;
        length++;
      }
    }
  }
  append(item: T): void {
    if (!this.tail) {
      this.head = this.tail = {
        value: item,
        prev: undefined,
        next: undefined
      }
    }
    else {
      const oldTail = this.tail;
      const newTail = {
        value: item,
        prev: oldTail,
        next: undefined
      }
      this.tail = newTail;
      oldTail.next = newTail;
    }
    this.length++;
  }
  remove(item: T): T | undefined {
    const toRemove = this.find(item);
    if (!toRemove) {
      return;
    }
    if (this.head === toRemove) {
      const oldHead = this.head;
      this.head = oldHead?.next;
      if (this.head?.prev) {
        this.head.prev = undefined;
      }
    }
    else if (this.tail === toRemove) {
      const oldTail = this.tail;
      this.tail = oldTail?.prev;
      if (this.tail?.next) {
        this.tail.next = undefined;
      }
    }
    else {
      if (toRemove.prev) {
        toRemove.prev.next = toRemove.next;
      }
      if (toRemove.next) {
        toRemove.next.prev = toRemove.prev;
      }
    }
    this.length--;
    return toRemove?.value;
  }
  private find(item: T): Node<T> | undefined {
    let result = this.head;
    while (result && result?.value !== item) {
      result = result?.next;
    }
    return result;
  }
  get(idx: number): T | undefined {
    let result = this.head;
    let current = 0;
    while (current !== idx) {
      result = result?.next;
      current++;
    }
    return result?.value;
  }
  removeAt(idx: number): T | undefined {
    const item = this.get(idx);
    return item && this.remove(item);
  }
}