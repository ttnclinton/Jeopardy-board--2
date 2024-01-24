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
let text2cate = document.querySelector(".text2.cate");
let text3cate = document.querySelector(".text3.cate");
let text4cate = document.querySelector(".text4.cate");
let text5cate = document.querySelector(".text5.cate");
let text6cate = document.querySelector(".text6.cate");
let text1cell = document.querySelector(".text1.cell");
let text2cell = document.querySelector(".text2.cell");
let text3cell = document.querySelector(".text3.cell");
let text4cell = document.querySelector(".text4.cell");
let text5cell = document.querySelector(".text5.cell");
let text6cell = document.querySelector(".text6.cell");
let score1 = document.querySelector("#number1");
let score2 = document.querySelector("#number2");

text1cate.textContent= placeholderQuestions[0].category
text2cate.textContent= placeholderQuestions[10].category
text3cate.textContent= placeholderQuestions[20].category
text4cate.textContent= placeholderQuestions[30].category
text5cate.textContent= placeholderQuestions[40].category
text6cate.textContent= placeholderQuestions[50].category


function text1CellClicked(e){
    text1cell.textContent= placeholderQuestions[0].question; 
    Guess.disabled = false;
    Pass.disabled = false;  
}

text1cell.onclick=text1CellClicked;

function text2CellClicked(e){
    text2cell.textContent= placeholderQuestions[10].question; 
    Guess.disabled = false;
    Pass.disabled = false;  
}

text2cell.onclick=text2CellClicked;

function text3CellClicked(e){
    text3cell.textContent= placeholderQuestions[20].question; 
    Guess.disabled = false;
    Pass.disabled = false;  
}

text3cell.onclick=text1CellClicked;

function text4CellClicked(e){
    text4cell.textContent= placeholderQuestions[30].question; 
    Guess.disabled = false;
    Pass.disabled = false;  
}

text4cell.onclick=text1CellClicked;

function text5CellClicked(e){
    text5cell.textContent= placeholderQuestions[40].question; 
    Guess.disabled = false;
    Pass.disabled = false;  
}

text5cell.onclick=text1CellClicked;

function text6CellClicked(e){
    text6cell.textContent= placeholderQuestions[50].question; 
    Guess.disabled = false;
    Pass.disabled = false;  
}

text6cell.onclick=text6CellClicked;



// Pass a Question

function passButtonClicked(){
    playerTurn.textContent="Player 2";
}

Pass.onclick=passButtonClicked;

// Answer a Question Correctly

let inputAnswer = document.querySelector(".guess");

Guess.onclick("click", () => {
    let answer = inputAnswer.value;
    if(answer == placeHolder[0].answer){

    } else { 

    }
})

function updateScore(){

}
 
