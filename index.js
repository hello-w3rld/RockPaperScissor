let start = document.getElementById('start').addEventListener('click', startGame)
let rep = document.getElementById('rp').addEventListener('click', startGame)
let output = document.getElementById('output')
let fv = document.getElementById('fv')
let pscore = 0
let cscore = 0
let options = document.querySelectorAll(".options");
let pInput

function startGame() {
  document.getElementById('cscore').textContent=0
  document.getElementById('pscore').textContent=0
  fv.textContent= "";
  output.textContent="Click on your weapon!"

  pscore = 0
  cscore = 0
console.log("try")
   
  
    options.forEach((option) => {
      option.addEventListener("click", function () {
       pInput = this.value

       let cOptions = ["Rock", "Paper", "Scissors"];
       let cInput = cOptions[Math.floor(Math.random() * 3)];
       compareInputs(pInput, cInput);

       checkWinner()
      });
   
    });}
    

//comapre
function compareInputs(pInput, cInput) {
  
  if (pInput === cInput) {
    output.textContent = `DRAW! Nobody wins this round as player chose ${pInput} and computer chose ${cInput}`
  }

  else if ((pInput === "Rock" && cInput === "Scissors") || 
  (pInput === "Scissors" && cInput === "Paper") ||
  (pInput === "Paper" && cInput === "Rock")) {
    pscore++
    document.getElementById('pscore').textContent=pscore
    output.textContent = `Player wins this round as player chose ${pInput} and computer chose ${cInput}`
  }

 else {
  
  cscore++;
  document.getElementById('cscore').textContent=cscore
  output.textContent = `Player loses this round as player chose ${pInput} and computer chose ${cInput}`
 }
} 


function checkWinner() {
  if (pscore === 5 || cscore === 5) {
    if (pscore === 5)
      fv.textContent = "You win the game! Congratulations!"
    else 
      fv.textContent= "Computer wins the game! Try again next time!"


  }

}
/*
function startGame() {

   // document.getElementById('round').textContent = "Round " + i
    console.log("try")
    let pInput;
  
    options.forEach((option) => {
      option.addEventListener("click", function () {
       pInput = this.value;

       let cOptions = ["Rock", "Paper", "Scissors"];
       let cInput = cOptions[Math.floor(Math.random() * 3)];
       compareInputs(pInput, cInput);
      });

    
    });
    checkWinner()
  
  }*/