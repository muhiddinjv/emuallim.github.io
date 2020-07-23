const msg = document.querySelector('.msg');
const inp = document.querySelector('input');
const btn = document.querySelector('button');
const myArr = ["javascript", "website", "html", "document", "course", "new", "python", "pascal", "mathematics", "logic", "brain", "intelligence", "react", "browser"];
let inplay = false;
let right = "";
let wrong = "";
let score = 0;

btn.addEventListener('click', function() {
    if (!inplay) {
        inplay = true;
        score = 0;
        btn.innerHTML = "Guess";
        inp.classList.toggle("hidden");
        right = createWord();
        wrong = randomArray(right.split("")).join("");
        msg.innerHTML = wrong;
    } else {
        let tempInp = inp.value;
        score++;
        if (tempInp === right) {
            console.log('correct');
            inplay = false;
            msg.innerHTML = `Correct it was <b>${right}</b>. It took ${score} guesses.`;
            btn.innerHTML = "Start";
            inp.classList.toggle("hidden");
        } else {
            msg.innerHTML = `Guess ${wrong} again!`;
        }
    }
})

function createWord() {
    let random = Math.floor(Math.random() * myArr.length);
    let letters = myArr[random];
    return letters;
}

function randomArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let el = arr[i];
        let r = Math.floor(Math.random() * (i + 1));
        arr[i] = arr[r];
        arr[r] = el;
    }
    return arr;
}