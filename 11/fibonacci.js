// function fibonacci(n) {
//     if(n <= 0) return 0;
//     if(n === 1) return 1;

//     return fibonacci(n - 1) + fibonacci(n-2);
// }

// console.log(fibonacci(10))

function fibonacci(n) {
    if(n<=0) return [];
    if(n===1) return [0];
    let fibseq = [0,1];
    for (let i = 2; i < n; i++) {
        fibseq.push(fibseq[i -1] + fibseq[i-2])
        
    }
    return fibseq
}

console.log(fibonacci(5))