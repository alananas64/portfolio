function displayElements(targetEl) {
	const fadeEls = targetEl.querySelectorAll(".fade");
	const unhide = (i) => {
		if (i == fadeEls.length) return;
		fadeEls[i].style.opacity = "1";
		fadeEls[i].style.transform = "initial";
		setTimeout(() => {
			unhide((i += 1));
		}, 1000 / fadeEls.length);
	};
	unhide(0);
}

// Get all the public repositories in the user account alanasa64
const USER = "alanasa64";
let response = await fetch(`https://api.github.com/users/${USER}/repos`);
let responseParsed = await response.json();
console.log(responseParsed);

export { displayElements, responseParsed };
