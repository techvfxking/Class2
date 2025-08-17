// // --- Given Information ---
// const numberOfNotebooks = 3;
// const numberOfPens = 5;
// const priceOfOneNotebook = 40;
// const totalAmountPaid = 200;

// // --- Question 1: What is the price of a single pen? ---

// // First, calculate the total cost of the notebooks Arjun bought.
// let totalCostOfNotebooks = numberOfNotebooks * priceOfOneNotebook; // 3 * 40 = 120

// // Next, find the total amount spent on pens by subtracting the notebook cost from the total paid.
// let totalCostOfPens = totalAmountPaid - totalCostOfNotebooks; // 200 - 120 = 80

// // Finally, find the price of a single pen by dividing the total cost of pens by the number of pens.
// let priceOfOnePen = totalCostOfPens / numberOfPens; // 80 / 5 = 16

// console.log("The price of a single pen is: ₹" + priceOfOnePen);


// // --- Question 2: How much would it cost to buy 4 notebooks and 4 pens? ---

// // Calculate the cost of 4 notebooks.
// let costOfFourNotebooks = 4 * priceOfOneNotebook; // 4 * 40 = 160

// // Calculate the cost of 4 pens using the price we found earlier.
// let costOfFourPens = 4 * priceOfOnePen; // 4 * 16 = 64

// // Add the two costs together for the final total.
// let newTotalCost = costOfFourNotebooks + costOfFourPens; // 160 + 64 = 224

// console.log("The cost to buy 4 notebooks and 4 pens is: ₹" + newTotalCost);


//### Question Set 3: Ratios & Sharing

// Rina and Tina are given a project with 100 tasks to complete.
// They decide to divide the tasks in a ratio of 2:3.
// Rina works faster, so she takes the smaller share of the tasks.
//
// How many tasks does Rina have to complete?
// How many tasks does Tina have to complete?

// //Total Tasks
// let totalTasks = 100;

// // Ratio for Rina and Tina
// let rinaRatio = 2;
// let tinaRatio = 3;

// // Total Ratio
// let totalRatio = tinaRatio + rinaRatio;

// //Value for one part
// let oneValue = totalTasks / totalRatio;

// // Task for each
// let rinaTask = rinaRatio * oneValue;
// let tinaTask = tinaRatio * oneValue;

// console.log(rinaTask);
// console.log(tinaTask);


//### Question Set 5: Logic & Averages

// A student scores 75, 80, and 92 in three different subjects.
// To get an average score of 85, the student needs to take a fourth test.
//
// What is the student's total score in the first three subjects?
// What score must the student get on the fourth test to achieve an average of 85?

// let studentMarks = {
//     sub1: 75,
//     sub2: 80,
//     sub3: 92,
//     sub4: 0
// }

// let totalFirstThree = studentMarks.sub1 + studentMarks.sub2 + studentMarks.sub3;
// let desiredAvg = 85;
// let totalSub = 4;

// let requiredTotal = desiredAvg * totalSub;
// studentMarks.sub4 = requiredTotal - totalFirstThree;

// console.log(studentMarks.sub4);
// console.log(totalFirstThree);
// console.log(requiredTotal);