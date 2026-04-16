const startBtn = document.getElementById("start-game-btn");
const cell = document.getElementsByClassName('cell');
const resetBtn = document.getElementById("reset-button")
const cells = Array.from(document.getElementsByClassName("cell"))

startBtn.addEventListener("click", () => {
    startBtn.remove();
    document.querySelectorAll(".is-hidden").forEach((element) => {
        element.classList.remove("is-hidden");
    })
});

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

resetBtn.addEventListener("click ", () => {
    cells.forEach((cell) => {
        cell.remove("img")
    });
});


// const crossClick = document.
// const noughtClick


// "../assets/images/cross.png"
// "../assets/images/nought.png"
