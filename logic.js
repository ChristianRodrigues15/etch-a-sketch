const mainDiv = document.querySelector(".main")
const blackBtn = document.querySelector(".buttonBlack")
const grayBtn = document.querySelector(".buttonGray")
const rainbowBtn = document.querySelector(".buttonRbw")
const clear = document.querySelector(".buttonClear")



function createDivs(rows, cols) {
    mainDiv.style.setProperty('--grid-rows', rows);
    mainDiv.style.setProperty('--grid-cols', cols);
    for(i = 0; i < (rows * cols); i++) {
        const newDiv = document.createElement("div")
        newDiv.id = "canvas"
        mainDiv.appendChild(newDiv)
        newDiv.addEventListener("mouseover", () => {
            newDiv.style.backgroundColor = "black"
        })
    }
}

blackBtn.addEventListener('click', () => {
    newDiv.style.backgroundColor = "black";
})


createDivs(20, 20)