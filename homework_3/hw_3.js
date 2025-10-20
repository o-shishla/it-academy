let str = "Hello";
let bool = true;
let num = 123;
let numInString = "345";

function add(){
    console.log("String (" + str + ") + Boolean (" + bool + ") = " + (str + bool)
        + ", type of result is " + typeof(str + bool));
    console.log("String (" + str + ") + Number (" + num + ") = " + (str + num)
        + ", type of result is " + typeof(str + num));
    console.log("Number (" + num + ") + Boolean (" + bool + ") = " + (num + bool)
        + ", type of result is " + typeof(num + bool));
}

function multiply(){
    console.log("String (" + str + ") * Boolean (" + bool + ") = " + (str * bool)
        + ", type of result is " + typeof(str * bool));
    console.log("String (" + str + ") * Number (" + num + ") = " + (str * num)
    + ", type of result is " + typeof(str * num));
    console.log("Number (" + num + ") * Boolean (" + bool + ") = " + (num * bool)
    + ", type of result is " + typeof(num * bool));
}

function divide(){
    console.log("String (" + str + ") / Boolean (" + bool + ") = " + (str / bool)
    + ", type of result is " + typeof(str / bool));
    console.log("String (" + str + ") / Number (" + num + ") = " + (str / num)
    + ", type of result is " + typeof(str / num));
    console.log("Number (" + num + ") / Boolean (" + bool + ") = " + (num / bool)
    + ", type of result is " + typeof(num / bool));
}

function cast(){
    console.log("String " + str + " to number is : " + Number(str));
    console.log("Boolean " + bool + " to number is : " + Number(bool));
    console.log("Number in String " + numInString + " to number is : " + parseInt(numInString, 10) + " and "
        + (+numInString));
    console.log("");

    console.log("Boolean " + bool + " to string is : " + String(bool));
    console.log("Number " + num + " to string is : " + (num).toString());
    console.log("");

    console.log("String " + str + " to boolean is : " + Boolean(str));
    console.log("Number " + num + " to boolean is : " + Boolean(num));
}

add();
console.log("");
multiply();
console.log("");
divide();
console.log("");
cast();