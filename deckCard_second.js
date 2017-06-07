var Deck = function Deck(){
  this.deck = [];
  this.reset();
  // shuffle
  // reset
  // deal
}
// this is function/method of constructor of Desk
Deck.prototype.reset = function(){
      var suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
      var pips = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];

      this.deck = [];

      for(var suit in suits){
        for(var pip in pips){
          this.deck.push(pips[pip] + ' of ' + suits[suit])
        }
      }
      return this;
}

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
  return this;
}

Deck.prototype.deal =function(){
  return this.deck.pop();
}

var Player = function Player(name){
        this.name = name;
        this.hand = [];
}
Player.prototype.draw = function(deck){
  this.hand.push(deck.deal());
  return this;
}
Player.prototype.discard = function(){
  this.hand.pop();
  return this;
}


var deck1 = new Deck();
// deck1.shuffle().shuffle().reset().shuffle();
// console.log(deck1);
var player1 = new Player('Brendan');
console.log(player1.draw(deck1).hand);
