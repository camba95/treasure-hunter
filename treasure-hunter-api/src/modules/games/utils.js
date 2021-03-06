const validatePosition = (board, position) => {
  return !!(board[position.row] && board[position.row][position.column]);
};

const isGreaterProximity = (board, position, proximity) => {
  return board[position.row][position.column] > proximity;
};

const visualizeBoard = (board) => {
  board.forEach((row) => {
    let stringRow = '';
    row.forEach((element) => {
      stringRow += element + '\t';
    });
    console.info(stringRow, '\n');
  });
};

const validateValue = (board, position, values = []) => {
  return !values.some((value) => board[position.row][position.column] === value);
};

const makeCopy = (board) => board.map((current) => [...current]);

const sortPlayers = (player1, player2) => {
  if (player1.score > player2.score) {
    return 1;
  }
  if (player1.score < player2.score) {
    return -1;
  }
  return 0;
};

module.exports = {
  validatePosition,
  isGreaterProximity,
  visualizeBoard,
  validateValue,
  makeCopy,
  sortPlayers
};
