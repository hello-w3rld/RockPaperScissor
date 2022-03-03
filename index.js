const playerSelection = "rock".toLowerCase()
const computerSelection = computerPlay();
let pWin = false
let cWin = false
let draw = false

function computerPlay() {
    options = ["rock", "paper", "scissor"]
    return options[Math.floor(Math.random() * 3)] //return 0,1,2
}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        //pWin = false
        //cWin = false
        //return "Draw! Try again!"
        draw = true
        return draw

    }
    else if ((playerSelection == "rock" && computerSelection == "scissor") || 
            (playerSelection == "scissor" && computerSelection == "paper") ||
            (playerSelection == "paper" && computerSelection == "rock")) 
            {
            pWin = true
            cWin = false
            draw = false
            //return `Player chose, ${playerSelection} and Computer chose, ${computerSelection}, so Player wins!`
            return pWin
        }
    else {
        pWin = false
        cWin = true
        draw = false
        //return `Player chose, ${playerSelection} and Computer chose, ${computerSelection}, so Computer wins!`
        return cWin
    }
  }
  

function game () {
    let playerScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        playRound()
        if (cWin) {
            console.log(playRound(playerSelection, computerSelection));
            computerScore++}
        if (pWin) {
            console.log(playRound(playerSelection, computerSelection));
            playerScore}
        else {
            console.log("Round "+ i+ ": It's a draw!")
        }
    }
    if (pWin > cWin) {
        return `Player score ${playerScore} and Computer score ${computerScore}, so Player wins!`
    }
    else if (pWin < cWin) {
        return `Player score ${playerScore} and Computer score ${computerScore}, so Computer wins!`
    }
}
console.log(game())