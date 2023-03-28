document.addEventListener("DOMContentLoaded", () => {
	const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
	const breedUrl = "https://dog.ceo/api/breeds/list/all";
	const dogImageContainer = document.querySelector("#dog-image-container");
	const dogBreedList = document.querySelector("#dog-breeds");
	const dogBreedSelector = document.querySelector("select#breed-dropdown");
	let dogs;
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
			dogs = dogBreedArray;
			dogBreedArray.forEach((breed) => {
				const li = document.createElement("li");
				li.textContent = breed;
				li.addEventListener("click", (event) => {
					event.target.style.color = "#32a852";
				});
				dogBreedList.appendChild(li);
			});
		});

	dogBreedSelector.addEventListener("change", (event) => {
		const dogBreedSearchLetter = event.target.value;
		displaySelectedBreeds(dogBreedSearchLetter);
	});

	function displaySelectedBreeds(letter) {
		dogBreedList.innerHTML = "";
		dogs.filter((breedName) => breedName[0] === letter).forEach((breed) => {
			const li = document.createElement("li");
			li.textContent = breed;
			li.addEventListener("click", (event) => {
				event.target.style.color = "#32a8452";
			});
			dogBreedList.appendChild(li);
		});
	}
});
