const User = {
    _email: "ravi@xyz",
    _pass: "abc",

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const ravi = Object.create(User)
console.log(ravi.email)
