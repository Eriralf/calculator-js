const outResult = document.getElementById("display-result");
const btnNumbers = document.querySelectorAll("#number");

class Calculator {
    constructor(outResult) {
        this.outResult = outResult;
        this.currentOperation = "";
    }
    addDigit(digit) {
        if (digit === "." && this.outResult.innerText.includes(".")) {
            return;
        }
        console.log(digit);
        this.currentOperation = digit;
        this.updateScreen();
    }
    updateScreen() {
        this.outResult.innerText += this.currentOperation;
    }
    addOperations(operations) {
        if (this.outResult.innerText.length >= 1) {
            const lastChar =
                this.outResult.innerText[this.outResult.innerText.length - 1];
            if (
                lastChar === "+" ||
                lastChar === "-" ||
                lastChar === "*" ||
                lastChar === "/" ||
                lastChar === "%"
            ) {
                this.outResult.innerText = this.outResult.innerText.slice(0,-1);
            }
        }
        console.log(operations);
        this.currentOperation = operations;
        this.updateScreen();
    }
    addResult() {
        if (this.outResult.innerText.charAt(0) === "0") {
            this.outResult.innerText = this.outResult.innerText.slice(1);
        }
        if (this.outResult.innerText) {
            this.outResult.innerText = Number(eval(outResult.innerText));
            console.log(this.outResult.innerText);
        } else {
            console.log("Ivalid Operation");
            this.outResult.textContent = "";
        }
    }
}
const calc = new Calculator(outResult);
btnNumbers.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        if (+value >= 0 || value === ".") {
            calc.addDigit(value);
        } else if (value === "=") {
            calc.addResult(value);
        } else {
            calc.addOperations(value);
        }
    });
});

function backOneResult() {
    let resultado = outResult.textContent;
    let newTxt = resultado.substring(0, resultado.length - 1);
    outResult.textContent = newTxt;
    console.log(newTxt);
}
const backResult = document.getElementById("back-result");
backResult.addEventListener("click", backOneResult);

function cleanResult() {
    Number((outResult.textContent = ""));
    console.log("Clear All");
    console.clear();
}
const btnResult = document.getElementById("clear-all-result");
btnResult.addEventListener("click", cleanResult);
