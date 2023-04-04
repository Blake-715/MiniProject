/**
 * The USS Assembly =
 *  hull - 20
    firepower - 5
    accuracy - .7
 *
 * 
 * The Alien Ships
 *  hull - between 3 and 6
    firepower - between 2and 4
    accuracy - between .6and .8

 * Example Use of accuracy
 *   if (Math.random() < alien[0].accuracy) {
	console.log('You have been hit!');
}
 */

class USS {
    constructor() {
        this.hull = 20;
        this.firepower = 5;
        this.accuracy = .7;
    }
    attack(defender) {
        let ranNum = Math.random()
        console.log(`Accuracy is ${ranNum}`)
        if (ranNum < this.accuracy) {
            console.log(`Target hit!`)
            defender.hull = defender.hull - this.firepower;
            console.log(`Alien has ${defender.hull} hulls left.`)
        } if (defender.hull <= 0) {
            console.log(`Alien ship is destroyed!!`)
        } else {
            console.log("You missed")
        }
    }
}

class Alien {
    constructor() {
        this.hull = Math.floor(Math.random() * (6 - 3 + 1)) + 3
        this.firepower = Math.floor(Math.random() * (4 - 2 + 1)) + 2
        this.accuracy = Math.random() * (0.8 - 0.6) + 0.6
    }
    alienAttack(defender) {
        let ranNum = Math.random()
        console.log(`Accuracy threshold is ${ranNum}`);
        if (ranNum < this.accuracy) {
            console.log(`You're been hit!`)
            defender.hull = defender.hull - this.firepower;
            console.log(`Player has ${defender.hull} hulls left.`)
        } if (defender.hull <= 0) {
            console.log(`You have blown up`)
        } else {
            console.log("You dodged the attack")
        }
    }
}

const attacker = new USS("Player")

const defender = new Alien("Alien")

console.log(attacker.attack(defender))


// function checkStatus(ship) {
//   if (ship.hull <= 0) {
//     console.log(`${ship.name} has been destroyed!`);
//     return true;
//   } else {
//     return false;
//   }
// }
// let alienShipIndex = 0;

// while (alienShipIndex < alienShips.length) {
//   const currentAlienShip = alienShips[alienShipIndex];
//   console.log(`You are attacking alien ship ${alienShipIndex + 1} of ${alienShips.length}.`);