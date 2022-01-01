import {valuesValidator} from '../functions.js'

class Player {
    #health;

    #attack;

    #defense;
    constructor(health, attack, defense) {
        this.#health = health;
        this.#attack = attack;
        this.#defense = defense;
    }
    get health() {
        return this.#health;
    }
    set health(newHealth) {
        return (this.#health = newHealth);
    }
    get attack() {
        return this.#attack;
    }

    set attack(newAttack) {
        return (this.#attack = newAttack);
    }

    get defense() {
        return this.#defense;
    }

    set defense(newDefense) {
        return (this.#defense = newDefense);
    }
}


let health = prompt(
    "Introduces the health of your character(min: 1000, max:2000)"
);
valuesValidator(1000, 2000, health);

let attack = prompt(
    "Introduces the attack of your character(min: 100, max:200)"
);
valuesValidator(100, 200, attack);

let defense = prompt(
    "Introduces the defence of your character(min: 50, max:75)"
);
valuesValidator(50, 75, defense);

let player = new Player(health, attack, defense);

export { player, Player };