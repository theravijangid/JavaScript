const coding = ["js", "ruby", "cpp", "php"]

// coding.forEach(  function (item) {
//     console.log(item)
// } )

coding.forEach(  (item) => {
    //console.log(item)
})

// function printMe(item) {
//     console.log(item)
// }

// coding.forEach(printMe)


coding.forEach(  (item, i, arr) => {
    //console.log(item, i , arr)
}) 


const myCode = [
    {
        cname: "Java",
        languageFilename: "java"
    },
    {
        cname: "python",
        languageFilename: "py"
    },
    {
        cname: "c sharp",
        languageFilename: "c#"
    }
]


myCode.forEach(  (item) => {
    //console.log(item.languageFilename)
})


//for each loop doesnt return any value
const  res = coding.forEach( (item) => {
    console.log(item)
    return item
} )
console.log(res)


