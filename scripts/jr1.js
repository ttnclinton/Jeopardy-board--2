import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

// Start the game
let playerTurn = document.querySelector(".playerTurn");
let Guess = document.querySelector(".Guess");
let Pass = document.querySelector(".Pass");
let NextRound = document.querySelector(".NextRound");


function turn(){
playerTurn.textContent="Player 1"
};
turn();

Guess.disabled = true;
Pass.disabled = true;
NextRound.disabled = true;

// Select a question

//placeHolder[1].question

let 
   