// if
const isUserLoggedIn = true
const temperature = 36

// if(temperature < 40) {
//     console.log("temperature is below 40")
// } else {
//     console.log("temperature is too hot")
// }

// const score =100 
// if(score > 90) {
//     let power = "fly"
//     console.log(`User power: ${power}`)
// }


const balance = 10000
// if(balance > 5000) console.log("test bal"), console.log("test2");


// if(balance < 5000) {
//     console.log("less than 5000");
// } else if (balance < 7500) {
//     console.log("less than 7500")
// } else {
//     console.log("balance greter than 7500")
// }


const UserLoggedIn = true
const debitCard = true
const loggedGoogle = false
const loggedEmail = true

if(UserLoggedIn && debitCard) {
    console.log("Allow to buy")
}

if(loggedGoogle || loggedEmail) {
    console.log("allow to log in")
}