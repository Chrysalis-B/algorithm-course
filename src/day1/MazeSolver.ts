const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1]
];

const walk = (maze: string[], wall: string, current: Point, end: Point, seen: boolean[][], path: Point[]): boolean => {
  //off the maze
  if (current.x < 0 || current.x >= maze[0].length ||
    current.y < 0 || current.y >= maze.length) {
    return false;
  }
  // we are at the end
  if (current.x === end.x && current.y === end.y) {
    path.push(end);
    return true;
  }
  // it's a wall
  if (maze[current.y][current.x] === wall) {
    return false;
  }
  // we have been there
  if (seen[current.y][current.x]) {
    return false;
  }

  seen[current.y][current.x] = true;
  path.push(current);

  for (let dir of directions) {
    const newCurrent = {
      x: current.x + dir[0],
      y: current.y + dir[1]
    }
    if (walk(maze, wall, newCurrent, end, seen, path)) {
      return true;
    }
  }

  path.pop();
  return false;
}

export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
   const seen: boolean[][] = maze.map( item => new Array(item.length).fill(false));
   const path: Point[] = [];

   walk(maze, wall, start, end, seen, path)

   return path;

}