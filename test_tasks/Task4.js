//Напишите функцию isPalindrome, которая проверяет, является ли заданная строка
// палиндромом. Палиндром — это слово, фраза или последовательность, которые
// читаются одинаково как в прямом, так и в обратном порядке (без учета пробелов,
// знаков препинания и регистра). Игнорируйте пробелы и знаки препинания, а строки
// из одного символа следует считать палиндромами (например, "a")

function isPalindrome(string){
    let stringJoined = string.split(' ').join('').toLowerCase();
    let reversedStringJoined = stringJoined.split("").reverse().join("");
    if (!string || string.trim() === ""){
        console.log(`"${stringJoined}" is empty`);

    } else if(reversedStringJoined === stringJoined){
        console.log(`"${string}" is palindrome`);
    }else{
        console.log(`"${string}" is not palindrome`);
    }
}

isPalindrome(" ");
isPalindrome("a");
isPalindrome("А роза упала на лапу Азора");
