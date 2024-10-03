 let userScore=0;
 let compScore=0;

const genCompChoice = ()=>{
  const options = ["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
}
let msg  = document.querySelector("#msg");
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");

const drawGame = ()=>{
    console.log("game draw");
    msg.innerText ="game draw";
}

console.log(msg);
const showWinner = (userWin)=>{
    if(userWin){
        msg.innerText ="You Win!!";
        userScore++;
        user.innerText  = userScore;
       }
       else{
        msg.innerText ="You lost";
        compScore++;
        comp.innerText = compScore;
       }
}
 const playGame = (userChoice)=>{
    console.log("userChoice =",userChoice);
    const compChoice = genCompChoice();
    console.log("CompChoice=",compChoice);
    if(userChoice === compChoice){
        drawGame();
    }
    else{
       let userWin = true;
       if (userChoice === "rock"){
        userWin = compChoice === "scissors" ? true: false;
       }
       else if(userChoice === "paper"){
        userWin= compChoice === "rock" ? true : false;
       }
       else if (userChoice === "scissors"){
        userWin = compChoice === "paper" ? true: false;
       }
      showWinner(userWin);
    }
 }
 const choices = document.querySelectorAll(".choice");
 choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice= choice.getAttribute("id");
        console.log("clicked",userChoice);
        playGame(userChoice); 
    });
 });
 

