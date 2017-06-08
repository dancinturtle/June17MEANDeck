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
    var currentIndex = this.getDeck().length, temporaryValue, randomIndex;

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
    return deckConstructor();

}

deckConstructor.prototype.deal = function (cardPosition) {
    if(this.getDeck().length != 0){
        var returnCard = this.getDeck().pop();
        return returnCard
    }
}

function playerConstructor(name) {
    this.name = name;
    this.hand = []; 

}
playerConstructor.prototype.takeCard = function(card){
    this.hand.push(card);
    return this;   
}
playerConstructor.prototype.discard = function(){
    if(this.hand.length != 0){
        this.hand.pop();
    }
    return this;   
}
var deck = new deckConstructor();

var player1 = new playerConstructor('Marc');
player1.takeCard(deck.deal());
console.log(player1);