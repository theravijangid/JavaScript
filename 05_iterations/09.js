const myNum =[1,2,3,4]

const total = myNum.reduce( function (acc, currval) {   
    //console.log(`acc:- ${acc} and currval: ${currval}`)
    return acc + currval
}, 0)

//console.log(total)

const result = myNum.reduce( (acc, currval) => (acc + currval), 0)
//console.log(result)


const shoppingCart = [
    {
        cname: "Js course",
        price: 2999
    },
    {
        cname: "py course",
        price: 999
    },
    {
        cname: "dsa course",
        price: 5999
    },
    {
        cname: "app development course",
        price: 999
    },
]

// const totalPrice = shoppingCart.reduce( (acc, curr) => (acc + curr.price), 0)
const totalPrice = shoppingCart.reduce( (acc, item) => (acc + item.price), 0)
console.log(totalPrice)