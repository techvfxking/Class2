//30/08/2025 - LOOPS
//Loop is control structure by which we can execute block of codes at certein times and execute the logic;

//Problem statement => Console Log the the 1 to 10 with like this
//Current Number is => 1
//Current Number is => 2
//.....
//....
//Current Number is => 10

//for loop, foreach loop, for of loop, for in loop, while loop and do while loop
//We will focus on for loop, while loop and do while loop

// function executeForLoop() {
//         //initial value   //Condition     incrementor/decrementor  
//     for (let i = 0;       i <= 10;        i = i * 2) {
//         console.log(`Current Number is => ${i}`);
//     }
// }

// executeForLoop();

//Operators
//Arithmetic Operators => +, -, *, /, %
//Assignment Operators => =, +=, -=, *=, /=, %=
//Comparison Operators => ==, ===, !=, !==, >, <, >=, <=
//Logical Operators => &&(AND), ||(OR), !(NOT)
//Ternary Operators => (condition) ? true : false 
  //
//Example of operators

// ## 1. Arithmetic Operators => +, -, *, /, %
let a = 10;
let b = 20;
let c = a + b;
// let d = a - b;
// let e = a * b;
// let f = a / b;
// let g = a % b;
// console.log(c); // 30
// console.log(d); // -10
// console.log(e); // 200
// console.log(f); // 0.5
// console.log(g); // 10

// ## 2. Assignment Operators => =, +=, -=, *=, /=, %=

/* 
    Ekhon c er value holo 30, amra chay er sathe aro 10 jog korte, tahole amra likhbo
    c + 10. Jodi eita amra directly console log kore di, tahole amra dekhte pabo 
    40. Becuase c er value ekhon 30. Ar amra jog korchi c + 10
    Kintu, amra directly console log kore c + 10 korbo na. Becuase amra directly chay je c take console log korte
    So, jodio amra c + 10 kori na keno, c er value konodin change hobe na, becuase amra c er modhee value ta abar reassign korchi na
    tahole solution =>
    
    jekhane ekhon c er modhee je value chilo 30 seita amra overwrite kore notun value add korchi
    tai equal to (=) sign er por amara c + 10 korchi.
    Mane c er value to already 30 chilo, so or sathe aro notun kore 10 add korchi and ekhon abar c erei modhee oitake overwrite korchi
    c = c + c + 10;
    c = c + c - 10;

    c = c + 10; => c += 10; 40
    c = c - 10; => c -= 10; 30
    c = c * 10; => c *= 10; 
    c = c / 10; => c /= 10;


*/
//c += 10;
// c += 10 + c; // => c = c + 10 + c
// console.log(c); // 40 

// c -= 10 - c; // => c = c - 10 - c
// console.log(c); // 30

// c *= 10; 
// console.log(c); // 300

// c /= 10; 
// console.log(c); // 30

// c %= 10; 
// console.log(c); // 0

// //c = c + 10

// ## 3. Comparison Operators => ==, ===, !=, !==, >, <, >=, <=
    // console.log(a == b);
    // console.log(a == '10');
    // console.log(a === '10');
    // console.log(a === 10);

    // console.log(a != b);
    // console.log(a != '10');
    // console.log(a !== '10');

    // console.log(a != b); // true
    // console.log(a < b); // true
    // console.log(a > b); // false
    // console.log(a <= b); // true
    // console.log(a >= b); // false
    // console.log(a === b); // false
    // console.log(a !== b); // true
    
// console.log(a < b && a != b); // true
// console.log(a < b || a == b); // true
// console.log(!(a < b)); // false
// let result = (a < b) ? "a is less than b" : "a is not less than b";
// console.log(result); // a is less than b
// let result2 = (a > b) ? "a is greater than b" : "a is not greater than b";
// console.log(result2); // a is not greater than b
// let result3 = (a == b) ? "a is equal to b" : "a is not equal to b";
// console.log(result3); // a is not equal to b    