/*----- constants -----*/

const COLORS = {
    '0': 'white',
    '1': 'purple',
    '-1': 'orange'
};

/*----- state variables -----*/

let board; // array of 7 column arrays
let turn; // 1 or -1
let winner; // null = no winner; 1 or -1 = winner; 'T' = tie game


/*----- cached elements  -----*/

const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const markerEls = document.querySelectorAll('#markers > div');

/*----- event listeners -----*/


/*----- functions -----*/
init();

// Intialize all state, then call render()
function init() {
    // To visualize the board's mapping to the DOM, rotate the board array 90 degrees counter-clockwise
    board = [
        [0, 0, 0, 0, 0, 0], // col 0
        [0, 0, 0, 0, 0, 0], // col 1
        [0, 0, 0, 0, 0, 0], // col 2
        [0, 0, 0, 0, 0, 0], // col 3
        [0, 0, 0, 0, 0, 0], // col 4
        [0, 0, 0, 0, 0, 0], // col 5
        [0, 0, 0, 0, 0, 0], // col 6
    ]
    turn = 1;
    winner = null;
    render();
}

// Visualize all state in the DOM
function render() {
    renderBoard();
    renderMessage();
    // Hide/show UI elements (controls)
    renderControls();
}

function renderBoard() {
    board.forEach(function(colArr, colIdx) {
        // Iterate over the cells in the current column (colArr)
        colArr.forEach(function(cellVal, rowIdx) {
            const cellId = `c${colIdx}r${rowIdx}`;
            const cellEl = document.getElementById(cellId);
            cellEl.style.backgroundColor = COLORS[cellVal];
        });
    });
}

function renderMessage() {
    if (winner === 'T') {
        messageEl.innerText = 'Tie game!';
    } else if (winner) {
        messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins!`;
    } else {
        // Game is in play
        messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn`;
    }
}

function renderControls() {
    // Ternary expression is the go-to when you want one of two values returned
    // conditional-expression ? truthy-expression : falsy-expression
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
    // Iterate over marker elements to hide or show according to column being full (no 0s) or not
    markerEls.forEach(function(markerEl, colIdx) {
        const hideMarker = !board[colIdx].includes(0) || winner;
        markerEl.style.visibility = hideMarker ? 'hidden' : 'visible';
    });
}

/* TO DO
    - Randomize which player gets to go first
    - Try to 'animate' (blink through) disks falling from markers?
*/
