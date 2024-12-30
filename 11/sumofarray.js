function sumArr(arr) {
    return arr.reduce((acc, dec) => acc + dec, 0);
}

console.log(sumArr([1,2,3,4,5]))

function largest(arr) {
    return Math.max(...arr);
}

console.log(largest([5,4,2,1,0]))