let boxes = document.querySelectorAll(".box");
let reset_btn = document.querySelector(".reset_btn");
let New_Btn = document.querySelector(".new_game");
let msg_container = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");

let turn0 = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [7,6,8],
    [8,7,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;
        }
        else{
            box.innerText = "X";
            turn0 = true;
        } 
        box.disabled = true;

        checkWinner();
    });
});

const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msg_container.classList.add("hide");
}

const newGame = () =>{
    turn0 = true;
    enableBoxes();
    msg_container.classList.add("hide");
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations!! winner is ${winner}`;
    msg_container.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPattern){
        // just for information
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // )
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 != "" && val2 != "" && val3 != ""){
            if(val1 == val2 && val2 == val3){
                console.log("Winner is",val1);
                showWinner(val1);
            }
            else{
                console.log("Draw");
                msg.innerText = "XO \n Draw"; 
            }
        }    
    }
};

reset_btn.addEventListener("click",resetGame);
New_Btn.addEventListener("click",newGame);

