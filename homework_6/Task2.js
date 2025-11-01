//найти максимальное значение числа в массиве ([3,67,15...])

function maxNumberInArray(arr) {
    const sortedArray = arr.toSorted((a, b) => a - b);
    return sortedArray[arr.length - 1]
}

const newArray = [2, 10, 1, 8, 9];
console.log(newArray);
console.log(maxNumberInArray(newArray));