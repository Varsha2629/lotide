const generateBoard = (w, b) => {
  let chessBoard = [];
  for (let i = 0; i < 8; i++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      row.push(0);
    }
    chessBoard.push(row);
  }
  //add Queens
  chessBoard[whiteQueen[0]][whiteQueen[1]] = 1;
  chessBoard[blackQueen[0]][blackQueen[1]] = 1;
  return chessBoard;
};

const queenThreat = (chessBoard) => {
  //Find Queen's Position
  let queensPosition = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (chessBoard[i][j] === 1) queensPosition.push([i, j]);
    }
  }

  if (queensPosition[0][0] === queensPosition[1][0] || queensPosition[0][1] === queensPosition[1][1]) {
    return true;
  } else if (Math.abs(queensPosition[0][0] - queensPosition[1][0]) === Math.abs(queensPosition[0][1] - queensPosition[1][1])) {
    return true;
  } else {
    return false;
  }
};

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));
// [
//   [0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0]
// ]
// true
