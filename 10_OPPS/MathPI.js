const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const myName = {
    name: "Ravi",
    age: 24,
    isLoggedin: true,
    
    isAvailable() {
        console.log("Available at the moment")
    }
}

console.log(Object.getOwnPropertyDescriptor(myName, "name"))

Object.defineProperty(myName, "name", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(myName, "name"))

for (const [key, value] of Object.entries(myName)) {
    if(typeof value !== "function") {
        console.log(`${key} : ${value}`)
    }
}
