function Deck(){
  this.cardDeck = [];
}

Deck.prototype.createDeck = function () {
  var number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  var suite = ["Spade", "Club", "Diamond", "Heart"];
  for(var i = 0; i<suite.length; i++){
    for(var j = 0; j<number.length; j++){
      var card = new Card(suite[i], number[j]);
      if(number[j] == "A"){
        card.value = 1;
      }else if (number[j] == "J" || number[j] == "Q" || number[j] == "K") {
        card.value = 10;
      }else{
        card.value = parseInt(number[j]);
      }
      this.cardDeck.push(card);
    }
  }
  return this;
};

Deck.prototype.shuffle = function () {
  for(var i = 0; i<25; i++){
    var rand = Math.floor(Math.random() * 51)+1;
    var temp = this.cardDeck[i];
    this.cardDeck[i]= this.cardDeck[rand];
    this.cardDeck[rand] = temp;
  }
  return this;
};

Deck.prototype.Deal = function() {
  return this.cardDeck.pop();
};

Deck.prototype.Reset = function () {
  this.cardDeck = [];
  this.createDeck();
  return deck;
};


function Card(suite, number) {
  this.number = number;
  this.suite = suite;
  this.value = 0;
}

function Player(name){
this.name = name;
this.hand = [];
}


Player.prototype.draw = function (deck) {
  this.hand.push(deck.Deal());
  return this;
};

Player.prototype.discard = function () {
  return this.hand.pop();
};

function whoWins(){
  if(dealer.hand[0].value + dealer.hand[1].value > 17){
    var playerHand = 0;
    var dealerHand = 0;
    for(var i = 0 ;i < bob.hand.length; i++){
      playerHand += bob.hand[i];
    }
    for(var j = 0 ;j < dealer.hand.length; j++){
      dealerHand += dealer.hand[j];
    }
    if(playerHand > dealerHand){
      console.log("Player Won!");
    }else{
      console.log("Dealer won!");
    }
  }
}

function blackJack(){
  var deck = new Deck();
  deck.createDeck();
  deck.shuffle();
  var bob = new Player("Bob");
  bob.hand.push(deck.Deal());
  bob.hand.push(deck.Deal());
  console.log(bob.hand);
  var dealer = new Player("Dealer");
  dealer.hand.push(deck.Deal());
  dealer.hand.push(deck.Deal());
  console.log(dealer.hand);
  function playerHand() {
    var playerHand = 0;
    for(var i = 0 ;i < bob.hand.length; i++){
      playerHand += bob.hand[i].value;
    }
    return playerHand;
  }

  function dealerHand() {
    var dealerHand = 0;
    for(var j = 0 ;j < dealer.hand.length; j++){
      dealerHand += dealer.hand[j].value;
    }
    return dealerHand;
  }
  function whoWins(){
    var playerHand = 0;
    for(var i = 0 ;i < bob.hand.length; i++){
      playerHand += bob.hand[i].value;
    }
    var dealerHand = 0;
    for(var j = 0 ;j < dealer.hand.length; j++){
      dealerHand += dealer.hand[j].value;
    }
    // var playerhand = playerhand();
    // var dealerHand = dealerHand();
    console.log(playerHand, "Player Hand");
    console.log(dealerHand, "Dealer Hand");
    if(playerHand > 21 && dealerHand > 21){
      console.log("Draw");
    }
    else if(playerHand > 21){
      console.log("Dealer Wins");
    }
    else if(dealerHand > 21){
      console.log("Player Wins!!");
    }
    else if(playerHand == dealerHand){
      console.log("Draw!");
    }
    else if (playerHand > dealerHand) {
      console.log("Player Wins!!");
    }
    else if (dealerHand > playerHand) {
      console.log("Dealer Wins!!");
    }
  }
  var readline = require('readline');
  var rl = readline.createInterface(process.stdin, process.stdout);
  rl.setPrompt('stay/hit> ');
  rl.prompt();
  rl.on('line', function(line) {
      if (line === "hit"){
      bob.hand.push(deck.Deal());
      console.log(bob.hand , "after prompt");
    } else if(line === "stay"){
      console.log(bob.hand , "after prompt");
      var d = dealerHand();
      console.log(d, "Dealer d");
      while(d <= 17){
        dealer.hand.push(deck.Deal());
        d = dealerHand();
      }
      console.log(d);
      whoWins();
      process.exit(0);
      rl.close();
    }
  }).on('close',function(){
      process.exit(0);
  });
}

blackJack();



// var deck = new Deck();
// deck.createDeck();
// console.log(deck.Deal());
// deck.shuffle();
// var bob = new Player("Bob");
// console.log(bob.name);
// console.log(bob.draw(deck).hand);
// console.log(bob.discard());
// console.log(deck.cardDeck.length);
// var newdeck = deck.Reset();
// console.log(newdeck.cardDeck.length);
