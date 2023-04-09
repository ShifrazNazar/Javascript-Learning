const BASE_URL = "https:www.superheroapi.com/api.php/10223569763528853";
const getSuperHeroBtn = document.getElementById("getSuperHero");
const heroInfoDiv = document.getElementById("heroInfo")
const searchButton = document.getElementById("searchButton")
const searchInput = document.getElementById("searchInput")

let getSuperHero = (id) => {
  fetch(`${BASE_URL}/${id}`)
    .then(response => {
      return response.json()})
    .then(json => {
      const superHero = json
      console.log(superHero.powerstats) // All powerstats of superHero is shown
      showHeroInfo(superHero)
    });
};

let getSearchSuperHero = (name) => {
  fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
      const hero = json.results[0];
      console.log(hero)
      showHeroInfo(hero)
    });
};

const statToEmoji = { 
  intelligence: '🧠',
  strength: '💪',
  speed: '⚡',
  durability: '🏋️‍♂️',
  power: '📊',
  combat: '⚔️',
}

let showHeroInfo = (character) => {
  // Replace the existing image with the new one
  const image = `<img src="${character.image.url}" height = 200 width = 200 />`;
  const name = `<p>Hero Name: "${character.name}"</p>` // character.name = json.name = ethan
  // Object.keys = makes powerstats objects into arrays ["intelligence", "strength"]
  // .map = loops and returns an array
  // stat = foreach stat ["intelligence"]
  // statToEmoji[stat] = statToEmogi["intelligence"] = 🧠
  // stat.toUpperCase() = "intelligence".toUppercase = INTELLIGENCE
  // character.powerstats[stat] = json.powerstats["intelligence"] = 88
  // .join("") = Covert the array to string since arrays cannot be displayed on DOM
  const stats = Object.keys(character.powerstats).map(stat => {
    return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join('') 
    
  heroInfoDiv.innerHTML = `${name}${image}${stats}`

}

function randomHero() {
  return Math.floor((Math.random() * 731) + 1);
}

// Button onclicks are called at the end
getSuperHeroBtn.onclick = () => {
  getSuperHero(randomHero());
};

searchButton.onclick = () => {
  getSearchSuperHero(searchInput.value) // .value extracts the text from the DOM
}


