let colors = [];
let pickedColor;
const squares = document.getElementsByClassName("square");
const colorDisplay = document.getElementById("colorDisplayed");
const messageResult = document.getElementById("result");
const buttons = document.querySelectorAll("button");
const mode = document.querySelectorAll(".mode");
const h1 = document.querySelector("h1");

init();
function init() {
    reset();
    modeButton();
    setupSquares();
}

function setupSquares() {
    for (let ii = 0; ii< squares.length; ii++) {
        squares[ii].addEventListener("click", (e) => {
            let clickedColor = e.currentTarget.style.backgroundColor;

            if (clickedColor === pickedColor) {
                messageResult.textContent = "Correct";
                buttons[0].textContent = "Play Again?";
                winColor(pickedColor);
            } else {
                messageResult.textContent = "No";
                e.currentTarget.style.backgroundColor = "rgb(44, 44, 44)";
            }
        });
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random]
}
function randomColors(n = 6) {
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

function randomNum() {
    return Math.floor(Math.random() * (255 - 0 + 1)) + 0;
}

//changes color of all squares
function winColor(winColor) {
    h1.style.backgroundColor = pickedColor;
    colorDisplay.style.backgroundColor = pickedColor;
    for (let jj = 0; jj < squares.length; jj++) {
        squares[jj].style.backgroundColor = winColor;
    }
}
//reset game
function reset() {
    //checks current mode upon hitting play again
    for (let hh = 0; hh < mode.length; hh ++) {
        if (mode[hh].classList.contains("easy") && mode[hh].classList.contains("selected")) {
            colors = randomColors(3);
        } else if (mode[hh].classList.contains("hard") && mode[hh].classList.contains("selected")){
            colors = randomColors();
        }
        pickedColor = pickColor();
        buttons[0].textContent = "New Colors?";
        messageResult.textContent = "";
        colorDisplay.textContent = pickedColor;
        h1.style.backgroundColor = "rgb(28, 126, 156)";
        colorDisplay.style.backgroundColor = "rgb(28, 126, 156)";
    }
    displaySqaure();
}
function displaySqaure() {
    for(let ii = 0; ii < squares.length; ii++) {
        if(colors[ii]) {
            squares[ii].style.display = "block";
            squares[ii].style.backgroundColor = colors[ii];
        } else {
            squares[ii].style.display = "none";
        }
    }
}

//button toggle easy/hard mode
function modeButton() {
    for (let jj= 0; jj < mode.length; jj++) {
        mode[jj].addEventListener("click", (e) => {
            mode[0].classList.remove("selected");
            mode[1].classList.remove("selected");
            e.currentTarget.classList.add("selected");
            reset();
            displaySqaure();
        })
    }
}
