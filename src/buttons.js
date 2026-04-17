const startBtn = document.getElementById("start-game-btn");

// When user clicks the start buttons it removes this button
// It then allows hidden elements to appear
startBtn.addEventListener("click", () => {
    startBtn.remove();
    document.querySelectorAll(".is-hidden").forEach((element) => {
        element.classList.remove("is-hidden");
    })
});


