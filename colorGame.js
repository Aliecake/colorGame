let colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 0, 255)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
]

let squares = document.getElementsByClassName("square");
let pickedColor = colors[4];
let colorDisplay = document.getElementById("colorDisplayed");

colorDisplay.textContent = pickedColor;
for(let ii = 0; ii < squares.length; ii++) {
    squares[ii].style.backgroundColor = colors[ii];

    squares[ii].addEventListener("click", (e) => {
        //grab color of clicked square
        let clickedColor = e.currentTarget.style.backgroundColor;
        //compare color
        if (clickedColor === pickedColor) {
            console.log("correct")
        } else {
            console.log("wrong")
        }
    });
}

