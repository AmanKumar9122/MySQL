let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

// Select the h2 element
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game is started");
        started = true;
        levelUp();
    }
});

function levelUp(){
    level++;
    h2.innerText = `Level ${level}`;
};
