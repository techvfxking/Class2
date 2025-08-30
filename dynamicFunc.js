// Step1: For creating a function we need to type the `function` keyword.
// Step2: Then alongside that we need to write the function name. 
//        Example: function add => here "add" is the function name.
// Step3: Then we need to give the first brackets () after the function name. 
//        Inside these brackets we can define **parameters**.
//        - Parameters are like variables that receive values when the function is called.
//        - We can also define **optional parameters** by giving default values. 
//          Example: function greet(name = "Guest") { ... }
// Step4: After the first brackets, we use the second brackets {} which is called the **function body**.
//        - Inside the function body, we write the logic/code we want the function to perform.
//        - This is important because it defines what task the function will actually do.
// Step5: If needed, we use the `return` keyword inside the function body to send back a value.
//        - If no return is written, the function will return `undefined` by default.
// Step6: After defining the function, we need to **call the function** by writing its name with brackets.
//        Example: add(5, 10);  // here 5 and 10 are called **arguments** which are passed to parameters.
// Step7: Functions are very important in JavaScript because:
//        - They help us reuse code multiple times without rewriting it.
//        - They make code cleaner, modular, and easier to debug.
//        - They can take inputs (parameters) and give outputs (return values).

// Example:
function add(a, b) {          // here a and b are parameters
  return a + b;               // returns the sum
}

let result = add(5, 3);       // function call with arguments 5 and 3
console.log(result);          // output: 8

// ধাপ1: একটি ফাংশন তৈরি করতে হলে প্রথমে `function` কীওয়ার্ড লিখতে হবে।
// ধাপ2: এরপর এর পাশে ফাংশনের নাম লিখতে হবে।  
//        উদাহরণ: function add => এখানে "add" হলো ফাংশনের নাম।
// ধাপ3: ফাংশনের নামের পরে প্রথম বন্ধনী () ব্যবহার করতে হয়।  
//        এই বন্ধনীর ভেতরে আমরা **parameter** বা প্যারামিটার লিখতে পারি।  
//        - প্যারামিটার হলো ভেরিয়েবল, যেটি ফাংশন কল করার সময় মান (value) গ্রহণ করে।  
//        - আমরা চাইলে **ঐচ্ছিক প্যারামিটার (optional parameter)** ও দিতে পারি, অর্থাৎ ডিফল্ট মান নির্ধারণ করতে পারি।  
//          উদাহরণ: function greet(name = "অতিথি") { ... }
// ধাপ4: এরপর দ্বিতীয় বন্ধনী {} দিতে হয়, যেটি হলো **function body**।  
//        - ফাংশনের ভেতরে যে কাজটি করাতে চাই, সেটি এখানে লেখা হয়।  
//        - এটি গুরুত্বপূর্ণ কারণ ফাংশনের মূল কাজ এখানেই সংজ্ঞায়িত হয়।  
// ধাপ5: প্রয়োজনে ফাংশনের ভেতরে `return` কীওয়ার্ড ব্যবহার করা হয় মান ফেরত দেওয়ার জন্য।  
//        - যদি `return` না লেখা হয় তবে ফাংশন ডিফল্টভাবে `undefined` ফেরত দেয়।  
// ধাপ6: ফাংশন বানানোর পর এটিকে **কল (call)** করতে হয় নাম লিখে এবং বন্ধনী দিয়ে।  
//        উদাহরণ: add(5, 10);  // এখানে 5 এবং 10 হলো **argument** যা প্যারামিটারে পাঠানো হচ্ছে।  
// ধাপ7: ফাংশন জাভাস্ক্রিপ্টে খুবই গুরুত্বপূর্ণ কারণ:  
//        - এটি একই কোড বারবার ব্যবহার করতে সাহায্য করে।  
//        - কোডকে পরিষ্কার, ভাগ করা এবং সহজে ডিবাগ করা যায়।  
//        - ইনপুট (parameter) নিয়ে আউটপুট (return value) দিতে পারে।  

// উদাহরণ:
function addV1(a, b) {          // এখানে a এবং b হলো প্যারামিটার
  return a + b;               // যোগফল ফেরত দিচ্ছে
}

let resultV1 = addV1(5, 3);       // ফাংশন কল করা হলো 5 এবং 3 আর্গুমেন্ট দিয়ে
console.log(resultV1);          // আউটপুট: 8

// 📌 Parameter কী? (একজন নতুন কোড শিখছে এমনভাবে বোঝানো হলো)
// যখন আমরা একটি ফাংশন বানাই, তখন ফাংশনের নামের পরে প্রথম বন্ধনীর () ভিতরে কিছু নাম লিখতে পারি।  
// এই নামগুলোকে বলা হয় **parameter** (প্যারামিটার)।  
// 👉 সহজভাবে বললে: প্যারামিটার হলো একটা খালি বাক্স, যেখানে ফাংশন কল করার সময় আমরা মান (value) ভরে দিই।  
//
// উদাহরণ:
// function greet(name) {
//   console.log("Hello " + name);
// }
//
// এখানে `name` হলো parameter।
// যখন আমরা greet("Rahul") লিখি, তখন "Rahul" মানটা `name` নামের খালি বাক্সে ঢুকে যায়।  
//
// greet("Rahul");   // আউটপুট: Hello Rahul
// greet("Mita");    // আউটপুট: Hello Mita
//
// ✅ মনে রাখার বিষয়:
// - প্যারামিটার শুধু নাম (variable এর মতো) যা ফাংশন বানানোর সময় লেখা হয়।
// - যখন ফাংশন কল করি তখন যে আসল মান দিই সেটাকে বলা হয় **argument**।
//   উদাহরণ: greet("Rahul"); => এখানে "Rahul" হলো argument।




