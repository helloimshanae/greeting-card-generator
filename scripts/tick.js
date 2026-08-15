let count = 0;
let speed = 2000;
let timer = setInterval(tick, speed);


function tick() {
	count = count + 1;
	console.log("Tick " + count);
	
	if (count === 10) {
		clearInterval(timer);
		console.log("Timer Stops");
	}
}

