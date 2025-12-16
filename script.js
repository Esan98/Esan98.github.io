const mainDeck = [
  { name: "Ace of Hearts", suit: "Hearts", rank: "Ace", spriteIndex: 0 },
  { name: "2 of Hearts", suit: "Hearts", rank: "2", spriteIndex: 1 },
  { name: "3 of Hearts", suit: "Hearts", rank: "3", spriteIndex: 2 },
  { name: "4 of Hearts", suit: "Hearts", rank: "4", spriteIndex: 3 },
  { name: "5 of Hearts", suit: "Hearts", rank: "5", spriteIndex: 4 },
  { name: "6 of Hearts", suit: "Hearts", rank: "6", spriteIndex: 5 },
  { name: "7 of Hearts", suit: "Hearts", rank: "7", spriteIndex: 6 },
  { name: "8 of Hearts", suit: "Hearts", rank: "8", spriteIndex: 7 },
  { name: "9 of Hearts", suit: "Hearts", rank: "9", spriteIndex: 8 },
  { name: "10 of Hearts", suit: "Hearts", rank: "10", spriteIndex: 9 },
  { name: "Jack of Hearts", suit: "Hearts", rank: "Jack", spriteIndex: 10 },
  { name: "Queen of Hearts", suit: "Hearts", rank: "Queen", spriteIndex: 11 },
  { name: "King of Hearts", suit: "Hearts", rank: "King", spriteIndex: 12 },
  { name: "Ace of Diamonds", suit: "Diamonds", rank: "Ace", spriteIndex: 28 },
  { name: "2 of Diamonds", suit: "Diamonds", rank: "2", spriteIndex: 29 },
  { name: "3 of Diamonds", suit: "Diamonds", rank: "3", spriteIndex: 30 },
  { name: "4 of Diamonds", suit: "Diamonds", rank: "4", spriteIndex: 31 },
  { name: "5 of Diamonds", suit: "Diamonds", rank: "5", spriteIndex: 32 },
  { name: "6 of Diamonds", suit: "Diamonds", rank: "6", spriteIndex: 33 },
  { name: "7 of Diamonds", suit: "Diamonds", rank: "7", spriteIndex: 34 },
  { name: "8 of Diamonds", suit: "Diamonds", rank: "8", spriteIndex: 35 },
  { name: "9 of Diamonds", suit: "Diamonds", rank: "9", spriteIndex: 36 },
  { name: "10 of Diamonds", suit: "Diamonds", rank: "10", spriteIndex: 37 },
  { name: "Jack of Diamonds", suit: "Diamonds", rank: "Jack", spriteIndex: 38 },
  { name: "Queen of Diamonds", suit: "Diamonds", rank: "Queen", spriteIndex: 39 },
  { name: "King of Diamonds", suit: "Diamonds", rank: "King", spriteIndex: 40 },
  { name: "Ace of Clubs", suit: "Clubs", rank: "Ace", spriteIndex: 42 },
  { name: "2 of Clubs", suit: "Clubs", rank: "2", spriteIndex: 43 },
  { name: "3 of Clubs", suit: "Clubs", rank: "3", spriteIndex: 44 },
  { name: "4 of Clubs", suit: "Clubs", rank: "4", spriteIndex: 45 },
  { name: "5 of Clubs", suit: "Clubs", rank: "5", spriteIndex: 46 },
  { name: "6 of Clubs", suit: "Clubs", rank: "6", spriteIndex: 47 },
  { name: "7 of Clubs", suit: "Clubs", rank: "7", spriteIndex: 48 },
  { name: "8 of Clubs", suit: "Clubs", rank: "8", spriteIndex: 49 },
  { name: "9 of Clubs", suit: "Clubs", rank: "9", spriteIndex: 50 },
  { name: "10 of Clubs", suit: "Clubs", rank: "10", spriteIndex: 51 },
  { name: "Jack of Clubs", suit: "Clubs", rank: "Jack", spriteIndex: 52 },
  { name: "Queen of Clubs", suit: "Clubs", rank: "Queen", spriteIndex: 53 },
  { name: "King of Clubs", suit: "Clubs", rank: "King", spriteIndex: 54 },
  { name: "Ace of Spades", suit: "Spades", rank: "Ace", spriteIndex: 14 },
  { name: "2 of Spades", suit: "Spades", rank: "2", spriteIndex: 15 },
  { name: "3 of Spades", suit: "Spades", rank: "3", spriteIndex: 16 },
  { name: "4 of Spades", suit: "Spades", rank: "4", spriteIndex: 17 },
  { name: "5 of Spades", suit: "Spades", rank: "5", spriteIndex: 18 },
  { name: "6 of Spades", suit: "Spades", rank: "6", spriteIndex: 19 },
  { name: "7 of Spades", suit: "Spades", rank: "7", spriteIndex: 20 },
  { name: "8 of Spades", suit: "Spades", rank: "8", spriteIndex: 21 },
  { name: "9 of Spades", suit: "Spades", rank: "9", spriteIndex: 22 },
  { name: "10 of Spades", suit: "Spades", rank: "10", spriteIndex: 23 },
  { name: "Jack of Spades", suit: "Spades", rank: "Jack", spriteIndex: 24 },
  { name: "Queen of Spades", suit: "Spades", rank: "Queen", spriteIndex: 25 },
  { name: "King of Spades", suit: "Spades", rank: "King", spriteIndex: 26 }
];

