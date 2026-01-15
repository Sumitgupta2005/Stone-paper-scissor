let userscore = 0;
let computerscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#userscore");
const computer = document.querySelector("#compscore");



const drawCase = () => {
    console.log("its a draw");
    msg.innerText = "its a draw";
    msg.style.backgroundColor = "blue";
}



const computerChoiceDisplay = () => {
const compchoice = ["rock", "paper", "scissor"];
const choiceindex = Math.floor(Math.random()*3);
return compchoice[choiceindex];
}


const showwinner = (userwin, userchoice, computerchoice) => {
    if(userwin){
        userscore++;
        user.innerText = userscore;
        console.log("you wins");
        msg.innerText = `you wins ${userchoice} beats ${computerchoice}`;
        msg.style.backgroundColor = "green";
         
    }else{
        computerscore++;
        computer.innerText = computerscore;
        console.log("you lose");
        msg.innerText = `you lose ${computerchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
        
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        const computerchoice = computerChoiceDisplay();
        console.log("you choose", userchoice);
        console.log("computer choose", computerchoice);

        if(userchoice === computerchoice){
            drawCase();
        }else {
            let userwin = true;
            if(userchoice === "rock"){
                userwin = computerchoice === "scissor" ? true : false;
            }else if(userchoice === "paper"){
                userwin = computerchoice === "rock" ? true : false;
            }else{
                userwin = computerchoice === "paper" ? true : false;
        }showwinner(userwin, userchoice, computerchoice);
        }
    })
});

