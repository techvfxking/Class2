// --- Given Information ---
let numberOfNotebooks = 3;
let numberOfPens = 5;
let priceOfOneNotebook = 40;
let totalAmountPaid = 200;

// --- Question 1: What is the price of a single pen? ---

// First, calculate the total cost of the notebooks Arjun bought.
let totalCostOfNotebooks = numberOfNotebooks * priceOfOneNotebook; // 3 * 40 = 120

// Next, find the total amount spent on pens by subtracting the notebook cost from the total paid.
let totalCostOfPens = totalAmountPaid - totalCostOfNotebooks; // 200 - 120 = 80

// Finally, find the price of a single pen by dividing the total cost of pens by the number of pens.
let priceOfOnePen = totalCostOfPens / numberOfPens; // 80 / 5 = 16

console.log("The price of a single pen is: ₹" + priceOfOnePen);


// --- Question 2: How much would it cost to buy 4 notebooks and 4 pens? ---

// Calculate the cost of 4 notebooks.
let costOfFourNotebooks = 4 * priceOfOneNotebook; // 4 * 40 = 160

// Calculate the cost of 4 pens using the price we found earlier.
let costOfFourPens = 4 * priceOfOnePen; // 4 * 16 = 64

// Add the two costs together for the final total.
let newTotalCost = costOfFourNotebooks + costOfFourPens; // 160 + 64 = 224

console.log("The cost to buy 4 notebooks and 4 pens is: ₹" + newTotalCost);
