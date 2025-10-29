//Написать функцию которая будет разбивать число на заданное количество рандомных чисел сумма которых
// будет равна изначальному числу. Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)
// - Ваш код должен работать с любым числом заданным в переменной (не только с 15)
// и с любым количеством частей на которые надо разбить число..
//а. числа изначальное число целое, числа разбивки - целые (4,6,5)
// б. числа разбивки дробные с 2 знаками после запятой 4.55, 5.20, 5.25)

function runFunctionDependingOnFlag(number, numOfParts, flag) {
    if (flag === "integer") {
        return divisionInteger(number, numOfParts);
    } else if (flag === "fractional") {
        return divisionFractional(number, numOfParts);
    } else {
        console.log("Wrong flag. Enter 'integer' or 'fractional'");
    }

}

function divisionInteger(number, numOfParts) {
    const result = [];
    let rest = number;
    for (let i = 0; i < numOfParts; i++) {
        if (i === numOfParts - 1) {
            result[i] = rest;
        } else {
            result[i] = Math.floor(Math.random() * (rest - (numOfParts - i - 1 + 1)) + 1);
            rest -= result[i];

        }

    }
    return result;

}

function divisionFractional(number, numOfParts) {
    const result = [];
    let rest = number * 100;
    for (let i = 0; i < numOfParts; i++) {
        if (i === numOfParts - 1) {
            result[i] = +(rest / 100).toFixed(2);
        } else {
            const numberInt = Math.floor(Math.random() * (rest - (numOfParts - i - 1)) + 1);
            result[i] = +(numberInt / 100).toFixed(2);
            rest -= numberInt;


        }

    }
    return result;
}

console.log(runFunctionDependingOnFlag(10878, 3, "nn"))