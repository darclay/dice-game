const die1 = document.querySelector('.oneDot');
const die2 = document.querySelector('.twoDot');
const die3 = document.querySelector('.threeDot');
const die4 = document.querySelector('.fourDot');
const die5 = document.querySelector('.fiveDot');
const die6 = document.querySelector('.sixDot');
const doubles = document.querySelector('.youRolledDoubles');

function resetDice(){
    die1.className = 'oneDot hidden';
    die2.className = 'twoDot hidden';
    die3.className = 'threeDot hidden';
    die4.className = 'fourDot hidden';
    die5.className = 'fiveDot hidden';
    die6.className = 'sixDot hidden';
    doubles.className = 'youRolledDoubles hidden';
}
//create another function SEE DICE to select dice from a random number
//do this two times;
function showDi1(num1){
  console.log(num1);
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
  console.log(num2);
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

//create a function to pull a random Number
function randoNum () {
  return Math.ceil(Math.random() * 6)
}

//create a function ADDSCORES to add values together and display to add and display to CURRENT and then adds to player score
//perhaps within the ADDSCORES is a conditional, if rolled valued is doubles then reset scores to "0";
const rollDiceButton1 = document.querySelector('.roll1');
rollDiceButton1.addEventListener('click', rollDice1);
let current1 = 0;

function rollDice1 () {
  resetDice();
  let firstDice = randoNum();
  let secondDice = randoNum();
  if(firstDice === secondDice){
    console.log("Player 1 rolled doubles");
    current1 = 0;
    document.querySelector(".p1ScoreCurrent").textContent = current1;
    document.querySelector(".player-one-total-score").textContent = current1;
    document.querySelector('.hold1').className = 'hold1 hidden';
    document.querySelector('.hold2').className = 'hold2';
    document.querySelector('.roll1').className = 'roll1 hidden';
    document.querySelector('.roll2').className = 'roll2';
    document.querySelector('.youRolledDoubles').className = 'youRolledDoubles';  
  }else {
    showDi1(firstDice);
    showDi2(secondDice);
    console.log(`Player 1 current score before the roll was: ${current1}`)
    current1 += firstDice + secondDice
    document.querySelector(".p1ScoreCurrent").textContent = current1;
    console.log(`Player 1 current score AFTER the roll is ${current1}`);
  }
}
//--------------------------------------------------------------------
const rollDiceButton2 = document.querySelector('.roll2');
rollDiceButton2.addEventListener('click', rollDice2);
let current2 = 0;

function rollDice2 () {
  resetDice();
  let firstDice = randoNum()
  let secondDice = randoNum()
  
  if(firstDice === secondDice){
    console.log("you rolled doubles");
    current2 = 0;
    document.querySelector(".p2ScoreCurrent").textContent = current2;
    document.querySelector(".player-two-total-score").textContent = current2;
    document.querySelector('.hold2').className = 'hold2 hidden';
    document.querySelector('.hold1').className = 'hold1';
    document.querySelector('.roll2').className = 'roll2 hidden';
    document.querySelector('.roll1').className = 'roll1';
    document.querySelector('.youRolledDoubles').className = 'youRolledDoubles';  
  }else {
    showDi1(firstDice);
    showDi2(secondDice);
    console.log(`Player two current pior to roll is ${current2}`)
    current2 += firstDice + secondDice
    document.querySelector(".p2ScoreCurrent").textContent = current2;
    console.log(`Player 2 current after roll is ${current2}`);
  }
}

//create a function HOLD to switch to player 2 or back to player 1
document.querySelector('.hold1').addEventListener('click', hold1);
function hold1 () {
  resetDice();
  let a = Number(document.querySelector('.player-one-total-score').textContent);
  let b = Number(document.querySelector('.p1ScoreCurrent').textContent);
  console.log(a, b)
  let sum = a+b;
  document.querySelector('.player-one-total-score').textContent = sum;
  document.querySelector(".p1ScoreCurrent").textContent = 0;
  current1 = 0;
  document.querySelector('.hold1').className = 'hold1 hidden';
  document.querySelector('.hold2').className = 'hold2';
  document.querySelector('.roll1').className = 'roll1 hidden';
  document.querySelector('.roll2').className = 'roll2';
}
//---------------------------------------------------------------------------------
document.querySelector('.hold2').addEventListener('click', hold2);
function hold2 () {
  resetDice();
  let a = Number(document.querySelector('.player-two-total-score').textContent);
  let b = Number(document.querySelector('.p2ScoreCurrent').textContent);
  console.log(typeof a, a, typeof b, b)
  let sum = a+b;
  document.querySelector('.player-two-total-score').textContent = sum;
  document.querySelector(".p2ScoreCurrent").textContent = 0;
  current2 = 0;
  document.querySelector('.hold2').className = 'hold2 hidden';
  document.querySelector('.hold1').className = 'hold1';
  document.querySelector('.roll2').className = 'roll2 hidden';
  document.querySelector('.roll1').className = 'roll1';
}

//This is the function for reseting the game.
const newG = document.querySelector('.newGame')
function handleClick(){
  resetDice();
  
  current1 = 0;
  document.querySelector(".p1ScoreCurrent").textContent = current1;
  document.querySelector(".player-one-total-score").textContent = current1;

  current2 = 0;
  document.querySelector(".p2ScoreCurrent").textContent = current2;
  document.querySelector(".player-two-total-score").textContent = current2;
}
newG.addEventListener('click', handleClick);








