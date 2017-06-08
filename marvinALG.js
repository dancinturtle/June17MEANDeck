
function deckConstructor() {
    var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    var number = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    var mydeck = [];

   this.create = function () {
        for (var i = 0; i < suits.length; i++) {
            for (var j = 0; j < number.length; j++) {
                mydeck.push(suits[i] + ' ' + number[j]);
            }
        }
    }
    this.create();

   this.getDeck = function () {
        return mydeck;
    }

   this.setDeck = function (array) {
        this.mydeck = array;
    }

}

deckConstructor.prototype.shuffle = function () {
    var array = this.getDeck();
    var currentIndex = this.length, temporaryValue, randomIndex;

   while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    this.setDeck(array);
    return this;
}

deckConstructor.prototype.reset = function() {
    this.deck = [];
    this.deck.create();
    return this;

}

deckConstructor.prototype.deal = function () {
    return this;

}

var myDeck = new deckConstructor();
console.log(myDeck.getDeck());
myDeck.shuffle();
console.log(myDeck.getDeck());
//myDeck.reset();
//myDeck.reset(myDeck);
//console.log(myDeck.getDeck());
