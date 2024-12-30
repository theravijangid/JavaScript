function swap(a,b) {
    let c = a;
    a = b;
    b = c;
    
    console.log(`a: ${a} , b:${b}`)   
}

swap(2,4)

function swap2(a,b) {
    a =a+b;
    b=a-b;
    a= a-b;
    console.log(`a: ${a} , b: ${b}`)
}

swap2(15,20)