
const sketchContainer = document.querySelector(".etch-a-sketch-container")

const gridSquare = document.createElement("div")
gridSquare.classList.add("grid-section")

const gridSize = 10


for (i = 0; i < gridSize; i++) {
    const gridRow = document.createElement("div")
    gridRow.classList.add("grid-row")
    sketchContainer.appendChild(gridRow)
    for (j = 0; j < gridSize; j++) {
        const gridSquare = document.createElement("div")
        gridSquare.classList.add("grid-section")
        gridRow.appendChild(gridSquare)
    }
}


const grid = document.querySelectorAll(".grid-section");


grid.forEach((gridSquare) => {
    gridSquare.addEventListener("mouseover", () => {
        console.log("HOVER TIME")
        gridSquare.style.backgroundColor = "black"
    });
})


