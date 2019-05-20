let colors = randomColors(6);

const squares = document.getElementsByClassName("square");
let pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplayed");
const messageResult = document.getElementById("result");
const button = document.querySelector("button");

colorDisplay.textContent = pickedColor;
for(let ii = 0; ii < squares.length; ii++) {
    squares[ii].style.backgroundColor = colors[ii];

    squares[ii].addEventListener("click", (e) => {
        let clickedColor = e.currentTarget.style.backgroundColor;

        if (clickedColor === pickedColor) {
            messageResult.textContent = "Correct!";
            button.textContent = "Try Again?";
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
function reset() {
    colors = randomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let ii = 0; ii < squares.length; ii++) {
        squares[ii].style.backgroundColor = colors[ii];
    };
}