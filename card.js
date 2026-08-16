// HTML elements
let nameInput = document.getElementById("name-input");
let adjectiveInput = document.getElementById("adjective-input");
let nounInput = document.getElementById("noun-input");
let placeInput = document.getElementById("place-input");
let foodInput = document.getElementById("food-input");
let makeButton = document.getElementById("make-button");
let cardText = document.getElementById("card-text");
let closingText = document.getElementById("closing-text");
let surpriseButton = document.getElementById("surprise-button");
let cardSection = document.getElementById("card-section");
let resetButton = document.getElementById("reset-button");
let bonusLine = document.getElementById("bonus-line");

// define closing messages
let closings = [
	"Meow for now!",
	"Keep Shining!",
	"Love, Wubzy",
	"Stay Pawwsome!",
	"Sending Good Vibes!",
	"Keep Being Amazing!",
];

// define cards made
let cardsMade = 0;

// define random closing message
function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

// define card
function makeCard() {
	cardSection.hidden = false;
	let friendName = nameInput.value;
	let adjective = adjectiveInput.value; 
	let noun = nounInput.value;
	let place = placeInput.value;
	let food = foodInput.value;
	
// display card message
	cardText.textContent = 
		"Meow " + friendName + ",\n" +
		"Wubzy thinks you are " + adjective + " enough to take on something wonderful.\n" +
		"May your next adventure take you all the way to the " + place + ", with plenty of " + noun + " along the way.\n" +
		"And of course, don't forget to celebrate with some " + food + " !\n" +
		"Keep being amazing.";
	
		
// choose a random closing message
	closingText.textContent = 
	  closings[randomNumber(0, closings.length - 1)];
	  
	cardsMade = cardsMade + 1;
	
	if (cardsMade >= 5) {
		bonusLine.hidden = false;
	}
}

// define surprise button
function surpriseMe() {
	let index = randomNumber(0, closings.length - 1);
	closingText.textContent = closings[index];
}

function resetGenerator() {
	nameInput.value = "";
	adjectiveInput.value = "";
	nounInput.value = "";
	placeInput.value = "";
	foodInput.value = "";
	cardSection.hidden = true;
}

// define buttons
makeButton.addEventListener("click", makeCard);
surpriseButton.addEventListener("click", surpriseMe);
resetButton.addEventListener("click", resetGenerator);