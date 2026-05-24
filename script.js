let btn = document.querySelectorAll(".box");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");
let newGame = document.querySelector(".newGame");
let msgContainer = document.querySelector(".msgContainer");

let xTurn = true;

btn.forEach((box) => {
    box.onclick = () => {
        if(xTurn){
            box.innerText = "X";
            xTurn = false;
            box.disabled = true;
            box.style.color = "blue";
        }else{
            box.innerText = "O";
            xTurn = true;
            box.disabled = true;
            box.style.color = "red";
        }
        checkWinner();
    }
});

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6]
];

function checkWinner() {

    for(let pattern of winPatterns){
    let pos1 = btn[pattern[0]].innerText;
    let pos2 = btn[pattern[1]].innerText;
    let pos3 = btn[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){

            if(pos1 === pos2 && pos2 === pos3){

            result.innerText = "Player " +  pos1 + " is winner"
            msgContainer.style.display = "flex";
            // newGame.style.display = "block";
            btn.forEach((box) => {
                box.disabled = true;
            })
            }
        }
    }
}


function resetGame() {
    xTurn = true;
    msgContainer.style.display = "none";
    // newGame.style.display = "none";

    btn.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
}

reset.onclick = resetGame;
newGame.onclick = resetGame;

