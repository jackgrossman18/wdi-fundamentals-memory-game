var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var flipCard = function(cardId) {
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
};
flipCard(0);
flipCard(2);

	//var cardOne = cards[0];
	//cardsInPlay.push(cardOne);
	//console.log("User flipped " + cardOne);
	//var cardTwo = cards[2];
	//cardsInPlay.push(cardTwo);
	//console.log("User flipped " + cardTwo);
	//if (cardsInPlay.length === 2) {
		//cardsInPlay[0] === cardsInPlay[1]
		//alert("You found a match!");
	//}else {
		//alert("Sorry try again.");
	//};


