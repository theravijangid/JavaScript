const promiseOne = new Promise(function(resolve, reject) {
    //db calls
    // do an async task
    setTimeout(function() {
        console.log("Async task is completed")
        resolve()
    },1000)
})

promiseOne.then(function() {
    console.log("Prommise is consumed")
})

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async Task 2 is complete")
        resolve()
    }, 1000)
}).then(function() {
    console.log("Async 2 is resolved")
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username: "ravi", email: "ravi@gmail.com"})
    },1000)
})

promiseThree.then(function(user) {
    console.log(user)
})

const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username: "ravi", pass: "1212"})
        } else {
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user)
    return user.username;
}).then( (username) => {
    console.log(username)
}).catch((error) => {
    console.log(error)
}).finally(() => console.log('The promise is either resolved or rejected'))


const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true;
        if(!error) {
            resolve({username: "javascript", pass: "1212"})
        } else {
            reject('ERROR: JS went wrong')
        }
    },1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()


// async function getUser() {
//     try {
//         const res = await fetch('https://api.github.com/users/theravijangid')
//         const data = await res.json()
//         console.log(data)
//     } catch (error) {
//         console.log('E: ', error)
//     }
// }
// getUser()

fetch('https://api.github.com/users/theravijangid')
.then((response) => {
    return response.json()
})
.then((data) => console.log(data))
.catch((error) => console.log(error))