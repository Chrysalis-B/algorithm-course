export default function bs_list(haystack: number[], needle: number): boolean {
  if (haystack.length <= 1) {
    if (haystack[0] === needle) return true;
    else return false;
  }
  const middle = Math.floor(haystack.length / 2);
  if (needle === haystack[middle]) {
    return true;
  }
  if (needle > haystack[middle]) {
    return bs_list(haystack.slice(middle + 1), needle);
  }
  else {
    return bs_list(haystack.slice(0, middle), needle);
  }
}