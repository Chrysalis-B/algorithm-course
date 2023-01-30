export default function linear_search(haystack: number[], needle: number): boolean {
  for (let item of haystack) {
    if (item === needle) return true;
  }
  return false;
}