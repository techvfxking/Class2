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

function executeForLoop() {
        //initial value   //Condition     incrementor/decrementor  
    for (let i = 0;       i <= 10;        i = i * 2) {
        console.log(`Current Number is => ${i}`);
    }
}

executeForLoop();