const deck = [
  { name: "Ace of Hearts", suit: "Hearts", rank: "Ace", spriteIndex: 0 },
  { name: "2 of Hearts", suit: "Hearts", rank: "2", spriteIndex: 1 },
  { name: "3 of Hearts", suit: "Hearts", rank: "3", spriteIndex: 2 },
  { name: "4 of Hearts", suit: "Hearts", rank: "4", spriteIndex: 3 },
  { name: "5 of Hearts", suit: "Hearts", rank: "5", spriteIndex: 4 },
  { name: "6 of Hearts", suit: "Hearts", rank: "6", spriteIndex: 5 },
  { name: "7 of Hearts", suit: "Hearts", rank: "7", spriteIndex: 6 },
  { name: "8 of Hearts", suit: "Hearts", rank: "8", spriteIndex: 7 },
  { name: "9 of Hearts", suit: "Hearts", rank: "9", spriteIndex: 8 },
  { name: "10 of Hearts", suit: "Hearts", rank: "10", spriteIndex: 9 },
  { name: "Jack of Hearts", suit: "Hearts", rank: "Jack", spriteIndex: 10 },
  { name: "Queen of Hearts", suit: "Hearts", rank: "Queen", spriteIndex: 11 },
  { name: "King of Hearts", suit: "Hearts", rank: "King", spriteIndex: 12 },
  { name: "Ace of Diamonds", suit: "Diamonds", rank: "Ace", spriteIndex: 28 },
  { name: "2 of Diamonds", suit: "Diamonds", rank: "2", spriteIndex: 29 },
  { name: "3 of Diamonds", suit: "Diamonds", rank: "3", spriteIndex: 30 },
  { name: "4 of Diamonds", suit: "Diamonds", rank: "4", spriteIndex: 31 },
  { name: "5 of Diamonds", suit: "Diamonds", rank: "5", spriteIndex: 32 },
  { name: "6 of Diamonds", suit: "Diamonds", rank: "6", spriteIndex: 33 },
  { name: "7 of Diamonds", suit: "Diamonds", rank: "7", spriteIndex: 34 },
  { name: "8 of Diamonds", suit: "Diamonds", rank: "8", spriteIndex: 35 },
  { name: "9 of Diamonds", suit: "Diamonds", rank: "9", spriteIndex: 36 },
  { name: "10 of Diamonds", suit: "Diamonds", rank: "10", spriteIndex: 37 },
  { name: "Jack of Diamonds", suit: "Diamonds", rank: "Jack", spriteIndex: 38 },
  { name: "Queen of Diamonds", suit: "Diamonds", rank: "Queen", spriteIndex: 39 },
  { name: "King of Diamonds", suit: "Diamonds", rank: "King", spriteIndex: 40 },
  { name: "Ace of Clubs", suit: "Clubs", rank: "Ace", spriteIndex: 42 },
  { name: "2 of Clubs", suit: "Clubs", rank: "2", spriteIndex: 43 },
  { name: "3 of Clubs", suit: "Clubs", rank: "3", spriteIndex: 44 },
  { name: "4 of Clubs", suit: "Clubs", rank: "4", spriteIndex: 45 },
  { name: "5 of Clubs", suit: "Clubs", rank: "5", spriteIndex: 46 },
  { name: "6 of Clubs", suit: "Clubs", rank: "6", spriteIndex: 47 },
  { name: "7 of Clubs", suit: "Clubs", rank: "7", spriteIndex: 48 },
  { name: "8 of Clubs", suit: "Clubs", rank: "8", spriteIndex: 49 },
  { name: "9 of Clubs", suit: "Clubs", rank: "9", spriteIndex: 50 },
  { name: "10 of Clubs", suit: "Clubs", rank: "10", spriteIndex: 51 },
  { name: "Jack of Clubs", suit: "Clubs", rank: "Jack", spriteIndex: 52 },
  { name: "Queen of Clubs", suit: "Clubs", rank: "Queen", spriteIndex: 53 },
  { name: "King of Clubs", suit: "Clubs", rank: "King", spriteIndex: 54 },
  { name: "Ace of Spades", suit: "Spades", rank: "Ace", spriteIndex: 14 },
  { name: "2 of Spades", suit: "Spades", rank: "2", spriteIndex: 15 },
  { name: "3 of Spades", suit: "Spades", rank: "3", spriteIndex: 16 },
  { name: "4 of Spades", suit: "Spades", rank: "4", spriteIndex: 17 },
  { name: "5 of Spades", suit: "Spades", rank: "5", spriteIndex: 18 },
  { name: "6 of Spades", suit: "Spades", rank: "6", spriteIndex: 19 },
  { name: "7 of Spades", suit: "Spades", rank: "7", spriteIndex: 20 },
  { name: "8 of Spades", suit: "Spades", rank: "8", spriteIndex: 21 },
  { name: "9 of Spades", suit: "Spades", rank: "9", spriteIndex: 22 },
  { name: "10 of Spades", suit: "Spades", rank: "10", spriteIndex: 23 },
  { name: "Jack of Spades", suit: "Spades", rank: "Jack", spriteIndex: 24 },
  { name: "Queen of Spades", suit: "Spades", rank: "Queen", spriteIndex: 25 },
  { name: "King of Spades", suit: "Spades", rank: "King", spriteIndex: 26 }
];

