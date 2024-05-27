//Global Scope
// var c = 200
let a =100

if (true) {
    //block scope
    let a = 10
    const b= 20
    // console.log("INNER: ",a)
}


// console.log(a)
// console.log(b)
// console.log(c)


//Nested scope
function one() {
    const username = "ravi"
    function two() {
        const website ="youtube"
        console.log(username)
    }
    // console.log(website)
    two()
}

// one()


if(true) {
    const username = "ravi"
    if(username === "ravi") {
        const website = " youtube"
        // console.log(username + website)
    }
    // console.log(website)
}
// console.log(username)


//+++++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++
console.log(addone(5))
function addone(num) {
    return num + 1
}

 

//also called as expression
const addtwo = function(num) {
    return num + 2
}
addtwo(5)