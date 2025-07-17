
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b === 0) {
        return undefined;
    }
    return a / b;
}

let firstOperand = "";
let secondOperand = "";
let operator = "";

const operate = (op, a, b) => {
    switch (op) {
        case "add":
            return add(a, b);
        case "subtract":
            return subtract(a, b);
        case "multiply":
            return multiply(a, b);
        case "divide":
            return divide(a, b);
        default:
            return undefined;
    }
}

const addNumberEvents = () => {
    const numberButtons = document.querySelectorAll(".number");
    for (const number of numberButtons) {
        number.addEventListener("click", (e) => {
            handleNumberClick(e);
            updateDisplay();
        });
    }
}

const handleNumberClick = (e) => {
    storeNumber(e.target.textContent);
}

const storeNumber = (number) => {
    if (!operator) {
        firstOperand += number;
    } else {
        secondOperand += number;
    }
}

const updateDisplay = (value) => {
    const display = document.querySelector(".result");
    if (value) {
        display.textContent = value;
    } else if (!operator) {
        display.textContent = firstOperand;
    } else {
        display.textContent = secondOperand;
    }
}

addNumberEvents();