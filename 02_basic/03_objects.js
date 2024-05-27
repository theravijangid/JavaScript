//singleton
//Object.create

//object literals

const mySymbol = Symbol("key1")

const User = {
    name: "Ravi",
    age: 24,
    [mySymbol] : "myKey1",
    location: "goa",
    email: "ravi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

// console.log(User.email)
// console.log(User["email"])
// console.log(User[mySymbol])

User.age = 23
// Object.freeze(User)
User.name = "Ravi jangir"
// console.log(User)

User.greetings = function() {
    console.log("Hello jee")
}

User.greetings2 = function() {
    console.log(`Hello ${this.name} jee`)
}

console.log(User.greetings())
console.log(User.greetings2())