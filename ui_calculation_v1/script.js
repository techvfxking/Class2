function logValue(value) {
    return value;
}

function operations(num1, num2, op) {

    const convertedNum1 = Number(num1);
    const convertedNum2 = Number(num2);
    const commonLogText = `The result of the euation is => ${num1} ${op} ${num2} = `;

    if (num1 === undefined || num2 === undefined || op === undefined) {
        return logValue("Please enter all the valid parameters");
    } else if (Number.isNaN(convertedNum1) || Number.isNaN(convertedNum2)) {
        return logValue("Please enter correct number value in num1 or num2");
    } else {
        if (op === "+") {
            return logValue(`${commonLogText} ${convertedNum1 + convertedNum2}`);
        } else if (op === "-") {
            return logValue(`${commonLogText} ${convertedNum1 - convertedNum2}`);
        } else if (op === "*") {
            return logValue(`${commonLogText} ${convertedNum1 * convertedNum2}`);
        } else if (op === "/") {
            return logValue(`${commonLogText} ${convertedNum1 / convertedNum2}`);
        } else {
            return logValue("Please enter a valid op type: from this section => '+' or '-' or '*' or '/'");
        }
    }
}

function main() {
    const btnElem = document.getElementById("submit");
    btnElem.addEventListener("click", function (ev) {
        ev.preventDefault();
        const num1Elem = document.getElementById("num1");
        const num2Elem = document.getElementById("num2");
        const opElem = document.getElementById("op");

        const resultElem = document.getElementById("result");

        resultElem.innerText = `Result is: ${operations(num1Elem.value, num2Elem.value, opElem.value)}`;
    });

}

main();