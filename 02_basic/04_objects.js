//const User = new Object()   //singleton example
const tideruser = {}

tideruser.id = "0001"
tideruser.name = "raj"
tideruser.isLoggedIn = false

// console.log(tideruser)

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userfullName: {
            firstName: "ravi",
            lastname: "jangir"
        }
    }
}

// console.log(regularuser.fullname.userfullName.firstName)

//onbject combime / merger

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1,obj2,obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)

const users = [
    {
        id: 1,
        email: "ravi@gmail.com"
    },
    {
        id: 2,
        email: "ravi@gmail.com"
    },
    {
        id: 3,
        email: "ravi@gmail.com"
    },
]

// console.log(users[1].email)
// console.log(tideruser)

// console.log(Object.keys(tideruser))        //helps in conversion og object in array
// console.log(Object.values(tideruser))
// console.log(Object.entries(tideruser))


// console.log(tideruser.hasOwnProperty('isLoggedIn'))


//Destucturing objects

const course = {
    coursename: "js",
    price: 111,
    courseInstructor: "ravi"
}

const {courseInstructor: instructor} = course

// console.log(courseInstructor)
console.log("instructor : ",instructor)