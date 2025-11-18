//Напишите функцию, которая принимает массив объектов с полями name и age, и
// группирует их в объект, где ключи — это возраст, а значения — массивы имен
// людей этого возраста.


function groupByAge(people) {

    const groupedObj = {};

    for (const person of people) {
        if (!groupedObj[person.age]) {
            groupedObj[person.age] = [];
            groupedObj[person.age].push(person.name);

        } else {
            groupedObj[person.age].push(person.name);
        }
    }
    return groupedObj;


}

console.log(groupByAge([{name: "Andrew", age: 10}, {name: "Andrew", age: 11}, {name: "Sara", age: 10}]));