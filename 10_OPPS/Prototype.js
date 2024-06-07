// const myName = "Ravi     "
// const myLastname = "Jangid   "


let myHeros = ["hulk","thor","hawkeye"]

let heroPower = {
    hulk: "smash",
    thor: "hammer",
    hawkeye: "arrows",

    getHulkPower: function(){
        console.log(`hulk power is ${this.hulk}`)
    }
}

Object.prototype.ravi = function() {
    console.log(`ravi is present is all objects`)
}

Array.prototype.heyravi = function() {
    console.log(`ravi is present is all array`)
}

// heroPower.ravi()
myHeros.heyravi()
// heroPower.heyravi()


const user = {
    name: "ravi",
    email: "ravi@qwe",
}

const teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable:  true,
}

const TASupport = {
    makeAssignment: 'JS assign',
    fulltime: true,
    __proto__: TeachingSupport
}

teacher.__proto__ = user

//moder syntax
Object.setPrototypeOf(TeachingSupport, teacher)


const myName = "Ravi     "
const myLastname = "Jangid   "

String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`)
}

myName.trueLength()
myLastname.trueLength()
"rajesh ".trueLength()