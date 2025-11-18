//Напишите программу для печати таблицы умножения в консоли для чисел от 1 до
// 10 со следующими дополнительными требованиями:
// Программа должна печатать таблицу умножения в выровненном формате
// (например, таблица со строками и столбцами).
// Таблица должна отображать результаты для чисел от 1 до 10, умноженных на 1 до
// 10 (т. е. таблица 10x10).
// После печати таблицы умножения программа должна также печатать сумму каждой
// строки и столбца.
// Программа должна позволять пользователю вводить пользовательский диапазон
// чисел (например, от 1 до n, где n может быть любым числом, указанным
// пользователем).
//
// Программа должна печатать общую сумму всех значений в таблице после печати
// таблицы.
// Обрабатывать крайние случаи, например, когда пользователь вводит значение
// меньше 1 (должно отображаться сообщение об ошибке или сообщение).
// Если пользователь вводит нецелое значение для n, программа должна отображать
// предупреждение и запрашивать допустимое число.

function table(num) {
    if (!Number.isInteger(num)) {
        console.log(`Your number is not integer. Please, enter a valid number from 1 to 10.`);
    } else if (num < 1 || num > 10) {
        console.log(`Your number is out of range. Please, enter a number from 1 to 10.`);
    } else {
        let result = "";
        let sumOfRows = 0;
        let arraySumOfRows = []
        let sumOfColumns = 0;
        let arraySumOfColumns = []

        for (let i = 1; i <= num; i++) { //формируем таблицу построчно
            result += i + "|" + " ";
            for (let j = 1; j <= num; j++) {
                result += j * i + " ";
                sumOfRows += j * i; // считаем сумму строк и колонок, это таблица-квадрат, поэтому суммы одинаковые
                sumOfColumns += j * i;
                if (j === num) {
                    result += "\n";
                    arraySumOfRows[i - 1] = sumOfRows;
                    sumOfRows = 0;
                    arraySumOfColumns[i - 1] = sumOfColumns;
                    sumOfColumns = 0;

                }

            }

        }
        console.log(result);
        let sumOfRowsBeautify = "";
        let sumOfColumnsBeautify = "";
        let totalSum = 0;
        for (let sum of arraySumOfRows) {
            sumOfRowsBeautify += sum + " ";
        }
        for (let sum of arraySumOfColumns) {
            sumOfColumnsBeautify += sum + " ";
            totalSum += sum;
        }
        console.log(`Sum of Rows: ${sumOfRowsBeautify}`);
        console.log(`Sum of Columns: ${sumOfColumnsBeautify}`);
        console.log(`Total Sum table: ${totalSum}`);
    }
}

table(10);