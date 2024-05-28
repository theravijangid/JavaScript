// for of  (Array specific loop)


const arr = [1,2,3,4,5]

for (const value of arr) {
    //console.log(value)
}


const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is : ${greet}`)
}

//maps
const map = new Map()
map.set('IN', 'India')
map.set('AUS', 'Australia')
map.set('ENG', 'England')

//console.log(map)

for (const [key, value] of map) {
    //console.log(key, ':-', value)
}

const myObj = {
    'game1' : 'NFS',
    'game2' : 'GTA'
}

for (const [key, value] of myObj) {
    //console.log(key, ':-', value)
}     //Objects are not iterable with for of loop