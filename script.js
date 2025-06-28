let userseq = [];
let gameseq = [];

let started = false;
let level = 0;
let cols = ["red", "blue", "green", "yellow"];

let h3 = document.querySelector("h3");
// let btn=document.querySelectorAll(".btn");
let k2 = document.querySelector("h2");

document.addEventListener("keypress", () => {
    if (started == false) {
        console.log("game started");
        started = true;
        levelup();
    }
})


function levelup() {
    userseq = [];
    level++;
    h3.innerText = `level ${level}`;
    let randnum = Math.floor(Math.random() * 3);
    let randcol = cols[randnum];
    gameseq.push(randcol);
    console.log(gameseq);
    let btn = document.querySelector(`.${randcol}`);
    flashup(btn);
}

function flashup(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}


function btnpress() {
    let btn = this;
    let sound2=new Audio('mix2.wav');
    sound2.play();
    flashup(btn);

    let usercol = btn.getAttribute("id");
    userseq.push(usercol);
    console.log(userseq);
    check(userseq.length - 1);
}

let btn2 = document.querySelectorAll(".btn");

btn2.forEach((btn2) => {
    btn2.addEventListener("click", btnpress);
})


function check(idx) {

    if (userseq[idx] == gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h3.innerText = "Game Over / Press any Key to Play again";
        h3.style.color = "red";
        h3.style.fontSize = "40px";
        k2.innerText = `Your Score : ${level}`;
        document.querySelector("body").style.backgroundColor = "red";
        let sound = new Audio('mix.wav'); // Assuming you name files like red.mp3
        sound.play();
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 500);
        reset();
    }

}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}