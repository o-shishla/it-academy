//Создайте цепочку из трех промисов. Пусть первый промис вернет число. Сделайте
// так, чтобы каждый последующий промис возводил в квадрат результат
// предыдущего промиса через 3 секунды. После окончания манипуляций выведите
// на в консоль получившийся номер.


new Promise(resolve => setTimeout(() => resolve(10), 1000))
    .then((number) => {
        console.log(`${number}`);
        return new Promise(resolve => {
            setTimeout(() => resolve(number * number), 3000)
        })
    })
    .then((number) => {
        console.log(`${number}`);
        return new Promise(resolve => {
            setTimeout(() => resolve(number * number), 3000)
        })
    })
    .then(number => {
        console.log(`${number}`);
    })
    .catch(error => console.log(error));
