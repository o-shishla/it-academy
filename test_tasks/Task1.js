//Напишите функцию, которая принимает массив строковых представлений чисел и
// форматирует их в виде валюты (например, из "1234" в "$1,234.00". Функция
//должна корректно обрабатывать некорректные входные данные и возвращать для
//них понятную пользователю ошибку.

function currencyFormatting(array) {
    let counter = 0;
    let elementLength = array[counter].length;

    for (let i = 0; i < array.length; i++) {

        let stringToNum = Number(array[i]);
        if (Number.isInteger(stringToNum)) {
            let formatting = array[i].length < 7 ?
                array[i].slice(0, (elementLength - 3)) + "," + array[i].slice(-3) :
                array[i].slice(0, elementLength % 3 || 3) + "," + array[i].slice(-6, -3) + "," + array[i].slice(-3)
            console.log(`$${formatting}.00`);

        } else if (!Number.isInteger(stringToNum) && !isNaN(stringToNum)) {
            console.log(`$${stringToNum}`);
        } else {
            console.log("Your input is not a number");
        }

    }
    counter++;

}

currencyFormatting(["123400000", "56.66", "Error"])


//Потом я узнала, что есть отдельный метод для этого

function localeFormatting(array2) {
    for (let i = 0; i < array2.length; i++) {
        if (isNaN(array2[i])) {
            console.log("Your input is not a number");
        } else {
            let stringToNum = Number(array2[i]);
            const currencyNum = stringToNum.toLocaleString('en-US', {
                style: "currency",
                currency: "USD"
            })
            console.log(currencyNum);
        }
    }

}

localeFormatting(["123400000", "56.66", "Error"])