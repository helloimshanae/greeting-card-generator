let name = prompt("Your Name:");
let adjective = prompt("Adjective:");
let noun = prompt("Noun:");

function makeCard() {
  console.log("Meow " + name + ",");
  console.log("Wubzy has officially declared you " + adjective + " enough to be responsible for the " + noun + "!");
  console.log("DO NOT disappoint the cat.");
}

makeCard();