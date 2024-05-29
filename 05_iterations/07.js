const nyNums = [1,2,3,4,5,6,7,8,9,10]

const res = nyNums.map((num) => num+10)
//console.log(res)

// todo using for each
// nyNums.forEach( (num) => {
//     num = num + 10
//     console.log(num)
// })


// Chaining

const newNums = nyNums
                .map((num) => num*10)
                .map((num) => num+1)
                .filter((num) => num >=40)

console.log(newNums)

