const user = {
    username: "ravi",
    loginCount: 3,
    signedIn: true,

    getUserDetails: function() {
        // console.log("got user details")
        // console.log(`username: ${this.username}`)
        console.log(this)
    }
}

// console.log(user.username)
// console.log(user.getUserDetails());

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this     //By default it returns
}

const userone = new User("ravi",4,true)
const userTwo = new User("rajesh",9,false)
console.log(userone.constructor)
// console.log(userTwo)


// when u use a new keyword an empty object is created, Its an instance
// step 2 =>  a construction function is called bcauz of the new keyword (it wraps all the args and returns it)
// step 3 => now all the args in the new are injected into the this keyword