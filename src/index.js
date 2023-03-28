document.addEventListener("DOMContentLoaded", () => {
	const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
	const breedUrl = "https://dog.ceo/api/breeds/list/all";
	const dogImageContainer = document.querySelector("#dog-image-container");
	const dogBreedList = document.querySelector("#dog-breeds");

	fetch(imgUrl) //Loads imgages on page
		.then((response) => response.json())
		.then((dogObject) => {
			dogObject.message.forEach((dogImage) => {
				const img = document.createElement("img");
				img.setAttribute("src", `${dogImage}`);
				dogImageContainer.appendChild(img);
			});
		});

	fetch(breedUrl)
		.then((response) => response.json())
		.then((dogsObject) => {
			const dogBreedArray = Object.keys(dogsObject.message);
			dogBreedArray.forEach((breed) => {
				const li = document.createElement("li");
				li.textContent = breed;
				dogBreedList.appendChild(li);
			});
		});
});
