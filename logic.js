const mainDiv = document.querySelector(".main")

let color = "black";



function createDivs(rows, cols) {
    mainDiv.style.setProperty('--grid-rows', rows);
    mainDiv.style.setProperty('--grid-cols', cols);
    for(i = 0; i < (rows * cols); i++) {
        const newDiv = document.createElement("div")
        newDiv.id = "canvas"
        mainDiv.appendChild(newDiv)
        newDiv.addEventListener("mouseover", createColor);
        
    }
};

function createColor() {
    if ((color === "rainbow")) {
        console.log('hellothere')
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
};

function changeColor(choice) {
    color = choice;
    console.log(color);
};


function clearBoard() {
    let squares = mainDiv.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');

}


createDivs(20, 20)