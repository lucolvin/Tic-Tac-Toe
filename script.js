let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

const cells = document.querySelectorAll('.cell');

function checkWinner() {
  const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const pattern of winningPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  if (board.every(cell => cell !== '')) {
    return 'draw';
  }

  return null;
}

function makeMove(cellIndex) {
  if (board[cellIndex] === '') {
    board[cellIndex] = currentPlayer;
    cells[cellIndex].textContent = currentPlayer;
    
    const winner = checkWinner();
    if (winner) {
      if (winner === 'draw') {
        alert('It\'s a draw!');
      } else {
        alert(`${winner} wins!`);
      }
      resetGame();
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  cells.forEach(cell => cell.textContent = '');
}
