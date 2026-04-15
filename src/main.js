const startBtn = document.getElementById("start-game-btn");
const cell = document.querySelector('.cell:nth-child(1)');
const cellTwo = document.querySelector('.cell:nth-child(2)');
const cellThree = document.querySelector('.cell:nth-child(3)');
const cellFour = document.querySelector('.cell:nth-child(4)');
const cellFive = document.querySelector('.cell:nth-child(5)');
const cellSix = document.querySelector('.cell:nth-child(6)');
const cellSeven = document.querySelector('.cell:nth-child(7)');
const cellEight = document.querySelector('.cell:nth-child(8)');
const cellNine = document.querySelector('.cell:nth-child(9)');

startBtn.addEventListener("click", () => {
    startBtn.remove();
    document.querySelectorAll(".is-hidden").forEach((element) => {
        element.classList.remove("is-hidden");
    })
});

cell.addEventListener('click', () => {
    cell.style.background = "green";
    });
cellOne.addEventListener('click', () => {
    cell1.style.background = "blue";
    });
    cell.addEventListener('click', () => {
    cell.style.background = "green";
    });
cellTwo.addEventListener('click', () => {
    cell1.style.background = "blue";
    });cell.addEventListener('click', () => {
    cell.style.background = "green";
    });
cellThree.addEventListener('click', () => {
    cell1.style.background = "blue";
    });cell.addEventListener('click', () => {
    cell.style.background = "green";
    });
cellFour.addEventListener('click', () => {
    cell1.style.background = "blue";
    });

// const cells = document.querySelectorAll(".grid.cell");
// cells.forEach((cell, index) => {
//     cell.addEventListener("click", () =>
//         console.log(index);
// })

// const crossClick = document.
// const noughtClick


// "../assets/images/cross.png"
// "../assets/images/nought.png"
