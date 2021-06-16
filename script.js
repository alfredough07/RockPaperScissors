const options=["rock","paper","scissors"]
function computerPlay(){
    return options[Math.floor(Math.random()*options.length)]
}
let computerScore=0;
let playerScore=0;
function singleRound(playerSelection,computerSelection){
    playerSelection=prompt("Rock,Paper,or Scissors?")
    playerSelection=playerSelection.toLowerCase()
    computerSelection=computerPlay()
    if (playerSelection!="rock"&&playerSelection!="scissors"&&playerSelection!="paper"){
        return "Please enter rock paper or scissors"
    }
    else if(playerSelection==computerSelection){
        return "ITS A TIE!!"
    }
    else if(playerSelection=="rock"&&computerSelection=="paper"||
    playerSelection=="paper"&&computerSelection=="scissors"||
    playerSelection=="scissors"&&computerSelection=="rock"){
        computerScore++
        return "Computer Wins!"
    }
    
    else{
        playerScore++
        return "Player Wins!"
    }
    }
function game(){
    singleRound()
          
     if(playerScore==5){
        return "Player 1 has won 5 games!!"
    }
    else if(computerScore==5){
        return "Computer has won 5 games!"
    }
    return ("player score : " + playerScore 
    + " computer score: "+computerScore)
}