// 1. Number Comparator
// Write a function compareNumbers(numA, numB) that checks:

// If either parameter is missing or not a number, print “Missing or invalid input”.

// If both are valid, print “numA is greater than numB”, “numA is less than numB”, or “numA is equal to numB”.
// Use a helper function displayMessage(msg) for output.

function displayMessage(msg) {
    console.log(msg);
}

function compareNumbers(numA, numB) {
    // Implement the required logic here
    if (typeof numA !== "number" || typeof numB !== "number") {
        displayMessage("Missing or invalid input");
    } else {
        if (numA > numB) {
            displayMessage(`${numA} is greater than ${numB}`);
        } else if (numA < numB) {
            displayMessage(`${numA} is less than ${numB}`);
        }
        else {
            displayMessage(`${numA} is equal to ${numB}`);
        }
    }
}

//Call
// Example usage:
compareNumbers(10, 5);     // Outputs: "10 is greater than 5"
compareNumbers(3, 7);    // Outputs: "3 is less than 7"
compareNumbers("a", 2);    // Outputs: "Missing or invalid input"




//Problem 2
// function operations(num1, num2, op) {

//     const convertedNum1 = Number(num1);
//     const convertedNum2 = Number(num2);
//     const commonLogText = `The result of the euation is => ${num1} ${op} ${num2} = `;

//     if (num1 == undefined || num2 == undefined || op == undefined) {
//         logValue("Please enter all the valid parameters");
//     } else if (Number.isNaN(convertedNum1) || Number.isNaN(convertedNum2)) {
//         logValue("Please enter correct number value in num1 or num2");
//     } else {
//         if (op == "+") {
//             logValue(`${commonLogText} ${convertedNum1 + convertedNum2}`);
//         } else if (op == "-") {
//             logValue(`${commonLogText} ${convertedNum1 - convertedNum2}`);
//         } else if (op == "*") {
//             logValue(`${commonLogText} ${convertedNum1 * convertedNum2}`);
//         } else if (op == "/") {
//             logValue(`${commonLogText} ${convertedNum1 / convertedNum2}`);
//         } else {
//             logValue("Please enter a valid op type: from this section => '+' or '-' or '*' or '/'");
//         }
//     }
// }


function operations(num1, num2, op) {

    const commonLogText = `The result of the euation is => ${num1} ${op} ${num2} = `;
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof op !== 'string') {
        displayMessage("Please enter all the valid parameters");
    } else {
        if (op == "+") {
            displayMessage(`${commonLogText} ${num1 + num2}`);
        } else if (op == "-") {
            displayMessage(`${commonLogText} ${num1 - num2}`);
        } else if (op == "*") {
            displayMessage(`${commonLogText} ${num1 * num2}`);
        } else if (op == "/") {
            displayMessage(`${commonLogText} ${num1 / num2}`);
        } else {
            displayMessage("Please enter a valid op type: from this section => '+' or '-' or '*' or '/'");
        }
    }
}

operations("10", 12, "-");
operations(10, "12", "-");
operations(10, 12, 1);
operations(10, 12, "ab");

operations(125, 12, "-");

// Write a function repeatString(str, count) that:

// Validates both inputs: If either is missing or invalid (e.g., count is not a positive integer), print “Invalid parameters”.

// If valid, print the string repeated count times.
// Use a helper function displayMessage(msg) for output.



// 1. Simple Age Check
// Write a JavaScript function isAdult(age) that:

// Takes an age as input.

// Returns "Adult" if age is 18 or more.

// Returns "Minor" if age is less than 18.

// Use a helper function printOutput(msg) that logs the message to the console.

function printOutput(msg) {
    console.log(msg);
}

function isAdult(age){
    if (age >=18) {
        printOutput("Adult");
    } else {
        printOutput("Minor");
    }
}

isAdult(30);
isAdult(10);

// 2. Sum Two Numbers
// Write a function sumTwoNumbers(a, b) that:

// Accepts two numbers a and b.

// Calculates their sum and prints "Sum is: result".

// Use a helper logResult(msg) to output the result.

function logResult(msg) {
    console.log(msg);
}

function sumNumbers(a, b) {
    let result = a + b;
    logResult(`Sum is: ${result}`);
}

sumNumbers(10, 20)

// 3. Even Number Checker
// Write a function isEven(number) that:

// Takes one number as input.

// Prints "Even" if the number is even; otherwise, prints "Odd".

// Use a helper showMessage(msg) to display the output.

function showMessage(msg) {
    console.log(msg);
}

function isEven(number){
    if(number % 2 == 0) {
        showMessage("Even");
    } else {
        showMessage("Odd");
    }
}

isEven(20);
isEven(21);

// 4. Compare Two Numbers
// Write a function getLargerNumber(x, y) that:

// Takes two numbers x and y.

// Prints "x is larger", "y is larger", or "Both numbers are equal".

// Use helper function displayMsg(msg) for output.

function displayMsg(msg) {
    console.log(msg);
}

function largerNumber(x,y){
    if(x>y) {
        displayMsg(`x => ${x} is larger`);
    } else if (x<y) {
        displayMsg(`y => ${y} is larger`);
    }
    else {
        displayMsg("Both numbers are equal");
    }
}

largerNumber(10,50);
largerNumber(100,100);
largerNumber(25,10);

// 5. Multiply by Two
// Write a function doubleNumber(num) that:

// Multiplies the input number by 2.

// Prints the result with the message "Double of num is result".

// Use a helper function outputMessage(msg) to log the output.

function outputMessage(msg) {
    console.log(msg);
}

function doubleNumber(num){
    let result = num * 2;
    outputMessage(`Double of => ${num} is ${result}`);
}

doubleNumber(12);