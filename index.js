class Knight {
  constructor(x, y, dist = 0) {
    this.x = x;
    this.y = y;
    this.dist = dist;
    this.traveled = [];
  }
}

const checkValid = (x, y) => {
  if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
    return true;
  } else return false;
};

const knightMoves = (start, end) => {
  let dx = [-2, -1, 1, 2, -2, -1, 1, 2];
  let dy = [-1, -2, -2, -1, 1, 2, 2, 1];
  let knight = new Knight(start[0], start[1]);

  let queue = [];

  queue.push(knight);

  let tar;
  let path = new Set();
  let x, y;
  let visited = new Array(8);

  for (let i = 0; i <= 7; i++) {
    visited[i] = new Array(8);
    for (let j = 0; j <= 7; j++) {
      visited[i][j] = false;
    }
  }

  visited[(start[0], start[1])] = true;

  while (queue.length) {
    tar = queue.shift();

    if (tar.x == end[0] && tar.y == end[1]) return tar.dist;

    for (let i = 0; i < 8; i++) {
      x = tar.x + dx[i];
      y = tar.y + dy[i];

      if (checkValid(x, y) && !visited[x][y]) {
        visited[x][y] = true;
        console.log(tar, x, y);
        queue.push(new Knight(x, y, tar.dist + 1));
      }
    }
  }
  return tar.dist;
};

console.log(knightMoves([0, 0], [3, 3]));
