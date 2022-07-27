const containerDiv = document.querySelector("#container");
let gridCount;

while (gridCount < 32) {
    const gridDivs = document.createElement("div");
    gridDivs.classList = "HELLo!";
    containerDiv.appendChild(gridDivs);
    gridCount++;
    console.log(gridCount);
}