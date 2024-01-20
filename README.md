# Jeopardy Game (Part 2)

In this project, we will be completing the functionality for our Jeopardy / quiz game utilizing what we learned this week!

The game of Jeopardy consists of several players that compete to earn points by selecting questions of varying points values from a board. The board is a 6 X 6 square with each column representing a category, and the first row containing the titles of each category, and every row after being increasingly difficult questions (with correspondingly higher point values) for their categories

You will be given placeholder data for this project in the form of an array of objects.

# Stories

## Ready, Set, Go! `done`

`Given` the players are on the landing page

`When` one player clicks the 'Start Game' button

`Then` the players redirected to the Round 1 page

## Start the Game `done`

`Given` the players have been redirected to the Round 1 page

`When` the page loads

`Then` there is a notification that it is player 1's turn to choose

`And` the "Guess", "Pass", and "Round 2" buttons are disabled

## Select a Question `done`

`Given` an empty board, and player 1 is currently up

`When` player 1 selects a card

`Then` the score on the card is replaced by a question

`And` the "Submit Answer" button is enabled

`And` the "Pass Question" button is enabled

## Pass a Question `done`

`Given` a question has been chosen

`When` the user clicks on the "Pass Question" button

`Then` player 2 gets an opportunity to answer the question

`And` the notification area changes to player 2's turn

## Answer a Question Correctly `done`

`Given` a question has been chosen

`When` the player submits an answer

`And` the answer is correct

`Then` the game awards the player the amount of points that were on the card

`And` the card is blanked out

`And` the current player does not change

## Answer a Question Incorrectly `done`

`Given` a question has been chosen

`When` the player submits an answer

`And` the answer is incorrect

`Then` the game subtracts the point total from the player's score

`And` the other player gets a chance to answer the question

`And` if no one guesses correctly the original player gets to choose a new question

## Score Board `done`

`Given` the game has been started

`When` the score changes

`Then` the game should display each player's current score on the page

## Only Allow One Question `done`

`Given` a card has already been selected

`When` the player tries to pick a new card

`Then` the question does not change

`And` the game alerts the player that they must answer, or pass the question

## End Round 1 `done`

`Given` that the score of one user reaches 15,000 points. `15000 points is not possible`

... (95 lines left)