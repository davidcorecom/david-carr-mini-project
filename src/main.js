const startBtn = document.getElementById("start-game-btn");
const cell = document.getElementsByClassName('cell');

startBtn.addEventListener("click", () => {
    startBtn.remove();
    document.querySelectorAll(".is-hidden").forEach((element) => {
        element.classList.remove("is-hidden");
    })
});

const cells = Array.from(document.getElementsByClassName("cell"))
cells.forEach((cell, index) => {
cell.addEventListener("click", () => {
const img = document.createElement("img")
img.src = "../assets/images/cross.png"
img.alt = "X"
cell.computedStyleMap.backgroundSize = "contain";
cell.computedStyleMap.backgroundRepeat = "no-repeat";
cell.computedStyleMap.backgroundPosition = "center";
cell.appendChild(img);
})
})


// const crossClick = document.
// const noughtClick


// "../assets/images/cross.png"
// "../assets/images/nought.png"
