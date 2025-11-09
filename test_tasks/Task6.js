//Напишите функцию, которая принимает массив объектов и функцию для
// сравнения элементов. Функция должна возвращать новый массив, содержащий
// только последние уникальные элементы согласно предоставленной функции
// сравнения. Функция сравнения: Эта функция принимает два аргумента (два
// объекта из массива) и возвращает true, если они считаются эквивалентными для
// целей уникальности, и false в противном случае.

function newArray(arr, comparisonFn){
   const result = [];

   for (let i = arr.length - 1; i >= 0; i--){
       const currentObject = arr[i];
       const exists = result.some(item => comparisonFn(item, currentObject));
       if (!exists) {
           result.unshift(currentObject);
       }
   }
   return result;
}
function comparisonFn(object1, object2){
    return object1.name === object2.name && object1.age === object2.age;
}

const arr = [{name: "Andrew", age: 10}, {name: "Ivan", age: 11},
    {name: "Andrew", age: 10}, {name: "Ivan", age: 11}]

console.log(newArray(arr, comparisonFn));