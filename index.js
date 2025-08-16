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
let num1 = 10;
num1 = 20;
num1 = 30;
num1 = (num1 - (num1+num1) * num1)/num1; // B O D M A S

console.log(num1); //60 * 30 => 1800 - 30 = 1770 / 30
