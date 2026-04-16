const startBtn = document.getElementById("start-game-btn");


startBtn.addEventListener("click", () => {
    startBtn.remove();
    document.querySelectorAll(".is-hidden").forEach((element) => {
        element.classList.remove("is-hidden");
    })
});


