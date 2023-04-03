const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");

// 3 variable
let prevNumber = ""
let calculatorOperator = ""
let currentNumber = "0"

// Mengambil nilai number
numbers.forEach(number => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value)
        updateScreen(currentNumber);
    })
})

// Merubah nilai ke screen
const updateScreen = (number) => {
    calculatorScreen.value = number
}

// Memberikan number ke currentNumber
const inputNumber = (number) => {
    if (currentNumber === "0") {
        currentNumber = number
    } else {
        currentNumber += number
    }
}

// Mengambil nilai dari operator
operators.forEach(operator => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

// Memindahkan nilai ke operator
const inputOperator = (operator => {
    if (calculatorOperator === "") {
        prevNumber = currentNumber;
    }
    calculatorOperator = operator;
    currentNumber = "0"
})

// Menambahkan logika pada tombol =
equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
})

// Membuat function calculation
const calculate = () => {
    let result = ""
    switch (calculatorOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        case "%":
            result = parseFloat(prevNumber) % parseFloat(currentNumber);
            break;
        default:
            break;
    }
    currentNumber = result;
    calculatorOperator = "";
}

// Fungsi untuk mereset nilai
clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
})

// Fungi reset
const clearAll = () => {
    prevNumber = "";
    calculatorOperator = "";
    currentNumber = "0";
}

// Kalkulasi decimal
decimal.addEventListener("click", () => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

// Menambahkan titik pada currentNumber
inputDecimal = (dot) => {
    if (currentNumber.includes(".")) {
        return
    }
    currentNumber += dot
}
