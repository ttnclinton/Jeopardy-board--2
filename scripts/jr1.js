import placeholderQuestions from "./placeholder-questions.js";
console.log({ placeholderQuestions });

// Start the game
let playerTurn = document.querySelector(".playerTurn");
let Guess = document.querySelector(".Guess");
let Pass = document.querySelector(".Pass");
let NextRound = document.querySelector(".NextRound");

// grabbed for start the game
function turn(){
    playerTurn.textContent="Player 1"
    };
    turn();
    
    Guess.disabled = true;
    Pass.disabled = true;
    NextRound.disabled = true;

// Select a Question
// Grabbing Category
let text1cate = document.querySelector(".text1.cate");
let text1cell = document.querySelector(".text1.cell");


text1cate.textContent= placeholderQuestions[0].category;

function text1CellClicked(e){
    text1cell.textContent= placeholderQuestions[0].question; 
    Guess.disabled = false;
    Pass.disabled = false;  
}

text1cell.onclick=text1CellClicked;

function passButtonClicked(){
    playerTurn.textContent="Player 2";
}

Pass.onclick=passButtonClicked;



 
   