const rankValues = {
  "2": 2, "3": 3, "4": 4, "5": 5,
  "6": 6, "7": 7, "8": 8, "9": 9,
  "10": 10, "Jack": 11, "Queen": 12,
  "King": 13, "Ace": 14
};

// Shulffle Deck Feature
shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



let currentRound = 1;
let deal1;
let deal2;
let deal3;
let deal4;
let deal5;
let deal6;
let betAmount;
let smallBlind;
let pot = 0;
const dealSound = new Audio("dealCard.mp3");
dealSound.volume = 0.8;
const playerBet = document.getElementById('playerBet');
const hand = document.getElementById('hand');
const startbtn = document.getElementById('startbtn');
const title = document.getElementById('title');
const body = document.getElementById('body');
const balance = document.getElementById('balance');
const foldbtn = document.getElementById('foldbtn');
const callbtn = document.getElementById('callbtn');
const betbtn = document.getElementById('betbtn');
const chatLog = document.getElementById('chatlog');
const jackpot = document.getElementById('jackpot');
const potDisplay = document.getElementById('pot');
const cardDisplay1 = document.getElementById('card1');
const cardDisplay2 = document.getElementById('card2');
const deckTop = document.getElementById('deckTop');
const flop1 = document.getElementById('flop1');
const flop2 = document.getElementById('flop2');
const flop3 = document.getElementById('flop3');
const turn = document.getElementById('turn');
const river = document.getElementById('river');
const playerHand1 = document.getElementById('deal1');
const playerHand2 = document.getElementById('deal2');


