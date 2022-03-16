let start = document.getElementById('start').addEventListener('click', startGame)
const options = document.querySelectorAll(".uc");
let pScore = 0;
let cScore = 0;


function computerPlay() {
  options = ["rock", "paper", "scissor"]
  return options[Math.floor(Math.random() * 3)] //return 0,1,2
}

function updateMoves(pInput, cInput){
  document.getElementById("p-move").src = `./assets/${pInput}.svg`;
  document.getElementById("c-move").src = `./assets/${cInput}.svg`;
}

function startGame() {

  for (let i = 1; i <= 5; i++) {
    document.getElementById('round').textContent = "Round " + i


    options.forEach((option) => {
      option.addEventListener("click", function () {
        const pInput = this.value;

        const cOptions = ["Rock", "Paper", "Scissors"];
        const cInput = cOptions[Math.floor(Math.random() * 3)];
        
        updateMoves(pInput, cInput);
        compareInputs(pInput, cInput);
        updateScore();
        if(checkWinner()){
          pScore = cScore= 0;
          updateScore();
        }
      });
    });


  }
console.log("try")
  }

  