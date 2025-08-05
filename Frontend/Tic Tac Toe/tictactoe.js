let gamebtn = document.querySelectorAll(".game-box");
let resetbtn = document.querySelector("#reset"
);
let newgamebtn = document.querySelector("#new-game");
let msgcont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

// if i make 9 elements using a same class name in html then they will the get index starting from 0 to 8 according to their serial

let turnO = true;

const disableboxes = () => {
    for(let box of gamebtn){
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of gamebtn){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetBtn = () => {
    turnO = true;
    enableBoxes();
    msgcont.classList.add("hide");
}

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8],
    [3,4,5], 
];

gamebtn.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box is Clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = `${winner} won the game. 🎉`;
    msgcont.classList.remove("hide");
};
 
const checkWinner = () => {
    for(let pattern of winpattern){
        let pos1Val = gamebtn[pattern[0]].innerText;
        let pos2Val = gamebtn[pattern[1]].innerText;
        let pos3Val = gamebtn[pattern[2]].innerText;

        if(pos1Val!="" && pos2Val!="" &&pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                console.log("Winner",pos1Val);
                disableboxes();
                showWinner(pos1Val);
            }
        }
    }
}

resetbtn.addEventListener("click",resetBtn);
newgamebtn.addEventListener("click",resetBtn);