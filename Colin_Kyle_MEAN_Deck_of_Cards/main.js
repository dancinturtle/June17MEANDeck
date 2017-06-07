class Card {
	constructor(value, suit) {
		this.value = value
		this.suit = suit
	}
}

class Deck {

	constructor() {
		this.cards = []
		var values = ["A", 2, 3, 4, 5, 6, 7, 8.0, 9, 10, "J", "Q", "K"]
		var suits = ["Spades", "Hearts", "Clubs", "Diamonds"]
		for (var i in values) {
			for (var j in suits) {
				var card = new Card(values[i], suits[j])
				this.cards.push(card)	
			}
		}
	}

	reset() {
		var newDeck = new Deck()
		this.cards = newDeck.cards
	}

	shuffle() {
		
		for(var i in this.cards) {
			var random = Math.floor(Math.random()*this.cards.length)
			console.log(random)
			var temp = this.cards[i]
			this.cards[i] = this.cards[random]
			this.cards[random] = temp
		}
	}

	dealRandom() {
		var random = Math.floor(Math.random()*this.cards.length)
		var randomCard = this.cards[random]
		for(var i=random; i<this.cards.length-1; i++) {
			this.cards[i] = this.cards[i+1]
		}
		this.cards.pop()
		return randomCard
	}
	
}

class Player {
	constructor(name) {
		this.name = name
		this.hand = []
	}
	dealHand(num, deck) {
		for(var i=1; i<=num; i++){
			this.hand.push(deck.dealRandom())
		}
		return this.hand
	}
	takeCard(deck) {
		this.hand.push(deck.dealRandom())
	}
	discard(value,suit) {
		for(var i=0; i<this.hand.length; i++) {
			if(this.hand[i].value == value && this.hand[i].suit == suit) {
				for(var j=i; j<this.hand.length; j++) {
					this.hand[j] = this.hand[j+1]
				}
				this.hand.pop()
			}
		}
	}

	displayTotal() {
		var total = 0
		for (var i=0; i < this.hand.length; i++){ 
			switch (this.hand[i].value) {
					case "A":
						total += 1
						break;
					case "J":
						total += 10
						break;
					case "Q":
						total += 10
						break;
					case "K":
						total += 10
						break;
					default:
						total += this.hand[i].value
				}
		}
		return total
	}

	displayHand() {
		var str = ""
		var total = this.displayTotal(this.hand)
		for(var i=0; i<this.hand.length; i++) {
			if (i < this.hand.length-1) {
				str += this.hand[i].value + ", "
			} else {
				str += this.hand[i].value
			}

		}
		return str + " (Total: " + total + ")"
	}

	dealerHit(deck) {
		while(this.displayTotal() < 17) {

			this.takeCard(deck)
			console.log("Dealer hits.. (Total: " + this.displayTotal() + ")")
			

		}
		
	}

	playerHit() {
		this.takeCard()
		this.displayHand()
	}
}

var deck = new Deck()
var player = new Player("Kyle")
var dealer = new Player("Dealer")
player.takeCard(deck)
dealer.takeCard(deck)
player.takeCard(deck)
dealer.takeCard(deck)

console.log("Your hand: " + player.hand[0].value + ", " + player.hand[1].value)
console.log("Dealer's hand: " + dealer.hand[0].value + " *")


var prompt = require('prompt');

prompt.start();

prompt.get(['Hit or stay?'], function (err, result) {
    if (err) { return onErr(err); }
    switch (result['Hit or stay?']) {
    	case 'hit':
    		console.log("You hit.")
    		player.takeCard(deck)
    		console.log("Your hand: " + player.displayHand())
			console.log("Dealer's hand: " + dealer.hand[0].value + " *")
    		break;
    	case 'stay':
    		console.log("You stayed.")
    		
    		dealer.dealerHit(deck)

    		console.log("Your hand: " + player.displayHand())
			console.log("Dealer's hand: " + dealer.displayHand())
    		break;
    	default:
    		return anything
    		break;
    }
  });

  function onErr(err) {
    console.log(err);
    return 1;
  }

 

