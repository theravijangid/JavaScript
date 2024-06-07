class User{
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`username is: ${this.username}`)
    }

    static createId() {
        return `123`
    }
}

// const ravi = new User("ravi")
// console.log(ravi.createId())


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new User("iphone", "iphone@123")
iphone.logMe()
console.log(iphone.createId())