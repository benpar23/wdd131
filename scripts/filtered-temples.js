const currentyear = document.querySelector("#currentyear");

const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentyear.innerHTML = today.getFullYear();

lastModified.innerHTML = document.lastModified;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x250/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Toronto Ontario",
		location: "Brampton, Ontario",
		dedicated: "1987, October, 10",
		area: 57982,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/toronto-ontario/400x250/toronto-temple-lds-82529-wallpaper.jpg"
	},
	{
		templeName: "Guatemala City Guatemala",
		location: "Guatemala City, Guatemala",
		dedicated: "1984, December, 14",
		area: 11610,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guatemala-city-guatemala/400x250/guatemala-city-temple-lds-829605-wallpaper.jpg"
	},
	{
		templeName: "San Salvador El Salvador",
		location: "San Salvador, El Salvador",
		dedicated: "2011, August, 21",
		area: 27986,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-salvador-el-salvador/400x250/san-salvador-el-salvador-temple-lds-848546-wallpaper.jpg"
	}
	// Add more temple objects here...
];

const templeList = document.querySelector(".images");

createTempleCard(temples);

function createTempleCard(filteredTemples) {

	templeList.innerHTML = "";

	filteredTemples.forEach(temple => {
		const templeCard = document.createElement("div");

		templeCard.className = "card";

		templeList.appendChild(templeCard);

		const templeName = document.createElement("h3");

		templeName.textContent = temple.templeName;

		templeCard.appendChild(templeName);

		const templeLocation = document.createElement("div");

		templeLocation.className = "row";

		templeLocation.innerHTML = `<span>LOCATION:</span> ${temple.location}`;

		templeCard.appendChild(templeLocation);

		const templeDedication = document.createElement("div");

		templeDedication.className = "row";

		templeDedication.innerHTML = `<span>DEDICATED:</span> ${temple.dedicated}`;

		templeCard.appendChild(templeDedication);

		const templeSize = document.createElement("div");

		templeSize.className = "row";

		templeSize.innerHTML = `<span>SIZE:</span> ${temple.area} sq ft`;

		templeCard.appendChild(templeSize);

		const templeImage = document.createElement("img");

		templeImage.src = temple.imageUrl;
		templeImage.alt = `Image of the ${temple.templeName} Temple`;
		templeImage.loading = "lazy";

		templeCard.appendChild(templeImage);
	})
}

const home = document.querySelector("#home");
const oldTemples = document.querySelector("#old");
const newTemples = document.querySelector("#new");
const largeTemples = document.querySelector("#large");
const smallTemples = document.querySelector("#small");

const page = document.querySelector("#currentPage");

oldTemples.addEventListener('click', () => {

	page.textContent = "Old";

	let date = new Date("1900-01-01");

	createTempleCard(temples.filter(temple => new Date(temple.dedicated) < date));
});

home.addEventListener('click', () => {

	page.textContent = "Home";

	createTempleCard(temples);
});

newTemples.addEventListener('click', () => {

	page.textContent = "New";

	let date = new Date("2000-12-31");

	createTempleCard(temples.filter(temple => new Date(temple.dedicated) > date));
});

largeTemples.addEventListener('click', () => {

	page.textContent = "Large";

	createTempleCard(temples.filter(temple => parseInt(temple.area) > 90000));
});

smallTemples.addEventListener('click', () => {

	page.textContent = "Small";

	createTempleCard(temples.filter(temple => parseInt(temple.area) < 10000));
});