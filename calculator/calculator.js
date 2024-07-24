const currentDisplay = document.querySelector(".current-display");
const previousDisplay = document.querySelector(".previous-display");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const clears = document.querySelector(".clear");
const deletes = document.querySelector(".delete");
const equals = document.querySelector(".equal");
const plus_minus = document.querySelector(".plusminus");
const percen = document.querySelector(".percentage");
let operation;

function appendNumber(number) {
    if (number === "." && currentDisplay.innerText.includes(".")) return;
    currentDisplay.innerText += number;
}

function chooseOperation(operand) {
    if (currentDisplay.innerText === "") return;
    if (previousDisplay.innerText !== "") {
        calc();
    }
    operation = operand;
    previousDisplay.innerText = currentDisplay.innerText + " " + operand;
    currentDisplay.innerText = "";
}

function clearDis() {
    currentDisplay.innerText = "";
    previousDisplay.innerText = "";
    operation = undefined;
}

function calc() {
    let result;
    const preValue = parseFloat(previousDisplay.innerText.split(" ")[0]);
    const curValue = parseFloat(currentDisplay.innerText);

    if (isNaN(preValue) || isNaN(curValue)) return;

    switch (operation) {
        case "+":
            result = preValue + curValue;
            break;
        case "-":
            result = preValue - curValue;
            break;
        case "x":
            result = preValue * curValue;
            break;
        case "/":
            result = preValue / curValue;
            break;
        default:
            return;
    }
    currentDisplay.innerText = result;
    operation = undefined;
    previousDisplay.innerText = "";
}

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        appendNumber(number.innerText);
    });
});

operations.forEach((operand) => {
    operand.addEventListener("click", () => {
        chooseOperation(operand.innerText);
    });
});

clears.addEventListener("click", () => {
    clearDis();
});

equals.addEventListener("click", () => {
    calc();
});

deletes.addEventListener("click", () => {
    currentDisplay.innerText = currentDisplay.innerText.slice(0, -1);
});

plus_minus.addEventListener("click", () =>{
    currentDisplay.innerText = currentDisplay.innerText * -1;
})

percen.addEventListener("click", () =>{
    currentDisplay.innerText = currentDisplay.innerText / 100;
})