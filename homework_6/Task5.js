//сортировка массива по возрастанию/убыванию

function sortArraysAscending(arr) {
  return arr.toSorted((a, b) => a - b);

}
function sortArraysDescending(arr) {
  return arr.toSorted((a, b) => b - a);

}

const array = [-3, 6, 0, -1, 10];
console.log(sortArraysAscending(array));
console.log(sortArraysDescending(array));
