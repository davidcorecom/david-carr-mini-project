const cell = document.getElementsByClassName('cell');
const cells = Array.from(document.getElementsByClassName("cell"))
let currentPlayer = "X"

cells.forEach((cell, index) => {
cell.addEventListener("click", () => {
const img = document.createElement("img")
img.src = "../assets/images/cross.png"
img.alt = "X"
cell.computedStyleMap.backgroundSize = "contain";
cell.computedStyleMap.backgroundRepeat = "no-repeat";
cell.computedStyleMap.backgroundPosition = "center";
cell.appendChild(img);
});
});

if (currentPlayer === "X") {
    cell.innerHTML = "../assets/images/cross.png"
} else {
    cell.innerHTML = "../assets/images/nought.png"
}
