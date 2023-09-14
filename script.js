const columnAmount = 4;
const rowAmount = columnAmount;

console.log(columnAmount, rowAmount);
createDrawSpace(columnAmount, rowAmount);

function createDrawSpace (colTotal, rowTotal){
    
    const container = document.querySelector(".sketchContainer")

    container.style.cssText = `grid-template-columns: repeat(${colTotal}, 1fr);`;

    for(let rowID=1; rowID<=rowTotal; rowID++){
        for(let colID=1; colID<=colTotal; colID++){
            const drawSquares = document.createElement("div");
            const squareID = `${rowID},${colID}`;
    
            console.log(squareID);
    
            drawSquares.classList.add(squareID);
            container.appendChild(drawSquares);
        }
    }
    }
    