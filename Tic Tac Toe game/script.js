let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";

// get all the cells on the game board
let cells = document.querySelectorAll(".cell");

//get the reset button and message element
let resetButton = document.querySelector('#reset');

//get the message
let messageElement = document.querySelector('#message');

// add event Listeners to each Cell

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {

        // check cell if it is already occupied or the game is over

        if (board[index] === "" && !isGameOver()) {
            board[index] = currentPlayer;
            cell.classList.add(currentPlayer.toLowerCase());
            cell.innerHTML = currentPlayer;

            // check if the game is over after current move
            if (isGameOver()) {
                messageElement.innerHTML = currentPlayer + " wins!";

                cells.forEach((cell) => cell.removeEventListener("click, handleCellClick"));

            }
            else if (!board.includes("")) {
                // update the message if game is tie
                messageElement.innerHTML = "It's a tie!";
            }

            else {
                currentPlayer =
                    currentPlayer === "X" ? "O" : "X";
                messageElement.innerHTML = currentPlayer + " 's turn";
            }
        }
    });
});

resetButton.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";

    cells.forEach((cells) => {
        cells.classList.remove("X", "O");
        cells.innerHTML = "";
    });

    messageElement.innerHTML = "X's turn";
    cell.forEach((cell) => cell.addEventListener("click", handleCellClick));
})

// reset the game
// check the game status and winner possible

function isGameOver() {

    // define the possible winning combinations

    const winnerCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    // check if the game is over

    return winnerCombos.some((combo) => {
        return (
            board[combo[0]] === board[combo[1]] &&
            board[combo[1]] === board[combo[2]] &&
            board[combo[0]] !== ""
        )
    })
}

// check if the player has won

function handleCellClick() {

}