const players = [
  {
	name : 'Player 1',
    'Player Hand': { card1: undefined, card2: undefined, comCard1: undefined, comCard2: undefined, comCard3: undefined, comCard4: undefined, comCard5: undefined },
    'Big Blind': false,
    'Small Blind': false,
    'Current Balance': 500,
    folded: false,
    bet: 0
  },
  {
	name : 'Player 2',
    'Player Hand': { card1: deal1, card2: deal2, comCard1: undefined, comCard2: undefined, comCard3: undefined, comCard4: undefined, comCard5: undefined },
    'Big Blind': false,
    'Small Blind': false,
    'Current Balance': 500,
    folded: false,
    bet: 0
  },
  {
	name : 'Player 3',
    'Player Hand': { card1: deal1, card2: deal2, comCard1: undefined, comCard2: undefined, comCard3: undefined, comCard4: undefined, comCard5: undefined },
    'Big Blind': false,
    'Small Blind': false,
    'Current Balance': 500,
    folded: false,
    bet: 0
  },
  {
	name : 'Player 4',
    'Player Hand': { card1: deal1, card2: deal2, comCard1: undefined, comCard2: undefined, comCard3: undefined, comCard4: undefined, comCard5: undefined },
    'Big Blind': false,
    'Small Blind': false,
    'Current Balance': 500,
    folded: false,
    bet: 0
  },
  {
	name : 'Player 5',
    'Player Hand': { card1: deal1, card2: deal2, comCard1: undefined, comCard2: undefined, comCard3: undefined, comCard4: undefined, comCard5: undefined },
    'Big Blind': false,
    'Small Blind': false,
    'Current Balance': 500,
    folded: false,
    bet: 0
  },
  {
	name : 'Player 6',
    'Player Hand': { card1: deal1, card2: deal2, comCard1: undefined, comCard2: undefined, comCard3: undefined, comCard4: undefined, comCard5: undefined },
    'Big Blind': false,
    'Small Blind': false,
    'Current Balance': 500,
    folded: false,
    bet: 0
  },
  {
	name : 'Player 7',
    'Player Hand': { card1: deal1, card2: deal2, comCard1: undefined, comCard2: undefined, comCard3: undefined, comCard4: undefined, comCard5: undefined },
    'Big Blind': false,
    'Small Blind': false,
    'Current Balance': 500,
    folded: false,
    bet: 0
  },
  {
	name : 'Player 8',
    'Player Hand': { card1: deal1, card2: deal2, comCard1: undefined, comCard2: undefined, comCard3: undefined, comCard4: undefined, comCard5: undefined },
    'Big Blind': false,
    'Small Blind': false,
    'Current Balance': 500,
    folded: false,
    bet: 0
  },
]

const highestBet = Math.max(players[0].bet, players[1].bet, players[2].bet, players[3].bet, players[4].bet, players[5].bet, players[6].bet, players[7].bet);
const rng = Math.floor(Math.random() * players.length);
let bigBlind = players[rng].name;
(bigBlind === players[0].name) ? smallBlind = players[7].name : smallBlind = players[rng - 1].name

