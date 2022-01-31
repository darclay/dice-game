//created variables for the querySelectors for the dice and player selection
const die1 = document.querySelector('.oneDot');
const die2 = document.querySelector('.twoDot');
const die3 = document.querySelector('.threeDot');
const die4 = document.querySelector('.fourDot');
const die5 = document.querySelector('.fiveDot');
const die6 = document.querySelector('.sixDot');
const doubles = document.querySelector('.youRolledDoubles');
const player1 = document.querySelector('.p1Turn');
const player2 = document.querySelector('.p2Turn');
const p1TotalScore = document.querySelector(".player-one-total-score");
const p2TotalScore = document.querySelector('.player-two-total-score');
const p1CurrentScore = document.querySelector(".p1ScoreCurrent");
const p2CurrentScore = document.querySelector(".p2ScoreCurrent")
const rollDiceButton = document.querySelector('.roll');
const holdButton = document.querySelector('.hold');
const newGame = document.querySelector('.newGame');
const youWin = document.querySelector('.youWin');
const winner = document.querySelector('.winner');
const modalClose = document.querySelector('.modalClose');
const modal = document.querySelector('.modal');
const blur = document.querySelector('.blurredBackground');
const instructions = document.querySelector('.instructions');

function toggleModal(status){
  console.log(status);
  if(status === 'hide'){
    modal.className = 'hidden';
    blur.className = 'hidden';
  }else if (status === 'show'){
    modal.className = 'modal';
    blur.className = 'blurredBackground';
  }
}

modalClose.addEventListener('click', ()=>toggleModal('hide'));

instructions.addEventListener('click', ()=>toggleModal('show'));


//The dice is hidden by default and is shown when a random number is selected.  This function resets the dice to be hidden.
function resetDice(){
    die1.className = 'oneDot hidden';
    die2.className = 'twoDot hidden';
    die3.className = 'threeDot hidden';
    die4.className = 'fourDot hidden';
    die5.className = 'fiveDot hidden';
    die6.className = 'sixDot hidden';
    doubles.className = 'youRolledDoubles hidden';
}

//This function creates a random number
function randoNum(){
  return Math.ceil(Math.random() * 6)
}

//This function sets the two dice to the random number and then shows the dice based on the random numbers chosen.
let firstDice;
let secondDice;

function showDi1(num1){
  if (num1 == 1){
      die1.className = "oneDot"
  }else if (num1 == 2) {
      die2.className = "twoDot"
  }else if (num1 == 3) {
      die3.className = "threeDot"
  }else if (num1 == 4) {
      die4.className = "fourDot"
  }else if (num1 == 5) {
      die5.className = "fiveDot"
  }else if (num1 == 6) {
      die6.className = "sixDot"    
  }
}
function showDi2(num2){
  if (num2 == 1){
      die1.className = "oneDot"
  }else if (num2 == 2) {
      die2.className = "twoDot"
  }else if (num2 == 3) {
      die3.className = "threeDot"
  }else if (num2 == 4) {
      die4.className = "fourDot"
  }else if (num2 == 5) {
      die5.className = "fiveDot"
  }else if (num2 == 6) {
      die6.className = "sixDot"    
  }
}

//This is the function which displays you rolled doubles
function youRolledDoubles(){
  doubles.className = 'youRolledDoubles'; 
}

//This is the function to display who wins and to lock the 'roll dice' and 'hold' buttons.
function playerWins(player){
  rollDiceButton.className = 'hidden';
  holdButton.className = 'hidden';
  winner.textContent = player;
  youWin.className = 'youWin';
  player1.className = 'p1Turn';
  player2.className = 'p2Turn';
}


//This is the button click event which triggers the scores
rollDiceButton.addEventListener('click', playerSelection);

function playerSelection(){
  resetDice(); 
  firstDice = randoNum();
  secondDice =  randoNum();
  if (player1.className == 'p1Turn active') {
    rollDicePlayer1();
  }else if (player2.className == 'p2Turn active') {
    rollDicePlayer2();
  } 
}

let current = 0;

function rollDicePlayer1(){
  if(firstDice === secondDice){
    current = 0;
    p1CurrentScore.textContent = current;
    p1TotalScore.textContent = current;
    player1.className = 'p1Turn';
    player2.className = 'p2Turn active';
    youRolledDoubles();
  }else {
    showDi1(firstDice);
    showDi2(secondDice);
    current += firstDice + secondDice
    p1CurrentScore.textContent = current;
  }
}

function rollDicePlayer2(){
  if(firstDice === secondDice){
    current = 0;
    p2CurrentScore.textContent = current;
    p2TotalScore.textContent = current;
    player2.className = 'p2Turn';
    player1.className = 'p1Turn active';
    youRolledDoubles();
  }else {
    showDi1(firstDice);
    showDi2(secondDice);
    current += firstDice + secondDice
    p2CurrentScore.textContent = current;
  }
}

//The function HOLD is used to switch between players and hold score
holdButton.addEventListener('click', hold);

function hold(){
  resetDice();
  if (player1.className === 'p1Turn active') {
    let a = Number(p1TotalScore.textContent);
    let b = Number(p1CurrentScore.textContent);
    let sum = a+b;
    p1TotalScore.textContent = sum;
    p1CurrentScore.textContent = 0;
    current = 0;
    player1.className = 'p1Turn';
    player2.className = 'p2Turn active';
    if (Number(p1TotalScore.textContent) >= 20) playerWins('#1');

  }else if (player2.className === 'p2Turn active') {
    let a = Number(p2TotalScore.textContent);
    let b = Number(p2CurrentScore.textContent);
    let sum = a+b;
    p2TotalScore.textContent = sum;
    p2CurrentScore.textContent = 0;
    current = 0;
    player1.className = 'p1Turn active';
    player2.className = 'p2Turn';
    if (Number(p2TotalScore.textContent) >= 20) playerWins('#2');
}}

//This is the function for reseting the game.
newGame.addEventListener('click', chooseNewGame);

function chooseNewGame(){
  resetDice();
  current = 0;
  p1CurrentScore.textContent = current;
  p1TotalScore.textContent = current;
  p2CurrentScore.textContent = current;
  p2TotalScore.textContent = current;
  player1.className = 'p1Turn active';
  player2.className = 'p2Turn';
  rollDiceButton.className = 'roll';
  holdButton.className = 'hold';
  youWin.className = 'youWin hidden';
}