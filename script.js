
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const symbols = {
    "add": "+",
    "subtract": "-",
    "multiply": "x",
    "divide": "÷"
}

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
        number.addEventListener("click", handleNumberClick);
    }
}

const handleNumberClick = (e) => {
    storeNumber(e.target.textContent);
    updateDisplay();
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
    scrollDisplay();
}

const scrollDisplay = () => {
    const display = document.querySelector(".result");
    if (display.scrollWidth > display.clientWidth) {
        display.scrollLeft = display.scrollWidth;
    }
}

const addOperatorEvents = () => {
    const operatorButtons = document.querySelectorAll(".operator");
    for (const button of operatorButtons) {
        button.addEventListener("click", handleOperatorClick);
    }
}

const handleOperatorClick = (e) => {
    if (!firstOperand) {
        return;
    }
    operator = e.target.id;
    updateDisplay(symbols[operator]);
}

const addEqualsEvent = () => {
    const equalsButton = document.querySelector("#equals");
    equalsButton.addEventListener("click", handleEqualsClick);
}

const handleEqualsClick = (e) => {
    if (!secondOperand) {
        return;
    }
    const firsValue = Number(firstOperand);
    const secondValue = Number(secondOperand);
    const result = operate(operator, firsValue, secondValue);
    if (Number.isNaN(result)) {
        updateDisplay("Invalid Operation");
        reset();
    } else {
        reset();
        firstOperand = String(result);
        updateDisplay();
    }
}

const reset = () => {
    firstOperand = "";
    secondOperand = "";
    operator = "";
}

addNumberEvents();
addOperatorEvents();
addEqualsEvent();