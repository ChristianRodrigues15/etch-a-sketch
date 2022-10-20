const mainDiv = document.querySelector(".main")
const redBtn = document.querySelector(".buttonRed")
const blueBtn = document.querySelector(".buttonBlue")
const rainbowBtn = document.querySelector(".buttonRbw")
const clear = document.querySelector(".buttonClear")
let color = 'black';



function createDivs(rows, cols) {
    mainDiv.style.setProperty('--grid-rows', rows);
    mainDiv.style.setProperty('--grid-cols', cols);
    for(i = 0; i < (rows * cols); i++) {
        const newDiv = document.createElement("div")
        newDiv.id = "canvas"
        mainDiv.appendChild(newDiv)
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = color;
        })
        
    }
}
function createColor() {
    this.style.backgroundColor = color;
}

function changeColor(choice) {
    color = choice;
}

createDivs(20, 20)