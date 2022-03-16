







/*let userChoiceDisplay = document.getElementById("pr")
function playerSelection() {
    
}

function changeText(id) {
    id.innerHTML = "Ooops!";
  }

function computerPlay() {
    options = ["rock", "paper", "scissor"]
    return options[Math.floor(Math.random() * 3)] //return 0,1,2
}
function playRound() {
    let playerSelection = prompt("Enter rock, paper or scissor: ").toLowerCase()
    let computerSelection = computerPlay();
    if (playerSelection === computerSelection) {

        return "0"
    }
    else if ((playerSelection === "rock" && computerSelection === "scissor") || 
            (playerSelection === "scissor" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "rock")) 
            { 
                return "1"
            }
    else {
        return "2"
    }
  }  
*/
/*function game () {
    
    let playerScore = 0
    let computerScore = 0

    function computerPlay() {
        options = ["rock", "paper", "scissor"]
        return options[Math.floor(Math.random() * 3)] //return 0,1,2
    }

    function playRound(playerSelection, computerSelection) {

        if (playerSelection === computerSelection) {

            return "0"
        }
        else if ((playerSelection === "rock" && computerSelection === "scissor") || 
                (playerSelection === "scissor" && computerSelection === "paper") ||
                (playerSelection === "paper" && computerSelection === "rock")) 
                { 
                    return "1"
                }
        else {
            return "2"
        }
      }



    for (let i = 0; i < 5; i++) {

    
        let playerSelection = prompt("Enter rock, paper or scissor: ").toLowerCase()
        let computerSelection = computerPlay();
        console.log(`Player chose: ${playerSelection}, and Computer chose: ${computerSelection}. So, Results:`)
    
        
        let x = playRound(playerSelection, computerSelection)

        if (x === "1") 
        {
            console.log("Round "+ (i+1) + ": Player wins!")
            playerScore++
        }
        else if (x === "2") 
        {
            console.log("Round "+ (i+1) + ": Computer wins!")
            computerScore++
        }
        else if (x === "0") 
        {
            console.log("Round "+ (i+1) + ": It's a draw!")
        }
        
    }
    if (computerScore < playerScore) {
        return `Player score: ${playerScore} and Computer score: ${computerScore}, so Player wins in total!`
    }
    else if (computerScore > playerScore){
        return `Player score: ${playerScore} and Computer score: ${computerScore}, so Computer wins in total!`
    }
    else {
        return "Oops, draw, try again"
    }

    
}
console.log(game())*/