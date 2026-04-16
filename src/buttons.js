const startBtn = document.getElementById("start-game-btn");
const resetBtn = document.getElementById("reset-button")

startBtn.addEventListener("click", () => {
    startBtn.remove();
    document.querySelectorAll(".is-hidden").forEach((element) => {
        element.classList.remove("is-hidden");
    })
});

resetBtn.addEventListener("click ", () => {
    cells.forEach((cell) => {
        cell.remove("img")
    });
});
