type Node<T> = {
  value: T,
  next?: Node<T>
}

export default class Stack<T> {
  public length: number;
  private head?: Node<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    if (!this.head) {
      this.head = { value: item };
    }
    else {
      const currentHead = this.head;
      this.head = { value: item, next: currentHead };
    }
    this.length++;
  }
  pop(): T | undefined {
    if (!this.head) {
      return;
    }
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    return currentHead.value;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}