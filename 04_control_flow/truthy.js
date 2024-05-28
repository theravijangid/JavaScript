const userEmail = []
if (userEmail) {
    console.log("Email is found")
} else {
    console.log("Email not found")
}


// falsy values
//   false,  0,  -0, BigInt 0n, "", null, undefined, NaN 

// Truthy value
    //  "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0) {
//     console.log("array is empty")
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty")
// }


//Nullish coalescing Operator(??) : null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = null ?? 5 ?? 10
val1 = undefined ?? 15


console.log(val1)


// Ternary Operator
const teaPrice = 100
teaPrice <= 80 ? console.log("less than 80") : console.log("more than 80") 



