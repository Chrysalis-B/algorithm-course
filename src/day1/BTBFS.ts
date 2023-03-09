export default function bfs(head: BinaryNode<number>, needle: number): boolean {
  return traverse([head], needle);
}


const traverse = (queue: BinaryNode<number>[], needle: number): boolean => {
  if (queue.length === 0) {
    return false;
  }
  else if (queue[0].value === needle) {
    return true;
  }
  queue[0].left && queue.push(queue[0].left);
  queue[0].right && queue.push(queue[0].right);
  queue.shift();
  return traverse(queue, needle);
}