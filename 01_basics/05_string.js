const name = "ravi"
const age = 24

// console.log(name + age + "years")

//string INTERPOLATION

console.log(`my name is ${name} and my age is ${age}`)

const gameName = new String('ravi jangir-rj-ga')

// console.log(gameName[0])
// console.log(gameName.length)
// console.log(gameName.toUpperCase())

console.log(gameName.charAt(0))
console.log(gameName.indexOf('i'))

const newString = gameName.substring(0, 4)
console.log(newString)

const newString2 = gameName.slice(1, 5)
console.log(newString2)

const trimex = "   RAVI   "
console.log(trimex)
console.log(trimex.trim())

const url = "https://ravi.com/ravi%20jangir"

console.log(url.replace('%20', '-'))
console.log(url.includes('ravi'))

console.log(gameName.split('-'))
console.log(gameName.split('-').join(" "))