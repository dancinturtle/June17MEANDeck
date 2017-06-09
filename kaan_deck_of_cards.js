// deck class
function Deck() {
	var suits = ['hearts','spades','diamonds','clubs'];
	var numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

	this.reset = function() {
		this.cards = [];
		for (i = 0; i < suits.length; i++) {
			for (j = 0; j < numbers.length; j++) {
				this.cards.push([suits[i],numbers[j]]);
			}
		}
		return this.cards;
	}

	this.cards = [];
	for (i = 0; i < suits.length; i++) {
		for (j = 0; j < numbers.length; j++) {
			this.cards.push([suits[i],numbers[j]]);
		}
	}
}

// shuffles the cards using the given algorithm
Deck.prototype.shuffle = function() {
	var m = this.cards.length;
	var t;
	var i;

	// While there remain elements to shuffle…
	while (m) {
		// Pick a remaining element…
		i = Math.floor(Math.random() * m--);

		// And swap it with the current element.
		t = this.cards[m];
		this.cards[m] = this.cards[i];
		this.cards[i] = t;
	}

	return this.cards;
}

// deals random card
Deck.prototype.deal = function() {
	var i = Math.floor(Math.random() * this.cards.length);
	var removedCard = this.cards[i];
	this.cards.splice(i,1);
	console.log('Dealt ' + removedCard[1] + ' of ' + removedCard[0]);
	return removedCard;
}

// player class
function Player(name) {
	this.name = name;
	this.hand = [];
}

// takes card from deck
Player.prototype.takeCard = function(deck) {
	this.hand.push( deck.deal());
	return this;
}

// discards the card at index 0
Player.prototype.discard = function(deck) {
	this.hand.pop(0);
	return this;
}

d1 = new Deck();
// shuffle cards
d1.shuffle();
console.log(d1.cards);
// reset cards
d1.reset();
console.log(d1.cards);

// create new player
p1 = new Player('Kaan');
// take 3 cards
p1.takeCard(d1).takeCard(d1).takeCard(d1);

// show hand
console.log("Cards in hand:");
console.log(p1.hand);

// discard two cards
p1.discard().discard();

// show hand
console.log("Cards in hand:");
console.log(p1.hand);
