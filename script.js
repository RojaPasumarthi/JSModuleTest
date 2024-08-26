let computerScore = document.getElementById("CScore");
let userScore = document.getElementById("UScore");

const buttonClick = document.querySelectorAll(".click");

let compScore = parseInt(localStorage.getItem("computerScore")) || 0;
let usrScore = parseInt(localStorage.getItem("userScore")) || 0;

computerScore.innerHTML=compScore;
userScore.innerHTML=usrScore;

// document.getElementById('CScore').innerHTML=compScore;
// document.getElementById('UScore').innerHTML=usrScore;


const computerChoices = ["rock", "paper", "scissor"];


function computerSelection() {
  return computerChoices[Math.floor(Math.random() * 3)];
}

// the game result based on user choice and computer choice
function playGame(userChoice) {
    const computerChoice = computerSelection();
    console.log("PC choose:", computerChoice);
    console.log("You choose:", userChoice);
  
    // Check for a tie
    if (userChoice === computerChoice) {
      console.log("It's a tie!");
      localStorage.setItem("userChoice", userChoice);
      localStorage.setItem("computerChoice", computerChoice);
     
      window.location.href= "tie.html"; 
    }
    // if the user wins
    else if (
      (userChoice === "rock" && computerChoice === "scissor") ||
      (userChoice === "scissor" && computerChoice === "paper") ||
      (userChoice === "paper" && computerChoice === "rock")
    ) {
      console.log("You win!");
      usrScore += 1;
      userScore.innerText=usrScore;
    
      localStorage.setItem("userScore", usrScore);
      localStorage.setItem("userChoice", userChoice);
      localStorage.setItem("computerChoice", computerChoice);
      document.getElementById('UScore').innerHTML=usrScore;
      window.location.href= "win.html"; 
      
      
    
    }
    // computer wins
    else {
      console.log("PC wins!");
      compScore += 1;
      computerScore.innerText = compScore;
      localStorage.setItem("computerScore", compScore);
      localStorage.setItem("userChoice", userChoice);
      localStorage.setItem("computerChoice", computerChoice);
      window.location.href= "lose.html";  
      
    }
  }
  
  
  
  // Event listeners 
  buttonClick.forEach((button) => {
    button.addEventListener("click", function () {
      playGame(this.id);
    });
  });


  //Rules
  const crsBtn=document.getElementById("crossMark");
  const gmeRules=document.getElementById("gameRules");
  const RlsBtn=document.getElementById("rules");

  window.addEventListener("DOMContentLoaded", (event) => {
  RlsBtn.addEventListener("click",() => {
    gmeRules.style.visibility="visible";
    crsBtn.style.visibility="visible";
  });
});

  crsBtn.addEventListener("click", () =>{
    gmeRules.style.visibility="hidden";
    crsBtn.style.visibility="hidden";
  });