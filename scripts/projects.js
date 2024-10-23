// import { Nav } from "./nav.js";
import { displayElements, responseParsed as userRepostories } from "./utils.js";
import { ProjectCard } from "./ProjectCard.js";

// const nav = new Nav();
// nav.injectTo(document.body);

displayElements(document.querySelector("header"));

const projectsWrapper = document.querySelector(".projectsWrapper");
const projectsSection = document.querySelector(".projects");
userRepostories.forEach((repo) => {
	let card = new ProjectCard(
		repo.name,
		repo.description,
		repo.topics,
		repo.clone_url
	);
	projectsWrapper.append(card);
});

// projects.js
// document.addEventListener("DOMContentLoaded", function() {
// 	const projectsWrapper = document.querySelector('.projectsWrapper');

// 	// Fetch public repositories from GitHub
// 	fetch('https://api.github.com/users/alananas64/repos')
// 		.then(response => {
// 			if (!response.ok) {
// 				throw new Error('Network response was not ok');
// 			}
// 			return response.json();
// 		})
// 		.then(repos => {
// 			// Loop through the repositories and create HTML elements to display them
// 			repos.forEach(repo => {
// 				const projectDiv = document.createElement('div');
// 				projectDiv.classList.add('project');

// 				projectDiv.innerHTML = `
// 					<h3>${repo.name}</h3>
// 					<p>${repo.description || 'No description available.'}</p>
// 					<a href="${repo.html_url}" target="_blank">View on GitHub</a>
// 				`;

// 				projectsWrapper.appendChild(projectDiv);
// 			});
// 		})
// 		.catch(error => {
// 			console.error('There was a problem with the fetch operation:', error);
// 		});
// });

displayElements(projectsWrapper);
displayElements(projectsSection);
