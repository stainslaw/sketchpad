const containerDiv = document.querySelector("#container");

function makeGrid(rows, columns) {

    while (document.querySelector("button") !== null) {
        document.querySelector("button").remove();
    }   

    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", columns);
    containerDiv.style.width = "700px";
    containerDiv.style.marginLeft = "550px";
    containerDiv.style.overflow = "hidden";
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement("div");
        square.style.minHeight = "5";
        square.style.mindWidth = "5";
        square.style.overflow = "hidden";
        containerDiv.appendChild(square).className = "grid-item";
        square.addEventListener("mouseover", () => { 
            square.style.backgroundColor = "black";
        })
    }
    createButton();
}

function createButton(){
    const buttonDiv = document.querySelector("#buttonDiv");
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Grid!";
    resetButton.style.margin = "20px";
    resetButton.style.marginLeft = "858px";
    buttonDiv.appendChild(resetButton);

    resetButton.addEventListener('click', () => {
        document.querySelectorAll(".grid-item").forEach(e => e.remove());
        let userGridInput = prompt("Please enter the number of grid squares per side (Max: 100): ");
        if (userGridInput > 100 || userGridInput < 10) {
            alert("ERROR! You specified a grid size larger than the max of 100.");
            return;
        }
        rows = userGridInput;
        columns = userGridInput;
        makeGrid(rows, columns);
    })
}

makeGrid(16, 16);

