//записать в массив ряд фибоначчи начиная с N члена с длинной массива M

function specificFibonacciArrayBuild(n, m) {
    return defaultFibonacciArrayBuild(n, m).slice(n - 1, n - 1 + m);
}

function defaultFibonacciArrayBuild(n, m) {
    const fibArray = [];
    for (let i = 0; i < m + n; i++) {
        if (i === 0 || i === 1) {
            fibArray[i] = i;
        } else {
            fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
        }
    }
    return fibArray;
}

console.log(specificFibonacciArrayBuild(8, 20))