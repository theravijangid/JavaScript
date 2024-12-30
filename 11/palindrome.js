function palindrome(n) {
    let str = n.toString()

    let reversedStr = str.split('').reverse().join('');

    return str === reversedStr
}

console.log(palindrome(121))
console.log(palindrome(124))