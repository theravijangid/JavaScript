//Global Scope
// var c = 200
let a =100

if (true) {
    //block scope
    let a = 10
    const b= 20
    console.log("INNER: ",a)
}


console.log(a)
// console.log(b)
// console.log(c)