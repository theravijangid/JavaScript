function mergeAndSort(arr1, arr2) {
    return [...arr1, ...arr2].sort((a,b) => a-b);
}



console.log(mergeAndSort([3, 1, 4], [2, 5, 6])); 
console.log(mergeAndSort([10, 30, 20], [40, 50, 60])); 