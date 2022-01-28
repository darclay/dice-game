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
  let firstDice = randoNum()
  let secondDice = randoNum()
  if(firstDice === secondDice){
    console.log("Player 1 rolled doubles");
    current1 = 0;
    document.querySelector(".p1ScoreCurrent").textContent = current1;
    document.querySelector(".player-one-total-score").textContent = current1;
    document.querySelector('.hold1').className = 'hold1 notActive';
    document.querySelector('.hold2').className = 'hold2';
    document.querySelector('.roll1').className = 'roll1 notActive';
    document.querySelector('.roll2').className = 'roll2';
  }else {
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
  let firstDice = randoNum()
  let secondDice = randoNum()
  if(firstDice === secondDice){
    console.log("you rolled doubles");
    current2 = 0;
    document.querySelector(".p2ScoreCurrent").textContent = current2;
    document.querySelector(".player-two-total-score").textContent = current2;
    document.querySelector('.hold2').className = 'hold2 notActive';
    document.querySelector('.hold1').className = 'hold1';
    document.querySelector('.roll2').className = 'roll2 notActive';
    document.querySelector('.roll1').className = 'roll1';
  }else {
    console.log(`Player two current pior to roll is ${current2}`)
    current2 += firstDice + secondDice
    document.querySelector(".p2ScoreCurrent").textContent = current2;
    console.log(`Player 2 current after roll is ${current2}`);
  }
}


//create a function HOLD to switch to player 2 or back to player 1
document.querySelector('.hold1').addEventListener('click', hold1);
function hold1 () {
  let a = Number(document.querySelector('.player-one-total-score').textContent);
  let b = Number(document.querySelector('.p1ScoreCurrent').textContent);
  console.log(a, b)
  let sum = a+b;
  document.querySelector('.player-one-total-score').textContent = sum;
  document.querySelector(".p1ScoreCurrent").textContent = 0;
  current1 = 0;
  document.querySelector('.hold1').className = 'hold1 notActive';
  document.querySelector('.hold2').className = 'hold2';
  document.querySelector('.roll1').className = 'roll1 notActive';
  document.querySelector('.roll2').className = 'roll2';
}
//---------------------------------------------------------------------------------
document.querySelector('.hold2').addEventListener('click', hold2);
function hold2 () {
  let a = Number(document.querySelector('.player-two-total-score').textContent);
  let b = Number(document.querySelector('.p2ScoreCurrent').textContent);
  console.log(typeof a, a, typeof b, b)
  let sum = a+b;
  document.querySelector('.player-two-total-score').textContent = sum;
  document.querySelector(".p2ScoreCurrent").textContent = 0;
  current2 = 0;
  document.querySelector('.hold2').className = 'hold2 notActive';
  document.querySelector('.hold1').className = 'hold1';
  document.querySelector('.roll2').className = 'roll2 notActive';
  document.querySelector('.roll1').className = 'roll1';
}
//create another function SEE DICE to select dice from a random number
//do this two times;
const die1 = document.querySelector('.oneDot');
const die2 = document.querySelector('.twoDot');
const die3 = document.querySelector('.threeDot');
const die4 = document.querySelector('.fourDot');
const die5 = document.querySelector('.fiveDot');
const die6 = document.querySelector('.sixDot');






