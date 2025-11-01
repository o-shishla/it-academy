// даны 2 4-х значных числа с неповторяющимися цифрами,
// надо определить сколько цифр в этих числах совпадают по значению
// и позиции и сколько только по значению, но не по позиции (3487 и 3794 ---> 1 и 2 )

function checkNumbers(num1, num2){
    const arrayNum1 = num1.toString().split('').map(Number);
    const arrayNum2 = num2.toString().split('').map(Number);

    let exactMatches = 0;
    let sameNumber = 0;

    for(let i = 0; i < arrayNum1.length; i++){
        if(arrayNum1[i] === arrayNum2[i]){
            exactMatches++;
            console.log(exactMatches);

        }
            }

    for (let i = 0; i < arrayNum1.length; i++) {
        if (arrayNum1[i] !== arrayNum2[i] && arrayNum2.includes(arrayNum1[i])) {
            sameNumber++;
        }
    }


    console.log(`Number ${num1} matches in position and value with ${num2} ${exactMatches} time(s)`);
    console.log(`Number ${num1} matches only in value with ${num2} ${sameNumber} time(s)`);
}
checkNumbers(3487,3794);
