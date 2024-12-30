function armstrong(n) {
    let numStr = n.toString();
    let numofDigits = numStr.length;
    let sum = 0;

    for (let digit of numStr) {
        sum += Math.pow(parseInt(digit), numofDigits)
    }

    return sum === n;
}

console.log(armstrong(153))
console.log(armstrong(9475))