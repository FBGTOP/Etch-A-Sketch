function createBoard(size){

    let board = document.querySelector(".sketchContainer");

    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let totalSize = size*size;

    for(let i = 0; i < totalSize; i++){
        let square = document.createElement("div");
        square.addEventListener("mouseover", ()=>{
            square.style.backgroundColor = "black";
        })
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

createBoard(16);

function changeSize(input){
 
    if(input >=2 && input <=100){
        createBoard(input);
    }
    else{
        console.log("Non valid board size");
    }
}

