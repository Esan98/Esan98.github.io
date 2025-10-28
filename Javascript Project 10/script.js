const mainDeck = [
  { name: "Ace of Hearts", suit: "Hearts", rank: "Ace" },
  { name: "2 of Hearts", suit: "Hearts", rank: "2" },
  { name: "3 of Hearts", suit: "Hearts", rank: "3" },
  { name: "4 of Hearts", suit: "Hearts", rank: "4" },
  { name: "5 of Hearts", suit: "Hearts", rank: "5" },
  { name: "6 of Hearts", suit: "Hearts", rank: "6" },
  { name: "7 of Hearts", suit: "Hearts", rank: "7" },
  { name: "8 of Hearts", suit: "Hearts", rank: "8" },
  { name: "9 of Hearts", suit: "Hearts", rank: "9" },
  { name: "10 of Hearts", suit: "Hearts", rank: "10" },
  { name: "Jack of Hearts", suit: "Hearts", rank: "Jack" },
  { name: "Queen of Hearts", suit: "Hearts", rank: "Queen" },
  { name: "King of Hearts", suit: "Hearts", rank: "King" },
  { name: "Ace of Diamonds", suit: "Diamonds", rank: "Ace" },
  { name: "2 of Diamonds", suit: "Diamonds", rank: "2" },
  { name: "3 of Diamonds", suit: "Diamonds", rank: "3" },
  { name: "4 of Diamonds", suit: "Diamonds", rank: "4" },
  { name: "5 of Diamonds", suit: "Diamonds", rank: "5" },
  { name: "6 of Diamonds", suit: "Diamonds", rank: "6" },
  { name: "7 of Diamonds", suit: "Diamonds", rank: "7" },
  { name: "8 of Diamonds", suit: "Diamonds", rank: "8" },
  { name: "9 of Diamonds", suit: "Diamonds", rank: "9" },
  { name: "10 of Diamonds", suit: "Diamonds", rank: "10" },
  { name: "Jack of Diamonds", suit: "Diamonds", rank: "Jack" },
  { name: "Queen of Diamonds", suit: "Diamonds", rank: "Queen" },
  { name: "King of Diamonds", suit: "Diamonds", rank: "King" },
  { name: "Ace of Clubs", suit: "Clubs", rank: "Ace" },
  { name: "2 of Clubs", suit: "Clubs", rank: "2" },
  { name: "3 of Clubs", suit: "Clubs", rank: "3" },
  { name: "4 of Clubs", suit: "Clubs", rank: "4" },
  { name: "5 of Clubs", suit: "Clubs", rank: "5" },
  { name: "6 of Clubs", suit: "Clubs", rank: "6" },
  { name: "7 of Clubs", suit: "Clubs", rank: "7" },
  { name: "8 of Clubs", suit: "Clubs", rank: "8" },
  { name: "9 of Clubs", suit: "Clubs", rank: "9" },
  { name: "10 of Clubs", suit: "Clubs", rank: "10" },
  { name: "Jack of Clubs", suit: "Clubs", rank: "Jack" },
  { name: "Queen of Clubs", suit: "Clubs", rank: "Queen" },
  { name: "King of Clubs", suit: "Clubs", rank: "King" },
  { name: "Ace of Spades", suit: "Spades", rank: "Ace" },
  { name: "2 of Spades", suit: "Spades", rank: "2" },
  { name: "3 of Spades", suit: "Spades", rank: "3" },
  { name: "4 of Spades", suit: "Spades", rank: "4" },
  { name: "5 of Spades", suit: "Spades", rank: "5" },
  { name: "6 of Spades", suit: "Spades", rank: "6" },
  { name: "7 of Spades", suit: "Spades", rank: "7" },
  { name: "8 of Spades", suit: "Spades", rank: "8" },
  { name: "9 of Spades", suit: "Spades", rank: "9" },
  { name: "10 of Spades", suit: "Spades", rank: "10" },
  { name: "Jack of Spades", suit: "Spades", rank: "Jack" },
  { name: "Queen of Spades", suit: "Spades", rank: "Queen" },
  { name: "King of Spades", suit: "Spades", rank: "King" }
];




// Shulffle Deck Feature
shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
// Player Data
let currentRound = 1;
const playerCount = 8;
let deal1;
let deal2;
let deal3;
let deal4;
let deal5;
let deal6;
let bigBlind;
let smallBlind;
let folded = false;
let betAmount;
const playerBet = document.getElementById('playerBet');
const hand = document.getElementById('hand');
const startbtn = document.getElementById('startbtn');
const title = document.getElementById('title');
const body = document.getElementById('body');
const balance = document.getElementById('balance');


const player1 = {
	'Player Hand' : {
		card1 : deal1,
		card2 : deal2,
	},
	'Big Blind' : false,
	'Small Blind' : false,
	'Current Balance' : 500,
	folded : false,
  bet : playerBet
}

const players = [
  {
    'Player Hand': { card1: deal1, card2: deal2 },
    'Big Blind': false,
    'Small Blind': false,
    'Current Balance': 500,
    folded: false,
    bet: playerBet
  },
  {
    'Player Hand': { card1: deal1, card2: deal2 },
    'Big Blind': false,
    'Small Blind': false,
    'Current Balance': 500,
    folded: false,
    bet: playerBet
  },
  {
    'Player Hand': { card1: deal1, card2: deal2 },
    'Big Blind': false,
    'Small Blind': false,
    'Current Balance': 500,
    folded: false,
    bet: playerBet
  },
  {
    'Player Hand': { card1: deal1, card2: deal2 },
    'Big Blind': false,
    'Small Blind': false,
    'Current Balance': 500,
    folded: false,
    bet: playerBet
  },

placedBet = (amount) => {
	alert(`You placed a bet of $${amount}!`)
}
betPromptAgain = () => {
	betAmount = parseFloat(prompt('Please enter a numer that you can afford!'));
	(!isNaN(betAmount) && betAmount <= player1['Current Balance']) ? placedBet(betAmount) : betPromptAgain()
}
betPrompt = () => {
	betAmount = parseFloat(prompt('Enter Bet Amount:'));
	(!isNaN(betAmount) && betAmount <= player1['Current Balance']) ? placedBet(betAmount) : betPromptAgain()
}
startbtn.addEventListener('click', startGame = () => {
	title.classList.add('hide');
	startbtn.style.display = 'none';
	body.classList.add('table')
	balance.textContent = '$' + player1['Current Balance'];
});

shuffle(mainDeck)
dealCards = () => {
	deal1 = mainDeck.pop()
	deal2 = mainDeck.pop()
}
dealCards()
resetDeck = () => {
  mainDeck.push(deal1)
  mainDeck.push(deal2)
}
resetGame = () => {
  currentRound++
  resetDeck()
  shuffleDeck()
  dealCards()
}

showHand = () => {
	hand.textContent = `Your cards are ${player1['Player Hand'].card1.name} and ${player1['Player Hand'].card2.name}`
}