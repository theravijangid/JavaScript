function vowel(str) {
    let vowels = 'aeiouAEIOU';
    let count = 0;
    for (let char of str) {
        if(vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

console.log(vowel("hello world"));