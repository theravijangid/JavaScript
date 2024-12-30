const { stdin } = require('process')
const readline = require('readline')

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function oddEven(num) {
    if(num % 2 == 0) {
        console.log(`${num } is even number`)
    }
    else{
        console.log(`${num} is an odd number`)
    }
}

read.question("Enter a number", (input) => {
    let num = parseInt(input)
    oddEven(num)
    read.close();
})