placedBet = (amount) => {
	(betbtn.innerText === 'Bet') ? logMessage(`${players[0].name} placed a bet of $${amount}`) : logMessage(`${players[0].name} raised by $${amount}`)
	players[0]['Current Balance'] -= amount;
	balance.textContent = '$' + players[0]['Current Balance'];
	players[0].bet += amount;
	pot += amount;
	potDisplay.textContent = `Current Pot: $${pot}`
	if (players[0].bet < Math.max(players[1].bet, players[2].bet, players[3].bet, players[4].bet, players[5].bet, players[6].bet, players[7].bet)) {
		betbtn.innerText = 'Raise'
		callbtn.innerText = 'Call'
	}
	if (players[0].bet >= highestBet) {
		betbtn.innerText = 'Bet'
		callbtn.innerText = 'Check'
	}
}
betPromptAgain = () => {
	betAmount = parseFloat(prompt('Please enter a number that you can afford!'));
	(!isNaN(betAmount) && betAmount <= players[0]['Current Balance']) ? placedBet(betAmount) : betPromptAgain()
}
betPrompt = () => {
	betAmount = parseFloat(prompt('Enter Bet Amount:'));
	(!isNaN(betAmount) && betAmount <= players[0]['Current Balance']) ? placedBet(betAmount) : betPromptAgain()
}

function dealCards() {
	players[0]['Player Hand'].card1 = mainDeck.pop()
	players[0]['Player Hand'].card2 = mainDeck.pop()
	players[1]['Player Hand'].card1 = mainDeck.pop()
	players[1]['Player Hand'].card2 = mainDeck.pop()
	players[2]['Player Hand'].card1 = mainDeck.pop()
	players[2]['Player Hand'].card2 = mainDeck.pop()
	players[3]['Player Hand'].card1 = mainDeck.pop()
	players[3]['Player Hand'].card2 = mainDeck.pop()
	players[4]['Player Hand'].card1 = mainDeck.pop()
	players[4]['Player Hand'].card2 = mainDeck.pop()
	players[5]['Player Hand'].card1 = mainDeck.pop()
	players[5]['Player Hand'].card2 = mainDeck.pop()
	players[6]['Player Hand'].card1 = mainDeck.pop()
	players[6]['Player Hand'].card2 = mainDeck.pop()
	players[7]['Player Hand'].card1 = mainDeck.pop()
	players[7]['Player Hand'].card2 = mainDeck.pop()
}

foldbtn.addEventListener('click', fold = () => {
	players[0].folded = true;
	logMessage(`${players[0].name} has folded`)
	foldbtn.removeEventListener('click', fold);
	foldbtn.style.backgroundColor = '#960000'
})

callbtn.addEventListener('click', () => {
	call(0)
})

betbtn.addEventListener('click', betPrompt)

startbtn.addEventListener('click', startGame = () => {
	title.classList.add('hide');
	startbtn.style.display = 'none';
	body.classList.add('table')
	balance.textContent = '$' + players[0]['Current Balance'];
	potDisplay.textContent = `Current Pot: $${pot}`
	foldbtn.classList.add('showfoldbtn');
	callbtn.classList.add('showcallbtn');
	betbtn.classList.add('showbetbtn');
	chatLog.classList.add('showchatlog');
	jackpot.classList.add('showjackpot');
	hand.classList.add('showhand');
	deckTop.classList.add('showDeckTop');
	shuffle(mainDeck)
	dealCards();
	showHand();
});

async function call(playerIndex) {
	if (callbtn.innerText === 'Call') {
		players[playerIndex]['Current Balance'] -= (Math.max(players[0].bet, players[1].bet, players[2].bet, players[3].bet, players[4].bet, players[5].bet, players[6].bet, players[7].bet) - players[playerIndex].bet);
		pot += Math.max(players[0].bet, players[1].bet, players[2].bet, players[3].bet, players[4].bet, players[5].bet, players[6].bet, players[7].bet) - players[playerIndex].bet
		players[playerIndex].bet = Math.max(players[0].bet, players[1].bet, players[2].bet, players[3].bet, players[4].bet, players[5].bet, players[6].bet, players[7].bet);
		balance.textContent = '$' + players[0]['Current Balance'];
		potDisplay.textContent = `Current Pot: $${pot}`
		logMessage(`${players[playerIndex].name} calls`);
	} else {
		logMessage(`${players[0].name} checks`)
	}
	if (players[0].bet < Math.max(players[1].bet, players[2].bet, players[3].bet, players[4].bet, players[5].bet, players[6].bet, players[7].bet)) {
		betbtn.innerText = 'Raise'
		callbtn.innerText = 'Call'
	}
	if (players[0].bet >= Math.max(players[1].bet, players[2].bet, players[3].bet, players[4].bet, players[5].bet, players[6].bet, players[7].bet)) {
		betbtn.innerText = 'Bet'
		callbtn.innerText = 'Check'
	}
	if (flop1.className === '') {
		dealCard(flop1, mainDeck.pop());
		await pause(0.5);
		dealCard(flop2, mainDeck.pop());
		await pause(0.5);
		dealCard(flop3, mainDeck.pop());
	} else if (turn.className === '') {
		dealCard(turn, mainDeck.pop());
	} else if (river.className === '') {
		dealCard(river, mainDeck.pop());
	}
}

