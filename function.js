// function displayData(data) {
//     console.log(data);
// }

// function addition(a, b, c) {
//     if (a === undefined || b === undefined || c === undefined) {
//         displayData("Please enter all the values");
//         return;
//     }

//     displayData("The addition is: " + (a + b + c));
// }

// addition(10, 5, 10);

// /*
//     D. R. Y

//     Do not Repeat Yourself
// */

/* 
    Interview - Reverse a string
    
    Purpose: Takes a string and reverses its characters
    Input: A string (e.g., "Trump")
    Output: Reversed string (e.g., "pmurT")
    
    Logic explanation:
    1. Function accepts a string parameter with empty string as default value
    2. Creates an empty array to store characters in reverse order
    3. Loops through the string from end to beginning
    4. Collects each character and adds to array
    5. Joins all characters back together without separators
    6. Prints the final reversed string
*/

function reverseString(value = ""){ // Parameter 'value' with default empty string
    let resultArr = []; // Initialize empty array to store reversed characters
    
    // Loop from last character (length-1) to first character (0)
    for(let i = value.length - 1; i >= 0; i--){
        resultArr.push(value[i]); // Add each character to array in reverse order
    }
    
    // Join all characters together and print the reversed string
    console.log(resultArr.join(""));
}

// Test the function with the string "Trump"
reverseString("Trump");

