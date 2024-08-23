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

let humanScore=0;
let computerScore=0;
let tie=0;
let resultmsg="";
function playRound(humanChoice,computerChoice){
    console.log(`the human choice ${humanChoice}`)
    console.log(`the computer choice ${computerChoice}`)
    console.log(`the result is ${resultmsg}`)
    if (humanChoice==computerChoice){
        resultmsg=`it's a Tie! both chose ${humanChoice}`;
        tie++;
        document.getElementById("round-result").style.color="yellow";
        document.getElementById("round-result").innerHTML=resultmsg;
    }
    else if (humanChoice=="rock" && computerChoice=="scissors"){
        resultmsg=`you won ${humanChoice} beats ${computerChoice}`;
        humanScore++;
        document.getElementById("round-result").style.color="green";
        document.getElementById("round-result").innerHTML=resultmsg;
    }
    else if (humanChoice=="paper" && computerChoice=="rock"){
        resultmsg=`you won ${humanChoice} beats ${computerChoice}`;
        humanScore++;
        document.getElementById("round-result").style.color="green";
        document.getElementById("round-result").innerHTML=resultmsg;
    }
    else if (humanChoice=="scissors" && computerChoice=="paper"){
        resultmsg=`you won ${humanChoice} beats ${computerChoice}`;
        humanScore++;
        document.getElementById("round-result").style.color="green";
        document.getElementById("round-result").innerHTML=resultmsg;
    }
    else {
        resultmsg=`computer wins ! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
        document.getElementById("round-result").style.color="red";
        document.getElementById("round-result").innerHTML=resultmsg;
    }
    document.getElementById("round-result").innerHTML=resultmsg;
document.getElementById("humanScore").innerHTML=`Human score : ${humanScore}`;
document.getElementById("computerScore").innerHTML=`Computer score : ${computerScore}`;
document.getElementById("tie").innerHTML=`tie : ${tie}`;
}


let element1 =document.getElementById("rock");
element1.addEventListener("click",function(){
    playRound("rock",getComputerChoice())
});

let element2=document.getElementById("paper");
element2.addEventListener("click",function(){
    playRound("paper",getComputerChoice());
})

let element3=document.getElementById("scissors");
element3.addEventListener("click",function(){
    playRound("scissors",getComputerChoice());
});