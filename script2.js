let winMessageTriggered=0;
let lossMessageTriggered=0;
const btns = document.querySelector(".btns");
var btn = document.querySelectorAll('.gamebtn');
playerScore=0;
computerScore=0;

//Win message
const winnerMsg = document.createElement("div");
winnerMsg.textContent= "You won! Well done buddy";
winnerMsg.setAttribute("ID","win");
winnerMsg.setAttribute("class","result-msg");
function winnerMessage(){
	btns.appendChild(winnerMsg);
	winMessageTriggered=1;
}

//Loss Message
const loserMsg = document.createElement("div");
loserMsg.textContent= "You lost! Better luck next time!";
loserMsg.setAttribute("ID","lose");
loserMsg.setAttribute("class","result-msg");
function loserMessage(){
	btns.appendChild(loserMsg);
	lossMessageTriggered=1;
}
//Message remover
function removeMessages(){
	if (winMessageTriggered==1){
	btns.removeChild(winnerMsg)
	winMessageTriggered=0;
	lossMessageTriggered=0;
	document.getElementById("round-result").innerHTML = "";
	}
	else if (lossMessageTriggered==1){
	btns.removeChild(loserMsg)
	winMessageTriggered=0;
	lossMessageTriggered=0;
	document.getElementById("round-result").innerHTML = "";
	}
}

//Score validator
function checkScore(){
	if (playerScore >= 2) return winnerMessage()
	else if (computerScore >= 2) return loserMessage()
}

//Computer's choice
function computerPlay(){
	var choices = ["ROCK", "PAPER", "SCISSORS"]
	var computerSelection = choices[Math.floor(Math.random() * choices.length)];
	return(computerSelection);
}

//Player's choice
btn.forEach((button) => {
	button.addEventListener("click", (e) => {
		threeRounds(button.id);
			});
});
//
//Single round game
function playRound(playerSelection){
	computerSelection=computerPlay()
	
	if (playerSelection == computerSelection){
	document.getElementById("round-result").innerHTML = "Tie round! Score is Player: "+playerScore+ ", Computer: "+computerScore+".";

		}
	else if ((playerSelection == "ROCK" && computerSelection == "PAPER")
	|| (playerSelection == "PAPER" && computerSelection == "SCISSORS")
	|| (playerSelection == "SCISSORS" && computerSelection == "ROCK")){
		computerScore+=1
		document.getElementById("round-result").innerHTML = "Computer wins this round! Score is Player: "+playerScore+ ", Computer: "+computerScore+".";
		}
	
	else {
	playerScore+=1
	document.getElementById("round-result").innerHTML = "Player wins this round! Score is Player: "+playerScore+ ", Computer: "+computerScore+".";
}
}

//Best of 3
function threeRounds(playerSelection){
	removeMessages()
	if (playerScore < 2 && computerScore < 2){
		playRound(playerSelection)
	}
	else if (playerScore == 2) {
	computerScore=0
	playerScore=0
	}
	else {
	computerScore=0
	playerScore=0
	}
	checkScore()
}


//Used for game restart
function game(){
	removeMessages();
	winMessageTriggered=0;
	lossMessageTriggered=0;
	playerScore=0;
	computerScore=0;
}
