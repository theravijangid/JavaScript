const readline = require('readline')

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function factorial(num) {
    if(num == 0 || num == 1) return num
    return num * factorial(num - 1)
} 

read.question("Enter a number : ", (input) => {
    let num = parseInt(input)
    console.log(`The factorial of ${num} is ${factorial(num)}`)
    read.close()
})