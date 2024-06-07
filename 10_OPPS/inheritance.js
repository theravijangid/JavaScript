class User{
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is: ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`New course added by ${this.username}`)
    }
}

const ravi = new Teacher("ravi", "ravi@123", "123")
ravi.addCourse() 

const rajesh = new User("rajesh")
rajesh.logMe()
console.log(ravi instanceof User)
