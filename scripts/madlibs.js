// ask & store the following information
let name = prompt("Your Name:");
let adjective = prompt("Adjective:");
let noun = prompt("Noun:");
let place = prompt("Favorite Place:");
let food = prompt("Favorite Food:");

// define first card
function makeCard() {
  console.log("\nMeow " + name + ",");
  console.log("Wubzy has officially declared you " + adjective + " enough to be responsible for the " + noun + "!");
  console.log("You must report to " + place + " for your first day. Travel arrangements will be emailed shortly.");
  console.log("Wubzy has also approved your emergency supply of " + food + " to celebrate!");
  console.log("DO NOT disappoint the cat.\n");
}

// define second card
function makeThankYouCard() {
	console.log("Thank you " + name + "!");
	console.log("Wubzy cant wait to eat " + food + " with you.")
}

// call first card
makeCard();

// call second card
makeThankYouCard();

