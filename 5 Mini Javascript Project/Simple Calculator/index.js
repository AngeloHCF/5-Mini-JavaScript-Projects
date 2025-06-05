const containter = document.querySelector('.calculator');
const multiply = document.querySelector('.multiply');
const divide = document.querySelector('.divide');
const minus = document.querySelector('.minus');
const add = document.querySelector('.add');
const operator = document.querySelectorAll('.operator');
const equal = document.querySelector('.equal');
const showCalc = document.querySelector('.message');



let numberButtons = 10;

for(let i = 1; i < numberButtons; i++) {
    const button = document.createElement('button');
    button.textContent = i;
    button.className = 'numbers';
    
    containter.appendChild(button);
}

const zeroButton = document.createElement('button');
zeroButton.textContent = 0;
zeroButton.style.gridColumn = '2';
zeroButton.className = 'numbers';
containter.appendChild(zeroButton);

const buttons = document.querySelectorAll('.numbers');

let numberOne = '';
let numberTwo = '';

let cycleThrough = false;

buttons.forEach(button => {
    button.onclick = () => {
        if(!cycleThrough && !operatorSelected) {
            numberOne += button.textContent;
        } else if(cycleThrough && operatorSelected) {
            numberTwo += button.textContent;
        }
    }
})

equal.onclick = function() {
     numberTwo = Number(numberTwo);
    calculate();
}

let multiplyC = (x, y) => x * y;
let divideC = (x, y) => x / y;
let minusC = (x, y) => x - y;
let addC = (x, y) => x + y;

let answer = 0;

function calculate() {
    if(operatorSelected && typeof numberOne === 'number' && typeof numberTwo == 'number') {
        if(operatorUsage == 'x') {
            answer = `${multiplyC(numberOne, numberTwo)}`
        } else if(operatorUsage == '/') {
            answer = `${divideC(numberOne, numberTwo)}`
        } else if(operatorUsage == '-') {
            answer = `${minusC(numberOne, numberTwo)}`
        } else if(operatorUsage == '+') {
            answer = `${addC(numberOne, numberTwo)}`
        }
        showMessage();
    } else if(!numberOne || !numberTwo) {
        console.log('you need to select two numbers!')
    } else if(!operatorSelected) {
        console.log('you need to select an operator!')
    }
}

function showMessage() {
    showCalc.innerHTML = answer;
    numberOne = '';
    numberTwo = '';
    operatorSelected = false;
    cycleThrough = false;
}
let calcOperator;
let operatorUsage;
let operatorSelected = false;


operator.forEach(button => {
    button.onclick = () => {
        if(!operatorSelected && numberOne) {
            numberOne = Number(numberOne);
            cycleThrough = true;
            operatorSelected = true;
        } else {
            operatorUsage = button.textContent;

        }
        operatorUsage = button.textContent;
    }
})

