const containerDiv = document.querySelector("#container");

function makeRows (rows, columns) {
    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", columns);
    console.log(containerDiv);
    console.log(rows);
    console.log(columns);
    for (i = 0; i < (rows * columns); i++) {
        let square = document.createElement("div");
        square.innterTExt = (i + 1);
        containerDivDiv.appendChild(square).className = "grid-item";
    }
}

makeRows(16, 16);

// while (gridCount < 32) {
 //   const gridDivs = document.createElement("div");
 //   gridDivs.classList.add("content");
 //   gridDivs.textContent = "a";
 //   containerDiv.appendChild(gridDivs);
 //   gridCount++;
 //   console.log(gridCount);
// }