const myObj = {
    js: 'Javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: "swift by google"
}

// for in loop is mostly used to iterate over an object
for (const key in myObj) {
    //console.log(`${key} shortcut is for ${myObj[key]}`)
}


const programming = ["js", "cpp", "c#"]
for (const key in programming) {
    //console.log(programming[key])
}

//map is not iteratble using forin
// const map = new Map()
// map.set('IN', 'India')
// map.set('AUS', 'Australia')
// map.set('ENG', 'England')

// for (const key in map) {
//     console.log(key)
// }