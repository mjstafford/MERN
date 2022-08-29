import Unit from './Unit.js'
import Effect from './Effect.js'

//units
// let redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
// let blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)

//effects
// let hardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3)
// let promiseRej = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2)
// let pairProgram = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)

//turn 1
console.log("turn 1")
let redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4)
console.log("red res:", redBeltNinja.res)
let hardAlgo = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3)
hardAlgo.play(redBeltNinja)
console.log("red res:", redBeltNinja.res)

//turn 2
console.log("turn 2")
let blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4)
console.log("black res:", blackBeltNinja.res)
console.log("red res:", redBeltNinja.res)
let promiseRej = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2)
promiseRej.play(redBeltNinja)
console.log("red res:", redBeltNinja.res)

//turn 3
console.log("turn 3")
let pairProgram = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2)
console.log("red power:", redBeltNinja.power)
pairProgram.play(redBeltNinja)
console.log("red power:", redBeltNinja.power)

console.log("black res:", blackBeltNinja.res)
redBeltNinja.attack(blackBeltNinja)
console.log("black res:", blackBeltNinja.res)