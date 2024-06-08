class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    } 

    get password() {
        return `${this._password}ravi`
    }
    set password(value) {
        this._password = value
    }
}


const ravi = new User("ravi@gmail.com", "123")
console.log(ravi.password)
console.log(ravi.email)