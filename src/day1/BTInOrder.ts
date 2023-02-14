export default function in_order_search(head: BinaryNode<number>): number[] {
  return walk(head, []);
}


const walk = (curr: BinaryNode<number>, path: number[]): number[] => {
  if (!curr) return path;
  if (curr.left) walk(curr.left, path);
  path.push(curr.value);
  if (curr.right) walk(curr.right, path);
  return path;
}