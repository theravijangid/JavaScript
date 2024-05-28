// IMEEDIATELY INVOKED FUNCTION EXPRESSION IIFE

(function myFunc(){
    //named IIFE
    console.log(`DB CONNECTED`)
})();

( () => {
    console.log(`DB CONNECTED TWO`)
})();

( (name) => {
    console.log(`DB CONNECTED TO ${name}`)
})("mongo")

