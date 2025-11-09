//Создайте асинхронную функцию, которая принимает массив функций,
// возвращающих промисы. Функция должна выполнять все промисы параллельно и
// возвращать массив результатов в том порядке, в котором были переданы функции.

async function promises(arrayOfFunctions) {
    const promisesArray = arrayOfFunctions.map(functions => functions());
    return await Promise.all(promisesArray);

}

const functions = [
    () => new Promise(resolve => setTimeout(() => resolve(1), 300)),
    () => new Promise(resolve => setTimeout(() => resolve(2), 200)),
    () => new Promise(rejected => setTimeout(() => rejected(3), 100))
];

promises(functions).then(console.log);




