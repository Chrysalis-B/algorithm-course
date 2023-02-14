export default function pre_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}

const walk = (curr: BinaryNode<number>, path: number[]): number[] => {
  if (!curr) return path;
  path.push(curr.value);
  if (curr.left) walk(curr.left, path);
  if (curr.right) walk(curr.right, path);
  return path;
}