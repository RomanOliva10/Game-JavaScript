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


let health = valuesValidator(1000, 2000, "health");

let attack = valuesValidator(100, 200 , "attack");

let defense = valuesValidator(50, 75, "defense");

let player = new Player(health, attack, defense);

export { player, Player };