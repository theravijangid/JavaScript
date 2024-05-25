//Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toJSON())

// let myCreatedDate = new Date(2022, 11, 4)
// let myCreatedDate = new Date(2022, 11, 4, 5 ,3)
// let myCreatedDate = new Date("1999-12-04")
let myCreatedDate = new Date("12-04-1999")
// console.log(myCreatedDate.toLocaleString()) 

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getDay())
// console.log(newDate.getFullYear())

// console.log(`${newDate.getDay()} is the day`)

let sss = newDate.toLocaleString('default', {
    weekday: "long",
})

console.log(sss)