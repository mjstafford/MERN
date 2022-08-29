class Ninja {
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

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 10, strength = 10, wisdom = 10) {
        super(name, health, speed, strength)
        this.wisdom = wisdom
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }

    //override to include the wisdom stat
    showStats() {
        console.log(`Name: ${this.name}\nStrength: ${this.strength}\nSpeed: ${this.speed}\nHealth: ${this.health}\nWisdom: ${this.wisdom}\n`)
    }
}

// example output
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"
