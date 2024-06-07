// ES6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}xyz`
//     }

//     capitalizeUsername() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const ravi = new User("ravi", "ravi@123", "1234")
// console.log(ravi.encryptPassword())
// console.log(ravi.capitalizeUsername())

// behind the scene
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function() {
    return `${this.password}abc`
}

User.prototype.capitalizeUsername = function() {
    return `${this.username.toUpperCase()}`
}

const rajesh = new User("rajesh", "rajesh@123", "12345")

console.log(rajesh.encryptPassword())
console.log(rajesh.capitalizeUsername())