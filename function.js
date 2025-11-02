function displayData(data) {
    console.log(data);
}

function addition(a, b, c) {
    if (a === undefined || b === undefined || c === undefined) {
        displayData("Please enter all the values");
        return;
    }

    displayData("The addition is: " + (a + b + c));
}

addition(10, 5, 10);

/* 
    D. R. Y

    Do not Repeat Yourself
*/