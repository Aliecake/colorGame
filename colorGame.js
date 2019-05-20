let colors = randomColors(6);

const squares = document.getElementsByClassName("square");
let pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplayed");
const messageResult = document.getElementById("result");
const buttons = document.querySelectorAll("button");
const easy = document.querySelector("#easyBtn");
const hard = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedColor;
for(let ii = 0; ii < squares.length; ii++) {
    squares[ii].style.backgroundColor = colors[ii];

    squares[ii].addEventListener("click", (e) => {
        let clickedColor = e.currentTarget.style.backgroundColor;

        if (clickedColor === pickedColor) {
            messageResult.textContent = "Correct!";
            buttons[0].textContent = "Play Again?";
            winColor(pickedColor);
        } else {
            messageResult.textContent = "Try Again!";
            e.currentTarget.style.backgroundColor = "rgb(44, 44, 44)";
        }
    });
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random]
}
function randomColors(n) {
    let arr = []
    //add n number of random colors to array
    for (let kk = 0; kk < n; kk++){
        let red = randomNum();
        let green = randomNum();
        let blue = randomNum();
        arr.push(`rgb(${red}, ${green}, ${blue})`)
    }
    return arr;
}
//randomize 0-255
function randomNum() {
    return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
}

//changes color of all squares
function winColor(winColor) {
    document.querySelector("h1").style.backgroundColor = pickedColor;
    for (let jj = 0; jj < squares.length; jj++) {
        squares[jj].style.backgroundColor = winColor;
    }
}
//reset game
function reset() {
    colors = randomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let ii = 0; ii < squares.length; ii++) {
        squares[ii].style.backgroundColor = colors[ii];
    };
}


easy.addEventListener("click", () => {
    colors = randomColors(3);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    easy.classList.add("selected");
    hard.classList.remove("selected");
    //display 3 new squares from colors
    //removes last 3 squares
    for(let mm = 0; mm < squares.length; mm++) {
        if(mm >= 3){
            document.querySelectorAll(".square")[mm].style.display = "none";
        }
        else {
            squares[mm].style.backgroundColor = colors[mm];
        }
    }
});
hard.addEventListener("click", () => {
    colors = randomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    hard.classList.add("selected");
    easy.classList.remove("selected");
    for(let nn = 0; nn < colors.length; nn++){
        document.querySelectorAll(".square")[nn].style.display = "block";
    }
});
