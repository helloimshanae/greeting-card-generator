// 
let nameInput = document.getElementById("name-input");
let adjectiveInput = document.getElementById("adjective-input");
let nounInput = document.getElementById("noun-input");
let placeInput = document.getElementById("place-input");
let foodInput = document.getElementById("food-input");
let makeButton = document.getElementById("make-button");
let cardText = document.getElementById("card-text");
let closingText = document.getElementById("closing-text");

// define closing messages
let closings = [
	"Meow for now.",
	"Sincerely, the cat",
	"Love, Wubzy",
	"Stay Pawwsome",
	"Don't forget the snackies",
	"Stay Chaotic",
];

// define random closing message
function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

// define card
function makeCard() {
	let friendName = nameInput.value;
	let adjective = adjectiveInput.value; 
	let noun = nounInput.value;
	let place = placeInput.value;
	let food = foodInput.value;
	
	cardText.textContent = 
		"Meow " + friendName + ",\n" +
		"Wubzy has officially declared you " + adjective + " enough to be responsible for the " + noun + "!\n" +
		"You must report to the " + place + " for your first day. Travel arrangements will be emailed shortly.\n" +
		"Wubzy has also approved your emergency supply of " + food + " to celebrate!\n" +
		"DO NOT disappoint the cat.";
		
		
// choose a random closing message
	closingText.textContent = 
	  closings[randomNumber(0, closings.length - 1)]
}

makeButton.addEventListener("click", makeCard);