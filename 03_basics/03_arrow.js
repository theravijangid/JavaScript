//this keyword is used to refer current context
const user = {
    username: "ravi",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to the website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "raj"
// user.welcomeMessage()

// console.log(this)

// function chai() {
//     let username= "ravi"
//     console.log(this.username)   //o/p isundefined as the this keyword is used for referncing current context of an object
// }
// chai()

// const chai = function () {
//     let username= "ravi"
//     console.log(this.username)
// }

// Arrow  function
const add = () => {
    let username= "ravi"
    console.log(this)
}
// add()

// const sum = (n1, n2) => {
//     return n1 + n2
// }

// const sum = (n1, n2) =>  n1 + n2   //implicite return 

// const sum = (n1, n2) =>  (n1 + n2)

const sum = (n1, n2) =>  ({username: "ravi"})


console.log(sum(7,6))