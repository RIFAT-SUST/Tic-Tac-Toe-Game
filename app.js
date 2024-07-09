let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-btn");
let turnO=true;  //playerO.
let count = 0;
const winPattererns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame = () => {
    turnO = true;
    count = 0;
    boxEnabled();
    msgcontainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO===true){
            box.innerText = "O";
            turnO=false;
        }
        else{
            box.innerText = "X";
            turnO=true;
        }
        box.disabled = true;
        count++;

        let isWinner=cheakWinner();
        if(count===9 && !isWinner){
            Draw();
        }

    });
});

const Draw = () =>{
    msg.innerText = `Match is Draw`;
    msgcontainer.classList.remove("hide");
    boxDisabled();
};

const boxDisabled = () => {
    for(let box of boxes){
        box.disabled = true; 
    }
};

const boxEnabled = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "" ;
    }
};
//     const Draw = () =>{
//     msg.innerText = `Match is Draw`;
//     msgcontainer.classList.remove("hide");
//     boxDisabled();
// };

const showWinner = (winner)=>{
    msg.innerText = `Congratulation, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    boxDisabled();
};
const cheakWinner = () =>{
    for (let pattern of winPattererns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if( pos1val != "" && pos2val != "" && pos3val != ""){
            if( pos1val===pos2val && pos2val===pos3val){
                 showWinner(pos1val);
                 return true;
            }
            
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);