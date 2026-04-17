const cell = document.getElementsByClassName("cell");
const cells = Array.from(document.getElementsByClassName("cell"))
const resetBtn = document.getElementById("reset-button")
const scoreOne = document.getElementById("score-one")
const scoreTwo = document.getElementById("score-two")


const images = {
    X: "../assets/images/cross.png",
    O: "../assets/images/nought.png"
}

let currentPlayer = "X"
let board = ["","","","","","","","",""]
let scoreX = 0
let scoreO = 0

/* 
The game stores all possible winning lines
Uses a for loop to iterate one line at a time
It then checks the board to see if it matches
It will continue looping to the next line if no match
*/
const checkWin = (board, player) => {
    const winLine = [
    [0,1,2],[3,4,5],[6,7,8], //winning rows
    [0,3,6],[1,4,7],[2,5,8], //winning columns
    [0,4,8],[2,4,6] //winning diagonals
]
    for (let i = 0; i < winLine.length; i++) {
        console.log(winLine[i])

        const line = winLine[i]
        const first = line[0]
        const second = line[1]
        const third = line[2]

    if (
        board[first] === player &&
        board[second] === player &&
        board[third] === player
    ) {
        return true
    }
    }
    return false
}

/*
Function that checks current player
If current player is X it will switch to O, otherwise will switch to X
*/
const getNextPlayer = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X"
    console.log("Current player is now:", currentPlayer)
    }

// Resets the board, current player and board tiles
const resetGame = () => {
board = ["","","","","","","","",""]
currentPlayer = "X"
cells.forEach(cell => {
    cell.innerHTML = ""
})
}

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
    if (board[index] !== "") {
    alert("You cannot click on the same square!")
    return
    }
board[index] = currentPlayer
const img = document.createElement("img")
img.src = images[currentPlayer]
img.alt = currentPlayer
cell.style.backgroundSize = "contain";
cell.style.backgroundRepeat = "no-repeat";
cell.style.backgroundPosition = "center";
cell.appendChild(img);

if (checkWin(board, currentPlayer)) {
    
    if (currentPlayer === "X") {
        scoreX++
        scoreOne.textContent = scoreX
    } else {
        scoreO++
        scoreTwo.textContent = scoreO
    }
    alert(currentPlayer + " wins!")
    trophy()
    resetGame()
    return 
}

getNextPlayer()
});
});

/*
Creates a trophy image when a player wins
The trophy is removed after 3 seconds
*/
const trophy = () => {
    const img = document.createElement("img")
    img.src = "../assets/images/trophy.png"
    img.id = "trophy"
    img.style.border = "thick solid #fa26d7"
    document.body.appendChild(img)

    setTimeout(() => {
    img.remove()
    }, 3000);
}

resetBtn.addEventListener("click", resetGame)
