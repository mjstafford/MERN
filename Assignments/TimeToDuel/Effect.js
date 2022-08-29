import Card from './Card.js'
import Unit from './Unit.js'

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost)
        this.text = text
        this.stat = stat
        this.magnitude = magnitude
    }

    play(target) {
        if (target instanceof Unit) {
            if (this.stat == "resilience") {
                target.res += this.magnitude
            } else {
                target.power += this.magnitude
            }
        } else {
            throw new Error("Target must be a unit!");
        }
    }
}

export default Effect