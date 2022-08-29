import Card from './Card.js'

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost)
        this.power = power
        this.res = res
    }

    attack(target) {
        target.res -= this.power
    }
}

export default Unit