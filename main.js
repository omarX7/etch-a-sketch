let color = 'black';
let click = false;
document.addEventListener("DOMContentLoaded", function(){
    creatBoard(16);
    let btnPopup = document.querySelector("#popup")
    document.querySelector("body").addEventListener("click", function(e){
        if (e.target.tagName != "BUTTON"){
            click = !click;
            let draw = document.querySelector("#draw");
            if (click){
                draw.innerHTML = "You're Allowed To Draw"
            }
            else{
                draw.innerHTML = "You're Not Allowed To Draw"
            }
        }
    })

    btnPopup.addEventListener("click", function(){
        let size = getSize();
        creatBoard(size);
    })
})
function creatBoard(size){
    let board = document.querySelector(".board");
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let numDivs = size * size;
    for(let i = 0; i < numDivs; i++){
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);
    }
}

function getSize(){
    let input = prompt("What's the number, maman");
    let message = document.querySelector("#message");
    if(input == ""){
        message.innerHTML = "Please provide a number";
    }
    else if(input < 0 || input > 100){
        message.innerHTML = "Provide a number between 1 and 100"
    }
    else {
        message.innerHTML = "Give me your rubbish";
        return input;
    }
}

function colorDiv(){
   if(click){
        if (color == "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else{
            this.style.backgroundColor = 'black'
        }
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white")
}