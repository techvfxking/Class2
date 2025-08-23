//10-08-2025 - Class 1
/** 
 * To Store Data permanently in way which is non-volatile that is called permanent storage.
 * To store data in volatile way or in memory only that is actually a variable
 */

/**
 * In javascript we can define the variable in three different way, 
 * 1. using var
 * 2. using let
 * 3. using const
 * 
 * var: ##Disclaimer This should not be used anywhere in Javascript from 2015 JS community or ECMAScript has forced us to do so.
 *      This works on global level variable. Suppose I want to declare something on a global level that is where I will use var
 * let: This works on a scope level variable. 
 * const: This works also on scope level variable
 * 
 * let: You can change the assigned value after declaring this 
 * const: You cannot change the assigned value after declaring this.
 * 
 * ##: While, Declaring let you can leave it without defining the value
 *     But you can't leave the const without defining the value
 */

// var joy = 1;
// var joy = "Joy";
// var joy = true;
// var joy = 1.1;
// var joy = "J";
// var joy = ["Joy", "J", 1, 1.0];

// let joy = 1; // <--- Global Scope

// const funct = () => { // <--- Local Scope
//     let joy_ = "Joy";
//     console.log(joy);
// console.log(joy_)};

// console.log(joy);
// funct();

/**
 * let is variable keyword
 * num1 is variable name
 * 10 is the variable value
 * 
 * all total called variable
 */
// let num1 = 10;
// num1 = 20;
// num1 = 30;
// num1 = (num1 - (num1+num1) * num1)/num1; // B O D M A S

// console.log(num1); //60 * 30 => 1800 - 30 = 1770 / 30


//17-08-2025 - Class 2
/**
 * So a vraible that need to be declared and define/initialized when writing
 * 
 * That variable cannot be changed
 * 
 * That is known as constant
 */
// const name_ = "Joy";
// const name__ = "l";
// console.log(name_);

// /**Difference between const and let & var */
// var abc; // <- You have declared the abc variable using var keyword
// abc = "abc"; // <- You have defined/initialized the abc variable
// console.log(abc);

// let def; // <- You have declared the abc variable using let keyword
// def = "def"; // <- You have defined/initialized the abc variable
// console.log(def);


// const ghi = "ghi"; //'const' declarations must be initialized.

/**
 * Types of Data: number, bigint, string, boolean, null, undefined, object, symbol, function, array
 */

//Number/number and Bigint with dynamic Bigint declartion and dynamic Number declartion

// let _num2 = -0.1; //Nagetive Floating Number => Decimal Value or Double Value
// let num1 = 0; //Whole Number => integer
// let num2 = 0.1; //Postive Floating Number => Decimal Value or Double Value
// let num3 = 10n; //Big Integer => bigint
// let num4 = 100;
// let num5 = BigInt(num4);
// let num6 = Number(num5);
// let strNum1 = "100";
// let strNum1_ = "100.56"
// let strNum2 = 100;

// //Wrong Value conversion try
// let strVlaue = "JOY";
// console.log(`trying ParseINT: ${parseInt(strVlaue)}`); //It will result in NaN mean not a number;
// console.log(`trying ParseFloat: ${parseFloat(strVlaue)}`); //It will result in NaN mean not a number;
// console.log(`trying Number: ${Number(strVlaue)}`); //It will result in NaN mean not a number;

// //console.log(strNum1 + strNum2);
// //console.log(typeof strNum);

// //Process1
// let converted1 = parseInt(strNum1); //Casting or converting by parseInt() function
// console.log(converted1 + strNum2);

// let converted1_ = parseFloat(strNum1_); //Casting or converting by parseFloat() function
// console.log(converted1_ + strNum2);

// //Process2
// let converted2 = Number(strNum1);
// console.log(converted2 + strNum2);

// let converted2_ = Number(strNum1_);
// console.log(converted2_+ strNum2);

// //Number Calculaion with Division and Remainder
// let sec = 2560;
// let minute = (sec/60);
// let minutesRemainder = (sec%60);

// //This part shows that a string concatination with variable
// console.log(`3600: is known as ${minute} Minute and ${minutesRemainder} Second`); //String concatination

