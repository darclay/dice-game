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
const rollDiceButton = document.querySelector('.roll');
const holdButton = document.querySelector('.hold');
const newGame = document.querySelector('.newGame')

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

//This is the button click event which triggers the scores
rollDiceButton.addEventListener('click', playerSelection);

function playerSelection(){
  resetDice(); 
  firstDice = randoNum();
  secondDice =  randoNum();
  if (player1.className == 'p1Turn active') {
    rollDicePlayer1();
  }else if (player2.className === 'p2Turn active') {
    rollDicePlayer2();
  } 
}

let current = 0;

function rollDicePlayer1(){
  if(firstDice === secondDice){
    console.log(`player 1 rolled doubles`);
    current = 0;
    document.querySelector(".p1ScoreCurrent").textContent = current;
    document.querySelector(".player-one-total-score").textContent = current;
    player1.className = 'p1Turn';
    player2.className = 'p2Turn active';
    youRolledDoubles();
  }else {
    showDi1(firstDice);
    showDi2(secondDice);
    current += firstDice + secondDice
    document.querySelector(".p1ScoreCurrent").textContent = current;
  }
}

function rollDicePlayer2(){
  if(firstDice === secondDice){
    current = 0;
    document.querySelector(".p2ScoreCurrent").textContent = current;
    document.querySelector(".player-two-total-score").textContent = current;
    player2.className = 'p2Turn';
    player1.className = 'p1Turn active';
    youRolledDoubles();
  }else {
    showDi1(firstDice);
    showDi2(secondDice);
    current += firstDice + secondDice
    document.querySelector(".p2ScoreCurrent").textContent = current;
  }
}

//The function HOLD is used to switch between players and hold score
holdButton.addEventListener('click', hold);

function hold(){
  resetDice();
  if (player1.className === 'p1Turn active') {
    console.log(`player1 chose hold`);
    let a = Number(document.querySelector('.player-one-total-score').textContent);
    let b = Number(document.querySelector('.p1ScoreCurrent').textContent);
    let sum = a+b;
    document.querySelector('.player-one-total-score').textContent = sum;
    document.querySelector(".p1ScoreCurrent").textContent = 0;
    current = 0;
    player1.className = 'p1Turn';
    player2.className = 'p2Turn active';
  }else if (player2.className === 'p2Turn active') {
    console.log(`player2 chose hold`)
    let a = Number(document.querySelector('.player-two-total-score').textContent);
    let b = Number(document.querySelector('.p2ScoreCurrent').textContent);
    let sum = a+b;
    document.querySelector('.player-two-total-score').textContent = sum;
    document.querySelector(".p2ScoreCurrent").textContent = 0;
    current = 0;
    player1.className = 'p1Turn active';
    player2.className = 'p2Turn';
  }
}

//This is the function for reseting the game.
newGame.addEventListener('click', chooseNewGame);

function chooseNewGame(){
  resetDice();
  current = 0;
  document.querySelector(".p1ScoreCurrent").textContent = current;
  document.querySelector(".player-one-total-score").textContent = current;
  document.querySelector(".p2ScoreCurrent").textContent = current;
  document.querySelector(".player-two-total-score").textContent = current;
  player1.className = 'p1Turn active';
  player2.className = 'p2Turn';
}