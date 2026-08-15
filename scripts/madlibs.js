// ask & store the following information
let name = prompt("\nYour Name:");
let adjective = prompt("Adjective:");
let noun = prompt("Noun:");
let place = prompt("Favorite Place:");
let food = prompt("Favorite Food:");

// define style of card
let style = prompt("Fancy or Silly?");

// define fancy closing messages
let fancyClosings = [
	"Meow for now.",
	"Sincerely, the cat",
	"Love, Wubzy",
];
// define silly closing messages
let sillyClosings = [
	"Stay Pawwsome",
	"Don't forget the snackies",
	"Stay Chaotic",
];

// define random closing message
function randomNumber(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

// define first card
function makeCard() {
	  // choose greeting based on card style
  if (style.toLowerCase() === "fancy") {
	console.log("\nMeow " + name + ",");
} else {
	console.log("\nYo " + name + "!");
}
  
// choose closing list based on card style
  let closingList;
  
  if (style.toLowerCase() === "fancy") {
	closingList = fancyClosings;
} else {
	closingList = sillyClosings;
}
// greeting card contents
  console.log("\nWubzy has officially declared you " + adjective + " enough to be responsible for the " + noun + "!");
  console.log("You must report to the " + place + " for your first day. Travel arrangements will be emailed shortly.");
  console.log("Wubzy has also approved your emergency supply of " + food + " to celebrate!");
  console.log("DO NOT disappoint the cat.\n");
  
// choose a random closing message
  let index = randomNumber(0, closingList.length - 1);
  console.log(closingList[index]);
}

// define second card
function makeThankYouCard() {
	console.log("\nThank you " + name + "!");
	console.log("Wubzy cant wait to eat " + food + " with you.")
}

// call first card
makeCard();

// call second card
makeThankYouCard();

