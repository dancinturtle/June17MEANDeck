'use strict';

class Deck {
	constructor() {
		var suits = ["Spades","Hearts","Diamonds","Clubs"];
		var ranks = ["2","3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];
		this.deck = [];
		this.createDeck = function() {
			for (var i = 0; i < suits.length; i++) {
				for (var j = 0; j < ranks.length; j++) {
					this.deck.push(ranks[j]+suits[i]);
				}
			}
		}
	}
}

// create a prototype method for our Deck class to shuffle
Deck.prototype.shuffle = function() {
	var m = this.deck.length, t, i;
	// While there remain elements to shuffle…
	while (m) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);
		// And swap it with the current element.
		t = this.deck[m];
		this.deck[m] = this.deck[i];
		this.deck[i] = t;
	}
	return this.deck;
}
// create a prototype method for our Deck class to reset deck
Deck.prototype.reset = function() {
	this.deck = [];
	this.createDeck();
}
// create a prototype method for our Deck class to deal a random card
Deck.prototype.deal = function(num) {
	var dealtCard = [];
	for (var i = 0; i < num; i++) {
		dealtCard.push(this.deck.pop());
	}
	return dealtCard;
}

class Player {
	constructor(name, hand) {
		this.name = name;
		this.hand = hand || []; // hand is an array of cards
	}
}

Player.prototype.discard = function(num) {
	this.hand.splice(num,1);
}

Player.prototype.takeCard = function(deck) {
	var takenCard = deck.deal(1)[0];
	this.hand.push(takenCard);
}



// BLACKJACK GAME EXAMPLE//
// instantiate a new deck
var deck = new Deck();
// run our "createDeck" method to generate a deck (this will be deck.deck)
deck.createDeck();
// create players
var player1 = new Player("Kris");
var player2 = new Player("Jerome");
var player3 = new Player("Coco");
// create dealer
var dealer = new Player("Dealer Joe");
// dealer shuffles deck
deck.shuffle();
// deal out cards, one to each player one at a time
player1.takeCard(deck);
player2.takeCard(deck);
player3.takeCard(deck);
dealer.takeCard(deck);
// since we deal in a clockwise manner, second card handout:
player1.takeCard(deck);
player2.takeCard(deck);
player3.takeCard(deck);
dealer.takeCard(deck);
// player 1 checks hand
console.log(player1.hand);
// player 1 checks dealer hand (only sees one card)
console.log("Dealer shows:",dealer.hand[0]);
// player 1 checks hands of other players
console.log(player2.name,"shows",player2.hand[0]);
console.log(player3.name,"shows",player3.hand[0]);
// player 1 decides to take a card
player1.takeCard(deck);
// player 1 checks hand
console.log(player1.hand);
//...etc


// END BLACKJACK GAME //






// // create players
// var person1 = new Player("Kris", deck.deal(5));
// var person2 = new Player("Jerome", deck.deal(5));

// // console.log(person1.name,"has:",person1.hand);
// // console.log(person2.name,"has:",person2.hand);

// console.log(person1.hand);
// person1.discard();
// console.log(person1.hand);
// person1.takeCard(deck);
// console.log(person1.hand);
// console.log(deck.deck);

// // console.log(deck.shuffle());
// deck.shuffle();
// // console.log(deck.deck);

// deck.deal();

// console.log(deck.deck);

// deck.reset();
// console.log(deck.deck);












