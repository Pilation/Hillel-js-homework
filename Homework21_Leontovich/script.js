function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

let rgb = (item) => `rgb(${getRandomInt(item)},${getRandomInt(item)},${getRandomInt(item)})`;
let leftPos = () => {
	let x = getRandomInt(window.innerWidth);
	if (x <= (window.innerWidth - jumper.offsetWidth)) {
		return x;
	} else {
		return (window.innerWidth - jumper.offsetWidth);
	}
}
let topPos = () => {
	let x = getRandomInt(window.innerHeight);
	if (x <= (window.innerHeight - jumper.offsetHeight)) {
		return x;
	} else {
		return (window.innerHeight - jumper.offsetHeight);
	}
}

let jumper = document.querySelector(`.block`);

setInterval(() => {
	jumper.style.backgroundColor = `${rgb(255)}`;
	jumper.style.left = `${leftPos()}px`
	jumper.style.top = `${topPos()}px`
	console.log(`works`)
}, 500);