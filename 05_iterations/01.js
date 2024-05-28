// for (let i = 1; i <= 10; i++){
//     console.log(i);
   
// }

for (let i = 1; i <= 10; i++){
    // console.log(`Outer Loop value: ${i} `)
    for (let j = 0; j <= 10; j++) {
       //console.log(`Inner loop value ${j} and outer lopp : ${i}`)
    }
}

for (let i = 1; i <= 10; i++) {
    let n=5
    //console.log(n + "*" + i + "=" + n*i )
    
}

let myArr = ["iron man", "hulk", "thor"]
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element)
}


for (let i = 1; i <= 10; i++){
    if (i==3) {
        continue
    }
    console.log(i);
    
}

for (let i = 1; i <= 10; i++){
    if (i==3) {
        break;
    }
    console.log(i);
   
}