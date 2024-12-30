function rmDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(rmDuplicates([1,2,3,4,4,4,5]))