function logMessage(message) {
	const chatMessage = document.createElement('div')
	chatMessage.innerText = message
	chatLog.appendChild(chatMessage)
	chatLog.scrollTop = chatLog.scrollHeight;
}

function flop() {
	const flop1 = mainDeck.pop()
}

logBigBlind = (curBlind) => {
	switch (curBlind) {
		case 'Player 1':
		players[0]['Current Balance'] -= 50;
		players[0].bet += 50;
		pot += 50;
		break;
		case 'Player 2':
		players[1]['Current Balance'] -= 50;
		players[1].bet += 50;
		pot += 50;
		break;
		case 'Player 3':
		players[2]['Current Balance'] -= 50;
		players[2].bet += 50;
		pot += 50;
		break;
		case 'Player 4':
		players[3]['Current Balance'] -= 50;
		players[3].bet += 50;
		pot += 50;
		break;
		case 'Player 5':
		players[4]['Current Balance'] -= 50;
		players[4].bet += 50;
		pot += 50;
		break;
		case 'Player 6':
		players[5]['Current Balance'] -= 50;
		players[5].bet += 50;
		pot += 50;
		break;
		case 'Player 7':
		players[6]['Current Balance'] -= 50;
		players[6].bet += 50;
		pot += 50;
		break;
		case 'Player 8':
		players[7]['Current Balance'] -= 50;
		players[7].bet += 50;
		pot += 50;
		break;
		default:
		console.log('Error 404');
		break;
	}
	logMessage(`${curBlind} is the big blind`);
	if (players[0].bet < Math.max(players[1].bet, players[2].bet, players[3].bet, players[4].bet, players[5].bet, players[6].bet, players[7].bet)) {
		betbtn.innerText = 'Raise'
		callbtn.innerText = 'Call'
	}
	if (players[0].bet >= Math.max(players[1].bet, players[2].bet, players[3].bet, players[4].bet, players[5].bet, players[6].bet, players[7].bet)) {
		betbtn.innerText = 'Bet'
		callbtn.innerText = 'Check'
	}
}

logBigBlind(bigBlind)

logSmallBlind = (curBlind) => {
	switch (curBlind) {
		case 'Player 1':
		players[0]['Current Balance'] -= 25;
		players[0].bet += 25;
		pot += 25;
		break;
		case 'Player 2':
		players[1]['Current Balance'] -= 25;
		players[1].bet += 25;
		pot += 25;
		break;
		case 'Player 3':
		players[2]['Current Balance'] -= 25;
		players[2].bet += 25;
		pot += 25;
		break;
		case 'Player 4':
		players[3]['Current Balance'] -= 25;
		players[3].bet += 25;
		pot += 25;
		break;
		case 'Player 5':
		players[4]['Current Balance'] -= 25;
		players[4].bet += 25;
		pot += 25;
		break;
		case 'Player 6':
		players[5]['Current Balance'] -= 25;
		players[5].bet += 25;
		pot += 25;
		break;
		case 'Player 7':
		players[6]['Current Balance'] -= 25;
		players[6].bet += 25;
		pot += 25;
		break;
		case 'Player 8':
		players[7]['Current Balance'] -= 25;
		players[7].bet += 25;
		pot += 25;
		break;
		default:
		console.log('Error 404');
		break;
	}
	logMessage(`${curBlind} is the small blind`);
	if (players[0].bet < Math.max(players[1].bet, players[2].bet, players[3].bet, players[4].bet, players[5].bet, players[6].bet, players[7].bet)) {
		betbtn.innerText = 'Raise'
		callbtn.innerText = 'Call'
	}
	if (players[0].bet >= Math.max(players[1].bet, players[2].bet, players[3].bet, players[4].bet, players[5].bet, players[6].bet, players[7].bet)) {
		betbtn.innerText = 'Bet'
		callbtn.innerText = 'Check'
	}
}

