// Business logic
function Player(symbol) {
  this.symbol = symbol;
}

Player.prototype.mark = function() {
  return this.symbol;
};

function Space(x, y) {
  this.x = x;
  this.y = y;
}

Space.prototype.xCoordinate = function() {
  return this.x;
};

Space.prototype.yCoordinate = function() {
  return this.y;
};

function Board() {
  var board = [[], [], []];
  // each row
  for (var y = 0; y < 3; y++) {
    // each column
    for (var x = 0; x < 3; x++) {
      board[y][x] = new Space(x, y);
    }
  }
  this.grid = board;
}

Board.prototype.find = function(x, y) {
  return this.grid[y][x];
};
