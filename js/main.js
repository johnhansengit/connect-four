/*----- constants -----*/


/*----- state variables -----*/

let board; // array of 7 column arrays
let turn; // 1 or -1
let winner; // null = no winner; 1 or -1 = winner; 'T' = tie game


/*----- cached elements  -----*/


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

function render() {

}

/* TO DO
    - Randomize which player gets to go first
*/
