const heroes = ["thor","iron mab", "hulk"]
const dcheroess = ["superman","batman","flash"]

// heroes.push(dcheroess)

// console.log(heroes)
// console.log(heroes[3][0])

// const newArr = heroes.concat(dcheroess)
// console.log(newArr)

const all_heroes = [...heroes, ...dcheroess]
// console.log(all_heroes)

const anotherArr = [1,2,3,[4,5,6],6,[6,[7,8]]]
const real_anotherArr = anotherArr.flat(Infinity)

console.log(real_anotherArr)

console.log(Array.isArray("Ravi"))
console.log(Array.from("Ravi"))
console.log(Array.from({name: "Ravi"}))   //interesting case for inteviews

let score1 = 100
let score2 = 95
let score3 = 80

console.log(Array.of(score1, score2, score3))