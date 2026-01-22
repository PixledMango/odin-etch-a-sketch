
const sketchContainer = document.querySelector(".etch-a-sketch-container")

const gridSquare = document.createElement("div")
gridSquare.classList.add("grid-section")

const changeGridSizeButton = document.querySelector("button")

gridSize = 16
createGrid()





changeGridSizeButton.addEventListener("click", () => {
    console.log("BUTTON PRSSESS")
    gridSize = prompt("What size grid would you like? Min of 1 and Max of 100.", 16)
    if (gridSize > 100)
        gridSize = 100
    else if (gridSize < 1)
        gridSize = 1

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
    grid.forEach((gridSquare) => {
        gridSquare.addEventListener("mouseover", () => {
            // Why does it require it be parsed as a string, that just makes things needlesly complicated
            let currentOpacity = parseFloat(gridSquare.style.opacity) || 0
            currentOpacity += 0.5
            if (currentOpacity > 1) currentOpacity = 1
            gridSquare.style.opacity = currentOpacity
        });
    })
}


