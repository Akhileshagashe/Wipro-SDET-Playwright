//1  Pokémon — PokeAPI
async function getPokemon() {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
    const data = await res.json();

    const result = data.results
      .filter(p => p.name.startsWith("b"))
      .map(p => p.name);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getPokemon();




//2  Space People — Open Notify
async function getAstronauts() {
  try {
    const res = await fetch("http://api.open-notify.org/astros.json");
    const data = await res.json();

    const result = data.people.map(p => p.name);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getAstronauts();



//4  Dog Facts — Dog API
async function getDogFacts() {
  try {
    const res = await fetch("https://dogapi.dog/api/v2/facts");
    const data = await res.json();

    const result = data.data.map(d => d.attributes.body);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getDogFacts();



//5  Random Users — Random User Generator
async function getUsers() {
  try {
    const res = await fetch("https://randomuser.me/api/?results=10");
    const data = await res.json();

    const result = data.results
      .filter(u => u.gender === "female")
      .map(u => u.name.first);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getUsers();



//6  Countries — REST Countries
async function getCountries() {
  try {
    const res = await fetch("https://restcountries.com/v3.1/all?fields=name,population");
    const data = await res.json();

    const result = data
      .filter(c => c.population > 100000000)
      .map(c => c.name.common);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getCountries();



//7  Crypto — CoinGecko
async function getCrypto() {
  try {
    const res = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd");
    const data = await res.json();

    const result = data
      .filter(c => c.current_price > 1000)
      .map(c => c.name);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getCrypto();



//8  Universities — Hipolabs Universities API
async function getUniversities() {
  try {
    const res = await fetch("http://universities.hipolabs.com/search?country=India");
    const data = await res.json();

    const result = data
      .filter(u => u.name.includes("Technology"))
      .map(u => u.name);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getUniversities();




//9  Quotes — Quotable
async function getQuotes() {
  try {
    const res = await fetch("https://zenquotes.io/api/quotes");
    const data = await res.json();

    const result = data
      .filter(q => q.q.length < 100)
      .map(q => q.q);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getQuotes();