let penColour = "black";
let click = false;
let board = document.querySelector(".sketchContainer");

function createBoard(size){

    let input = document.querySelector("input");
    input.value = size;  //Resets the user input value to initial

    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let totalSize = size*size;

    for(let i = 0; i < totalSize; i++){
        let square = document.createElement("div");
        square.addEventListener("mouseover", colourSquare)
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }
}

createBoard(16);
board.addEventListener("mousedown", mouseDownDraw)
board.addEventListener("mouseup", mouseUpStop)
board.addEventListener("dragstart", (e) => e.preventDefault());


function changeSize(input){
 
    if(input >=2 && input <=100){
        createBoard(input);
    }
    else{
        console.log("Non valid board size");
    }
}

function colourSquare(){
    if(click){
        if(penColour === "random"){
            this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
        }
        else{
            this.style.backgroundColor = penColour;
        }
    }
}

function changeColour(choice){
    penColour = choice;
}

function mouseDownDraw(){
    click = true;
}

function mouseUpStop(){
    click = false;
}