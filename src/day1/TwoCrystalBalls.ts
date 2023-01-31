export default function two_crystal_balls(breaks: boolean[]): number {
  let low = 0;
  let high = Math.floor(Math.sqrt(breaks.length));
  do {
    if (breaks[high]) {
      for (let i = low; i <= high; i++) {
        if (breaks[i]) return i;
      }
    }
    else {
      low = high;
      high = high + Math.floor(Math.sqrt(breaks.length));
    }
  } while (high < breaks.length);
  return -1;
}