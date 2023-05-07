const arrayResidence = [
  { city: "Kyiv", country: "Ukraine" },
  { city: "Washington", country: "USA" },
  { city: "London", country: "Great Britain" },
];
const arraySport = [
  { sport: "Football", sportsman: "Andriy Shevchenko" },
  { sport: "Basketball", sportsman: "Sviatoslav Mykhailiuk " },
  { sport: "Rally", sportsman: "Kalle Rovanperä" },
];
const date = new Date();
let stringResult = "";
let foundCity = "";
let foundSport = "";

const yearBirth = +prompt("Enter year of birth:");
const currentYear = date.getFullYear();
if (typeof yearBirth && yearBirth >= 1000 && yearBirth <= currentYear) {
  stringResult += ` Age: ${currentYear - yearBirth}. \n`;
} else {
  stringResult += ` You are hiding your date of birth? ;) \n`;
}

const cityLive = prompt("Enter the city you live in:");
const validFlagCity = /^[a-zA-Zа-яїєёА-ЯЇЄЁ]+$/.test(cityLive);

if (cityLive === null || cityLive === "" || !validFlagCity) {
  stringResult += ` Where are you living? ( \n`;
} else {
  foundCity = arrayResidence.find(
    (item) => item.city.toUpperCase() === cityLive.toUpperCase()
  );
}

if (foundCity === undefined) {
  stringResult += ` You have entered a city: ${cityLive}. \n`;
} else if (foundCity != "") {
  stringResult += ` You live in the capital ${foundCity.country}. \n`;
}

const sportFavorite = prompt("Enter your favorite sport:");
const validFlagSport = /^[a-zA-Zа-яїєёА-ЯЇЄЁ]+$/.test(sportFavorite);

if (sportFavorite === null || sportFavorite === "" || !validFlagSport) {
  stringResult += ` What is your favorite sport? ( \n`;
} else {
  foundSport = arraySport.find(
    (item) => item.sport.toUpperCase() === sportFavorite.toUpperCase()
  );
}

if (foundSport === undefined) {
  stringResult += `  ${sportFavorite} is a good sport. \n`;
} else if (foundSport != "") {
  stringResult += ` Cool! Do you want to be like ${foundSport.sportsman}? \n`;
}

alert(stringResult);
