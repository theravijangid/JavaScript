function myFunc() {
    console.log("R")
    console.log("A")
    console.log("V")
    console.log("I")
}

// myFunc()

// function add(a,b) {
//     console.log(a+b)
// }

function add(a,b) {
    // let result = a + b;
    // return result
    return a+b
}

// add(5,6)
const result = add(3,4)
// console.log("Results: ",result)


function loginUserMessage(username = "sam") {
    if(username === undefined) {
        console.log("Please enter a user name")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Ravi"))
// console.log(loginUserMessage())



// REST operator ...

function calculatecartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculatecartPrice(100,200,300,400))

function calculatecartPrices(...num1) {
    let sum = 0
    for (let i=0; i< num1.length; i++) {
        sum = sum + num1[i] 
    }
    console.log("total : ", sum)
    return sum
}
console.log(calculatecartPrices(100,200,300,400))


const user = {
    username: "ravi",
    price: 111
}

function handleObject(anyObject) {
    console.log(`User name is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: "raj",
    price: 333
})

const myArr = [100,200,300,400]

function handleMyArr(getArr) {
    return getArr[1]
}

// console.log(handleMyArr(myArr))
console.log(handleMyArr([
    1,2,3,4
]))