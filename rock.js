function getComputerChoice(){
    let randomchoice=Math.floor(Math.random()*3);
    if (randomchoice===1){
        return "rock";
    }
    else if (randomchoice===2){
        return "paper";
    }
    else{
        return "scissors";
    }
}

let Humanchoice=prompt("Enter rock,paper,scissors: ");
function getHumanChoice(){
    
    if (Humanchoice==="rock" || Humanchoice==="paper" || Humanchoice==="scissors"){
        return Humanchoice;
    }
    else{
        // console.log("not valid ");
        // return undefined;
    }
}


let humanScore=0;
let computerScore=0;

function playRound(humanChoice,computerChoice){
    console.log(`the human choice ${humanChoice}`)
    console.log(`the computer choice ${computerChoice}`)
    if (humanChoice==computerChoice){
        console.log("it's a tie !");
        console.log("--------------------------------");
    }
    else if (humanChoice=="rock" && computerChoice=="scissors"){
        console.log("you won !");
        humanScore++;
        console.log("--------------------------------");
    }
    else if (humanChoice=="paper" && computerChoice=="rock"){
        console.log("you won !");
        humanScore++;
        console.log("--------------------------------");
    }
    else if (humanChoice=="scissors" && computerChoice=="paper"){
        console.log("you won !");
        humanScore++;
        console.log("--------------------------------");
    }
    else {
        console.log("computer wins !");
        computerScore++;
        console.log("--------------------------------");
    }
}


let humanChoice1=getHumanChoice();
let computerChoice1=getComputerChoice();

playRound(humanChoice1,computerChoice1);


function playGame(){

    let rounds=0;
    while(rounds<4){
        rounds++;
        let humanChoice1=getHumanChoice();
        let computerChoice1=getComputerChoice();
        playRound(humanChoice1,computerChoice1);
    }
    if (computerScore> humanScore){
        console.log("computer beats you!");
        console.log("--------------------------------");
    }
    else if (computerScore<humanScore){
        console.log("you beated the computer :)");
        console.log("--------------------------------");
    }
    else {
        console.log(" the result between them : it's a draw");
        console.log("--------------------------------");
    }
}

playGame();

console.log(`the human score is ${humanScore}`);
console.log(`the computer score is ${computerScore}`);
console.log("--------------------------------");