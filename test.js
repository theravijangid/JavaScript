// Reverse a string
// Built in
// function reverseStr(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseStr("hello"))

function rev(str) {
    let arr = str.split('')
    let s = 0;
    let e = arr.length - 1;
    while(s < e) {
        let temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
        s++;
        e--;
    }
    return arr.join('');
}
// console.log(rev("hello"))



// palindrome
function isPal(str) {
    const rev = str.split('').reverse().join('')
    return rev === str
}
// console.log(isPal("racecar"))


// Find max in arr
function maxInArr(arr) {
    let max = 0;
    for(let i=0; i<arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
    // return Math.max(...arr)
}
// console.log(maxInArr([1,4,2,3]))


// for(let i=1; i<=100; i++) {
//     if(i % 15 === 0 ) console.log("FizzBuzz")
//     else if(i % 3 === 0) console.log("Fizz")
//     else if (i % 5 === 0) console.log("Buzz")
//     else console.log(i)
// }

// Sum of arr
function sumArr(arr) {
    return arr.reduce((sum, num) => sum + num, 0)
}
// console.log(sumArr([1,2,3,4,5]))
 
 
// vowels
function vowelCount(str) {
    const vowels = 'aeiouAEIOU'
    return str.split('').filter(s => vowels.includes(s)).length;
}
// console.log(vowelCount("hello"))


// REMOVE DUPLICATES
function rem(arr) {
    return [...new Set(arr)]
}
// console.log(rem([1,1,1,2,2,3]))


function fact(num) {
    return num === 0 ? 1 :  num * fact(num - 1)
}
// console.log(fact(5))

// Prime
function isPrime(num) {
    if(num < 2) return false;
    for(let i=2; i<= Math.sqrt(num); i++) {
        if(num % i === 0) return false;
    }
    return true;
}
// console.log(isPrime(9))


function flateen(arr) {
    return arr.flat(Infinity)
}
// console.log(flateen([1,2,[3,4,5,[2,1]]]))

function capitalizeWords(str) {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');
}
// console.log(capitalizeWords("Hello my name is ravi"))

// Count the Occurrence of Each Element in an Array:
function occurence(arr) {
    return arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {})
}
// console.log(occurence([1,1,1,2,2,3,3,4]))


// Anagrams
function isAnagram(str1, str2) {
    const format = str => str.toLowerCase().split('').sort().join('');
    
    return format(str1) === format(str2);
}

// console.log(isAnagram("hello", "lloe"))


// patterns
// let arr = [5, 3, 8, 1, 2];
// arr.sort((a, b) => a - b); // Sorting in ascending order
// console.log(arr); // Output: [1, 2, 3, 5, 8]


function swap(a, b) {
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(a, b)
}
// swap(5,3)