// //String/string and string concatination
// let str1 = "J";
// let str2 = "O";
// let str3 = "Y";

// //Process 1:
// console.log("Process 1");
// console.log(str1.concat(str2," ",str3));

// //Process 2:
// console.log("Process 2");
// console.log(str1 +" "+ str2 + str3);

// //Process 3:
// console.log("Process 3");
// console.log(`${str1}_${str2}_${str3}_${new Date().toTimeString()}`); //Tilt


// //Boolean 
// //true/false
// let status = true;
// let status_ = false;

// console.log(typeof status_);

// let nulll = null;
// let undefff = undefined;

// let valuee;
// console.log(valuee);

//Object
/**
 * What is object?
 * In general language: A object is thing that can be seen and sometimes touched but is not alive.
 * 
 * In JavaScript, an objce is a complex data type that allows us for a storage and organization of data in structured manner.
 * It can be seen or understood as a collection of key-value pair.
 */

// let obj1 = {
//     num1: 100,
//     num2: 100.56,
//     name: "Joy",
//     status: true
// }
// let obj1 = {
//     "num1": 100,
//     "num2": 100.56,
//     "name": "Joy",
//     "status": true
// }
// //Object Destructing
// let {num1, num2} = obj1
// console.log(obj1.num1 + obj1.num2);
// console.log(num1 + num2);
// console.log(String(obj1.num1));

//Class 3 - 23/08/2025
//Functions/Method => Function or Method is a block of codes, or reusable logic of codes, by which we can execute and run our application further

// function print(){
//     console.log(`Hello Joy, do you know what is the date today? It is ${new Date()}`);
// }

// print();

// function add(num1, num2, num3, num4){
//     //const result = num1 + num2 + num3 + num4;
//     console.log(`The Result is: ${num1} ${num2} ${num3} ${num4}`);
// }

// add(12, 24, 10,12);


// // function

// function add(num1, num2){
//     console.log(`add two numbers ${num1 + num2}`);
// }

// add(10, 10);

// function subtraction(num1, num2){
//     console.log(`subtraction numbers ${num1 - num2}`);
// }
//  subtraction(50, 30);

//  function multiplication(num1, num2){
//     console.log(`multiplication two numbers ${num1 * num2}`);
//  }
//  multiplication(25, 25);

// function division(num1, num2){
//     console.log(`division two numbers ${num1 / num2}`);
// } 
// division(100, 25);


//If condition or Else If Condition or Else Condition
// let num1 = 10.5;
// if (num1 == 5) {
//     console.log("True")
// } else if (num1 == 10) {
//     console.log("Partially True");
// } else if (num1 == 10.5) {
//     console.log("Partially True1");
// } else {
//     console.log("False");
// }

function logValue(value) {
    console.log(value);
}

function operations(num1, num2, op) {

    // if (num1 == undefined) {
    //     console.log("Please enter num1");
    // } else if (num2 == undefined) {
    //     console.log("Please enter num2");
    // } else if (op == undefined) {
    //     console.log("Please type from this: '+' or '-' or '*' or '/' ");
    // } else {
    //     //console.log(`${num1} ${op} ${num2}`)
    // }

    const convertedNum1 = Number(num1);
    const convertedNum2 = Number(num2);
    const commonLogText = `The result of the euation is => ${num1} ${op} ${num2} = `;

    if (num1 == undefined || num2 == undefined || op == undefined) {
        logValue("Please enter all the valid parameters");
    } else if (Number.isNaN(convertedNum1) || Number.isNaN(convertedNum2)) {
        logValue("Please enter correct number value in num1 or num2");
    } else {
        if (op == "+") {
            logValue(`${commonLogText} ${convertedNum1 + convertedNum2}`);
        } else if (op == "-") {
            logValue(`${commonLogText} ${convertedNum1 - convertedNum2}`);
        } else if (op == "*") {
            logValue(`${commonLogText} ${convertedNum1 * convertedNum2}`);
        } else if (op == "/") {
            logValue(`${commonLogText} ${convertedNum1 / convertedNum2}`);
        } else {
            logValue("Please enter a valid op type: from this section => '+' or '-' or '*' or '/'");
        }
    }
}

operations(10,12,"-");


