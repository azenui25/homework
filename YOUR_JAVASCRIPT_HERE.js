// create hero object

const hero = {
        name: 'Asanga',
        heroic: true,
        inventory: [],
        health: 10,
        weapon: { type: 'AK47', damage: 2 }
    }
    // console.log(hero)
    // console.log(hero.weapon.damage)

// game logic functions

function rest(hero) {
    if (hero.health == 10) {
        alert('Asanga is healthy')
    } else {
        hero.health = 10
    }
    return hero
}


const inn = document.getElementById('inn')
inn.addEventListener('click', function() { rest(hero) })


function pickUpItem(hero, weapon) {
    hero.inventory.push(weapon)
}

const secondWeapon = { type: 'dagger', damage: 2 }
const dagger = document.getElementById('dagger')

dagger.addEventListener('click', function() { pickUpItem(hero, secondWeapon) })

function equipWeapon(hero) {
    if (hero.inventory.length > 0) {
        hero.weapon = hero.inventory[0]
    }
}

const bag = document.getElementById('bag')
bag.addEventListener('click', function() { equipWeapon(hero) })