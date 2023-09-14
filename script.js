const columnAmount = 4;
const rowAmount = columnAmount;

createDrawSpace(columnAmount, rowAmount);

function createDrawSpace (colTotal, rowTotal){ //
    
    const container = document.querySelector(".sketchContainer")

    container.style.cssText = `grid-template-columns: repeat(${colTotal}, 1fr);`;

    for(let rowID=1; rowID<=rowTotal; rowID++){
        for(let colID=1; colID<=colTotal; colID++){
            const drawSquares = document.createElement("div");
            const squareID = `${rowID}${colID}`;
       
            drawSquares.classList.add("drawDiv");
            drawSquares.setAttribute("id",squareID);
            container.appendChild(drawSquares);
        }
    }
}

const drawDivs = document.querySelectorAll(".drawDiv");

drawDivs.forEach ((item) => {
    item.addEventListener("mouseover", () => {colourDiv(item.id)});
});

function colourDiv (squareID){
     console.log(squareID);
}