// 1. Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    for(let i=0; i < n; i++) {
        for(let j=0; j<n-i-1; j++) {
            if(arr[j] > arr[j+1]) {
                [arr[j], arr[j + 1]] =  [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([2,1,3,1,5]))

// Selection Sort
function selectionSort(arr) {
    let n = arr.length;
    for(let i=0; i<n; i++) {
        let minIndex = i;
        for(j = i + 1; j<n; j++) {
            if(arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}
// console.log(selectionSort([2,1,3,1,5]))

// Insertion Sort
function selectionSort(arr) {
    for(let i=1; i<arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while(j>=0 && arr[j] > key) {
            arr[j+1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
// console.log(selectionSort([2,1,3,1,5]))


// Merge sort
function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    while(left.length && right.length) {
        if(left[0] < right[0]) {
            result.push(left.shift())
        }
        else {
            result.push(right.shift());
        }
    }
    return result.concat(left, right);
}
// console.log(mergeSort([2,1,3,1,5]))


// QUICK SORT
function QuickSort(arr) {
    if(arr.length <= 1) return arr;
    let left = [], right = []
    let pivot = arr[arr.length - 1];
    console.log("pivot - ", pivot)
    for(i=0 ; i<arr.length - 1; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i])
        }
    }
    return [...QuickSort(left), pivot, ...QuickSort(right)]
}
// console.log(QuickSort([4, 2, 6, 3, 1, 5]))


// pyramid patter
function printPyramid(n) {
    for (let i = 0; i < n; i++) {
        // spaces
        let spaces = ""
        for(let j=0; j<n-i-1; j++) {
            spaces += " "
        }   

        // stars
        let stars = ""
        for(let k=0; k<2*i+1; k++) {
            stars += "*"
        }
        console.log(spaces+stars)
    }
}
// printPyramid(6);

// Inverted pyramid
function printInvertedPyramid(n) {
    for (let i = 0; i < n; i++) {
        // spaces
        let spaces = ""
        for(let j=0; j<i; j++) {
            spaces += " "
        }   

        // stars
        let stars = ""
        for(let k=0; k<(2 * (n - i) - 1); k++) {
            stars += "*"
        }
        console.log(spaces+stars)
    }
}
// printInvertedPyramid(4)

// Floyd’s Triangle
function floyd(n) {
    let c = 1;
    for(let i=0; i<n; i++) {
        let row=""
        for(let j=0; j<i+1; j++) {
            row+=c + " ";
            c++;
        }
        console.log(row.trim())
    }
}
// floyd(4)


// Diamond
function diamond(n) {
    for(let i=0; i<n; i++) {
        let spaces=""
        for(let j=0;j<n-i-1; j++) {
            spaces += " "
        }

        let stars = ""
        for(let k=0; k<2*i+1; k++) {
            stars += "*"
        }
        console.log(spaces+stars)
    }

    for (let i = 1; i < n; i++) {
        // spaces
        let spaces = ""
        for(let j=0; j<i; j++) {
            spaces += " "
        }   

        // stars
        let stars = ""
        for(let k=0; k<(2 * (n - i) - 1); k++) {
            stars += "*"
        }
        console.log(spaces+stars)
    }
}
// diamond(5)

function printButterfly(n) {
    // Upper part
    for (let i = 1; i <= n; i++) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            stars += "*";
        }
        let spaces = "";
        for (let j = 1; j <= 2 * (n - i); j++) {
            spaces += " ";
        }
        console.log(stars + spaces + stars);
    }
    // Lower part
    for (let i = n - 1; i >= 1; i--) {
        let stars = "";
        for (let j = 1; j <= i; j++) {
            stars += "*";
        }
        let spaces = "";
        for (let j = 1; j <= 2 * (n - i); j++) {
            spaces += " ";
        }
        console.log(stars + spaces + stars);
    }
}

// printButterfly(4);


function printHollowSquare(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= n; j++) {
            if (i === 1 || i === n || j === 1 || j === n) {
                row += "*";
            } else {
                row += " ";
            }
        }
        console.log(row);
    }
}

// printHollowSquare(5);


function printHollowPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = "";
        for (let j = 1; j <= n - i; j++) {
            spaces += " ";
        }
        let stars = "";
        if (i === 1) {
            stars = "*";
        } else if (i === n) {
            for (let k = 1; k <= 2 * i - 1; k++) {
                stars += "*";
            }
        } else {
            stars = "*";
            for (let k = 1; k <= 2 * (i - 1) - 1; k++) {
                stars += " ";
            }
            stars += "*";
        }
        console.log(spaces + stars);
    }
}

// printHollowPyramid(5);


function printPascalsTriangle(n) {
    for (let i = 0; i < n; i++) {
        let row = "";
        let value = 1;
        for (let j = 0; j <= i; j++) {
            row += value + " ";
            value = value * (i - j) / (j + 1);
        }
        console.log(row);
    }
}

// printPascalsTriangle(5);

function printNumberPyramid(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = "";
        for (let j = 1; j <= n - i; j++) {
            spaces += " ";
        }
        let numbers = "";
        for (let j = 1; j <= i; j++) {
            numbers += j;
        }
        for (let j = i - 1; j >= 1; j--) {
            numbers += j;
        }
        console.log(spaces + numbers);
    }
}

// printNumberPyramid(5);


function printNumberTriangle(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += j + " ";
        }
        console.log(row);
    }
}

printNumberTriangle(5);

