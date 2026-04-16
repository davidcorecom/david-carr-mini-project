const cell = document.getElementsByClassName('cell');
const cells = Array.from(document.getElementsByClassName("cell"))

const images = {
    X: "../assets/images/cross.png",
    O: "../assets/images/nought.png"
}

let currentPlayer = "X"

const getNextPlayer = () => {
    currentPlayer = currentPlayer === "X" ? "O" : "X"
    console.log("Current player is now:", currentPlayer)
    }

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
    if (cell.querySelector("img")) {
    alert("You cannot click on the same square!")
    return
    }
const img = document.createElement("img")
img.src = images[currentPlayer]
img.alt = currentPlayer
cell.style.backgroundSize = "contain";
cell.style.backgroundRepeat = "no-repeat";
cell.style.backgroundPosition = "center";
cell.appendChild(img);
getNextPlayer()
});
});
