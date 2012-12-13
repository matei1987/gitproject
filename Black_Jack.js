/* herp derp */

function Hand(){
	var hand =[];
	this.getHand = function(){
		return hand;
	};
	this.score = function(){
		var sum =0;
		var ace =0;
		for (var i = 0; i<hand.length; i++){
			sum+=hand[i].getValue();
			if (hand[i].getValue()===11) ace++;
			/*for (var j=0;j<hand.length;j++){
			if (sum>21&&hand[j].getNumber()==="Ace"){
				sum-=10;}*/
			}
		while (sum>21&&ace>0){
			sum-=10;
			ace--;
		}
			
		
		
		return sum;
	};
	this.printHand = function(){
		var print ="";
		for (var i = 0; i<hand.length; i++){
			if (i===(hand.length)-1) print += hand[i].getNumber() + " of "+hand[i].getSuit()+".";
			else print += hand[i].getNumber() + " of "+hand[i].getSuit()+", ";
			
		}
		return print;
	};
	this.hitMe = function(){
		hand.push(deal());
	};
	hand.push(deal());
	hand.push(deal()); 
}

function Card(s,n){
	var suit = s;
	var num = n;
	
	this.getNumber = function(){
		if (num===1) return "Ace";
		else if(num===11) return "Jack";
		else if(num===12) return "Queen";
		else if(num===13) return "King";
		else return num;
	};
	this.getSuit = function(){
		return suit;
	};
	this.getValue = function(){
		return num>10&&num<14?10:num===1?11:num;
	};
	
}
var deal = function(){
		var csuit = Math.floor(Math.random()*4+1);
		if (csuit===1) csuit="Spades";
		else if (csuit===2) csuit="Diamonds";
		else if (csuit===3) csuit="Hearts";
		else csuit="Clubs";
		var cnum = Math.floor(Math.random()*13+1);
		return new Card(csuit,cnum);
		
	};

var playAsDealer = function(){
	var hand = new Hand();
	while (hand.score()<17) {hand.hitMe();}
	return hand;
};

var playAsUser = function(){
	var hand = new Hand();
	while (confirm("You have "+ hand.printHand()+" ("+hand.score()+")\n")){
		hand.hitMe();
	}
	return hand;
};
//Win conditions are not right
var declareWinner = function(userHand,dealerHand){
	if(userHand.score()>21) console.log ("You lose!");
	else if (userHand.score()===dealerHand.score()) console.log ("You tied!");
	else if (userHand.score()>dealerHand.score()) console.log("You win!");
	else console.log("You lose!");
};
//figure out how to pop up blackjack
var playGame = function(){
	var dealer = (playAsDealer());
	console.log("Dealer has: "+dealer.printHand()+"("+dealer.score()+")");
	var user = playAsUser();
	console.log("You have: " + user.printHand()+" ("+user.score()+")");
	declareWinner(user,dealer)
	//console.out(declareWinner(user.getHand(),dealer.getHand()));
	
	
};

playGame();

/*function Play()
{
	var hand1 = new Hand();

console.log(hand1.printHand());
if (hand1.score()===21) console.log("BLACKJACK!!!!");
else console.log(hand1.score());

while (hand1.score()<=16){
hand1.hitMe();
console.log(hand1.printHand());
if (hand1.score()===21) console.log("BLACKJACK!!!! :)");
else if (hand1.score()>21) console.log("BUST :(");
else console.log(hand1.score());
}
}

Play();
*/