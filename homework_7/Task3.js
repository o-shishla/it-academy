// Написать функцию которая подсчитывает количество Пятниц 13-ого с любой заданной даты в прошлом до сегодня.
// Ваш код должен иметь возможность считать количество дней на любую заданую в переменной первоначальную дату и
// считать верно через 10-15-20 лет (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date )

function quantityOfFriday13(date) {
    const startDate = new Date(date);
    const today = new Date();
    let counter = 0;

    while (startDate <= today) {
        const year = startDate.getFullYear();
        const month = startDate.getMonth();

        const dateOf13 = new Date(year, month, 13);
        if (dateOf13 >= startDate && dateOf13 <= today && dateOf13.getDay() === 5) {
            counter++;

        }
        startDate.setMonth(startDate.getMonth() + 1);
    }
    return counter;
}

const date = new Date("November 20, 2020 00:20:18");
console.log(quantityOfFriday13(date));