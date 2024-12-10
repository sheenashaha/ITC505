const boardSize = 5;
const gameBoard = document.getElementById('game-board');
let cells = [];

// Initialize the game board
function initializeBoard() {
    for (let row = 0; row < boardSize; row++) {
        cells[row] = [];
        for (let col = 0; col < boardSize; col++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener('click', () => handleCellClick(row, col));
            gameBoard.appendChild(cell);
            cells[row][col] = cell;
        }
    }
    randomizeBoard();
}

// Toggle the clicked cell and its adjacent cells
function handleCellClick(row, col) {
    toggleCell(row, col);
    toggleCell(row - 1, col); // Top
    toggleCell(row + 1, col); // Bottom
    toggleCell(row, col - 1); // Left
    toggleCell(row, col + 1); // Right

    if (checkWin()) {
        setTimeout(() => alert('Congratulations! You solved the puzzle!'), 100);
    }
}

// Toggle a specific cell's state
function toggleCell(row, col) {
    if (row >= 0 && row < boardSize && col >= 0 && col < boardSize) {
        cells[row][col].classList.toggle('on');
    }
}

// Randomize the board by making random moves
function randomizeBoard() {
    const totalMoves = boardSize * 2;
    for (let i = 0; i < totalMoves; i++) {
        const randomRow = Math.floor(Math.random() * boardSize);
        const randomCol = Math.floor(Math.random() * boardSize);
        handleCellClick(randomRow, randomCol);
    }
}

// Check if the player has won
function checkWin() {
    return cells.flat().every(cell => !cell.classList.contains('on'));
}

// Initialize the game
initializeBoard();