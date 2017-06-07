function CardConstructor(value, name, suit){
    this.value = value;
    this.name = name;
    this.suit = suit;
}

function Deck(){
    names = ['A','2','3'];
    suits = ['Hearts','Diamonds'];
    deck = [];
    for(var s = 0; s < suits.length; s++){
        for(var n = 0; n < names.length; n++){
            deck.push(new CardConstructor(n+1, names[n], suits[s]));
        }
    }
    deck = shuffle(deck);
    return deck;
}

function shuffle(array){
    var m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
}




function DeckConstructor(cards){
    /*this.names = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
    this.suits = ['Hearts','Diamonds','Spades','Clubs'];*/
    this.cards = cards;
    
}

DeckConstructor.prototype.deal = function(){
    if(this.cards.length != 0){
        var card = this.cards.pop();
        return card;
    }else{
        /*console.log('Deck is empty.');*/
        return null;
    }
}

DeckConstructor.prototype.reset = function(){
    this.cards = Deck();
}




function PlayerConstructor(name){
    this.name = name;
    this.hand = [];
}


PlayerConstructor.prototype.takecard= function(card){
    this.hand.push(card);
    return this;
}


PlayerConstructor.prototype.discard = function(){
    if(this.hand.length > 0 ){
        this.hand.pop();
    }else{
        console.log("No more card.");
    }
    return this;
}


var deck = new DeckConstructor(Deck());


var p1 = new PlayerConstructor('Aaron');
var p2 = new PlayerConstructor('Tony');
p1.takecard(deck.deal()).takecard(deck.deal());
p2.takecard(deck.deal()).takecard(deck.deal());

console.log(p1.hand);
console.log(p2.hand);