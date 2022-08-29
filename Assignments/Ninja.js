export class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log(this.name)
    }

    showStats() {
        console.log(`Name: ${this.name}\nStrength: ${this.strength}\nSpeed: ${this.speed}\nHealth: ${this.health}\n`)
    }

    drinkSake() {
        this.health += 10;
    }
}

let ninja1 = new Ninja("george", 10, 5)

ninja1.showStats()

// export default Ninja