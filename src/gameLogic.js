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
const img = document.createElement("img")
img.src = images[currentPlayer]
img.alt = currentPlayer
getNextPlayer()
cell.computedStyleMap.backgroundSize = "contain";
cell.computedStyleMap.backgroundRepeat = "no-repeat";
cell.computedStyleMap.backgroundPosition = "center";
cell.appendChild(img);
});
});