logSmallBlind(smallBlind)

resetGame = () => {
  currentRound++
  mainDeck = deck;
  shuffleDeck()
  dealCards()
  foldbtn.addEventListener('click', fold);
}
async function showHand() {
	card1.innerText = players[0]['Player Hand'].card1.name;
	card2.innerText = players[0]['Player Hand'].card2.name;
	if (players[0]['Player Hand'].card1.suit === 'Spades' || players[0]['Player Hand'].card1.suit === 'Clubs') {
		playerHand1.classList.remove('redSuit');
		playerHand1.classList.add('blackSuit');
	} else if (players[0]['Player Hand'].card1.suit === 'Hearts' || players[0]['Player Hand'].card1.suit === 'Diamonds') {
		playerHand1.classList.remove('blackSuit');
		playerHand1.classList.add('redSuit');
	}
	if (players[0]['Player Hand'].card2.suit === 'Spades' || players[0]['Player Hand'].card2.suit === 'Clubs') {
		playerHand2.classList.remove('redSuit');
		playerHand2.classList.add('blackSuit');
	} else if (players[0]['Player Hand'].card2.suit === 'Hearts' || players[0]['Player Hand'].card2.suit === 'Diamonds') {
		playerHand2.classList.remove('blackSuit');
		playerHand2.classList.add('redSuit');
	}
	hand.classList.remove("showHandFadeIn");
	void hand.offsetWidth;
	hand.classList.add("showHandFadeIn");
	dealCard(playerHand1, players[0]['Player Hand'].card1);
	playerHand1.style.setProperty('transform', 'rotate(-15deg)', 'important');
	await pause(0.5);
	dealCard(playerHand2, players[0]['Player Hand'].card2);
	playerHand2.style.setProperty('transform', 'rotate(15deg)', 'important');
}

function rankStartingHand(card1, card2) {
	const r1 = rankValues[card1.rank];
	const r2 = rankValues[card2.rank];
	let strength = 0;
	if (card1.rank === card2.rank) {
		strength = 3;
	} else if (card1.suit === card2.suit) {
		strength = 2;
	} else {
		strength = 1;
	}

	return {strength};
}

function dealCard(element, card) {
	
	if (element === flop1 || element === flop2 || element === flop3 || element === turn || element === river) {
		let targetProp = null;

		if (element === flop1) targetProp = "comCard1";
		if (element === flop2) targetProp = "comCard2";
		if (element === flop3) targetProp = "comCard3";
		if (element === turn)  targetProp = "comCard4";
		if (element === river) targetProp = "comCard5";

		players.forEach(player => {
			player["Player Hand"][targetProp] = card;
		});
	}
	
	
	
	element.style.visibility = 'visible';
	
    const cardWidth = 120;
    const cardHeight = 170;

    const columns = 14;

    const col = card.spriteIndex % columns;
    const row = Math.floor(card.spriteIndex / columns);

    const x = -(col * cardWidth);
    const y = -(row * cardHeight);

    element.style.backgroundPosition = `${x}px ${y}px`;
    element.classList.add("card");
	
	requestAnimationFrame(() => {

        const deck = document.querySelector(".showDeckTop");
        const deckRect = deck.getBoundingClientRect();
        const cardRect = element.getBoundingClientRect();

        const startX = deckRect.left - cardRect.left;
        const startY = deckRect.top - cardRect.top;

        element.style.setProperty("--deal-transform", `translate(${startX}px, ${startY}px) scale(0.3)`);

        element.classList.remove("deal");
        void element.offsetWidth;
		
		playDealSound();
		
        element.classList.add("deal");
		
    });
}

