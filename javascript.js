
const sketchContainer = document.querySelector(".etch-a-sketch-container")

const gridSquare = document.createElement("div")
gridSquare.classList.add("grid-section")

const changeGridSizeButton = document.querySelector("button")



gridSize = 16
createGrid()




grid = document.querySelectorAll(".grid-section");


grid.forEach((gridSquare) => {
    gridSquare.addEventListener("mouseover", () => {
        gridSquare.style.backgroundColor = "black"
    });
})

changeGridSizeButton.addEventListener("click", () => {
    console.log("BUTTON PRSSESS")
    gridSize = prompt("What size grid would you like? Min of 16 and Max of 48.", 16)
    if (gridSize > 48)
        gridSize = 48
    else if (gridSize < 16)
        gridSize = 16

    destroyGrid()
    createGrid()
})


function destroyGrid() {
    let toDelete = document.getElementsByClassName("grid-row")
    while (toDelete[0]) {
        toDelete[0].parentNode.removeChild(toDelete[0])
    }
}


function createGrid() {
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
    grid = document.querySelectorAll(".grid-section");
}


