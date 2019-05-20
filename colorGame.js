let colors = randomColors(6);

let squares = document.getElementsByClassName("square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplayed");
let messageResult = document.getElementById("result");

colorDisplay.textContent = pickedColor;
for(let ii = 0; ii < squares.length; ii++) {
    squares[ii].style.backgroundColor = colors[ii];

    squares[ii].addEventListener("click", (e) => {
        let clickedColor = e.currentTarget.style.backgroundColor;

        if (clickedColor === pickedColor) {
            messageResult.textContent = "Correct!";
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
        let num1 = randomNum();
        let num2 = randomNum();
        let num3 = randomNum();
        arr.push(`rgb(${num1}, ${num2}, ${num3})`)
    }
    return arr;
}
//randomize 0-255
function randomNum() {
    let min = Math.ceil(0);
    let max = Math.floor(255);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//changes color of all squares
function winColor(winColor) {
    for (let jj = 0; jj < squares.length; jj++) {
        squares[jj].style.backgroundColor = winColor;
    }
}