function setUsername(username) {
    // DB calls
    this.username = username;
    console.log("called")
}

function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

const ravi = new createUser("ravi", "ravi@123", 1212)
console.log(ravi);