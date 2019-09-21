// create hero object

const hero = {
    name: 'Asanga',
    heroic: true,
    inventory: [],
    health: 10,
    weapon: { type: 'AK47', damage: 2 }
}

// game logic functions

function rest(hero) {
    if (hero.health == 10) {
        alert('Asanga is healthy')
    } else {
        hero.health = 10
    }
    return hero
}

// UI for rest
const inn = document.getElementById('inn')
inn.addEventListener('click', function() { rest(hero) })


function pickUpItem(hero, weapon) {
    hero.inventory.push(weapon)
    displayStats(hero)
}

// UI for pickUpItem
const secondWeapon = { type: 'dagger', damage: 2 }
const dagger = document.getElementById('dagger')



dagger.addEventListener('click', function() { pickUpItem(hero, secondWeapon) })

const AK47 = document.getElementById('hurts')
const weapon = hero.weapon
AK47.addEventListener('click', function() { pickUpItem(hero, weapon) })

function equipWeapon(hero) {
    if (hero.inventory.length > 0) {
        hero.weapon = hero.inventory[0]
    }
    displayStats(hero)
}

// UI for equipWeapon
const bag = document.getElementById('bag')

bag.addEventListener('click', function() { equipWeapon(hero) })


// section 4
// let me allow you change to your favorite hero name
function changeToFavoriteName(hello) {
    const name = document.getElementById('name')
    const name2 = name.nodeValue
    hero.name = name2
    displayStats(hero)
}

// write displayStats function for the page

function displayStats(hero) {
    const display = document.getElementById('display')
    display.innerHTML = JSON.stringify(hero)
    return hero
}

function button() {
    const button = document.getElementsByClassName('button').innerText
    document.getElementById('name').innerHTML = button

}
console.log(hero)
displayStats(hero)