function pause(time) {
	return new Promise(resolve => setTimeout(resolve, time * 1000))
}

function playDealSound() {
    dealSound.currentTime = 0; 
    dealSound.playbackRate = 0.95 + Math.random() * 0.1;
    dealSound.play();
}

function evaluateHand(cards) {
    cards = cards
        .map(c => ({ rank: c.rank, suit: c.suit }))
        .sort((a, b) => b.rank - a.rank);

    const ranks = {};
    const suits = {};

    // Count occurrences
    for (const c of cards) {
        ranks[c.rank] = (ranks[c.rank] || 0) + 1;
        suits[c.suit] = (suits[c.suit] || 0) + 1;
    }

    // Detect flush
    let flushSuit = null;
    for (let s in suits) {
        if (suits[s] >= 5) flushSuit = s;
    }

    // Get flush cards
    const flushCards = flushSuit ? cards.filter(c => c.suit === flushSuit) : [];

    // Detect straight (including wheel A-5)
    function getStraight(arr) {
        let uniq = [...new Set(arr.map(c => c.rank))];
        uniq.sort((a,b)=>b-a);

        // Wheel straight (A-5)
        if (uniq.includes(14)) uniq.push(1);

        let run = 1;
        for (let i = 1; i < uniq.length; i++) {
            if (uniq[i] === uniq[i-1] - 1) {
                run++;
                if (run >= 5) return uniq[i-1] + 4;
            } else {
                run = 1;
            }
        }
        return null;
    }

    const straightHigh = getStraight(cards);
    const straightFlushHigh = flushSuit ? getStraight(flushCards) : null;

    // 10: Royal Flush / 9: Straight Flush
    if (straightFlushHigh) {
        // Royal (Ace-high)
        if (straightFlushHigh === 14) {
            return { rank: 10, score: [10, 14] };
        }
        return { rank: 9, score: [9, straightFlushHigh] };
    }

    // Count rank groups
    const groups = Object.entries(ranks)
        .map(([rank, count]) => ({ rank: Number(rank), count }))
        .sort((a, b) => b.count - a.count || b.rank - a.rank);

    const top = groups[0];
    const second = groups[1];

    // 8: Four of a Kind
    if (top.count === 4) {
        const kicker = cards.find(c => c.rank !== top.rank).rank;
        return { rank: 8, score: [8, top.rank, kicker] };
    }

    // 7: Full House
    if (top.count === 3 && second.count >= 2) {
        return { rank: 7, score: [7, top.rank, second.rank] };
    }

    // 6: Flush
    if (flushCards.length >= 5) {
        const five = flushCards.slice(0, 5).map(c => c.rank);
        return { rank: 6, score: [6, ...five] };
    }

    // 5: Straight
    if (straightHigh) {
        return { rank: 5, score: [5, straightHigh] };
    }

    // 4: Three of a Kind
    if (top.count === 3) {
        const kickers = cards.filter(c => c.rank !== top.rank)
                             .slice(0, 2)
                             .map(c => c.rank);
        return { rank: 4, score: [4, top.rank, ...kickers] };
    }

    // 3: Two Pair
    if (top.count === 2 && second.count === 2) {
        const kicker = cards.find(c => c.rank !== top.rank && c.rank !== second.rank).rank;
        return { rank: 3, score: [3, top.rank, second.rank, kicker] };
    }

    // 2: One Pair
    if (top.count === 2) {
        const kickers = cards.filter(c => c.rank !== top.rank)
                             .slice(0, 3)
                             .map(c => c.rank);
        return { rank: 2, score: [2, top.rank, ...kickers] };
    }

    // 1: High Card
    const high = cards.slice(0, 5).map(c => c.rank);
    return { rank: 1, score: [1, ...high] };
}
