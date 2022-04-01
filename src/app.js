//Style for dev environment only
import style from './main.scss';

//Imports
import {    
    isDeleteButton,
    isComplexOperator,
    isEqualSign,
    isDecimalNumber,
    isFloatPoint,
    isOperator,
    isDigit,
} from './functions/regex.js';

//Variables
let inputZone = document.getElementById("input_zone");
let calculatorKeyboard = document.getElementById("calculator_keyboard");

let previousNumberElement = document.getElementById("previous_number");
let operatorSignElement = document.getElementById("operator_sign");
let latestNumberElement = document.getElementById("latest_number");
let equalSignElement = document.getElementById("equal_sign");

let maxDigitSize = 16;

//math functions
const sum = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

//Functions
let currentUserInputValue = '';
let currentUserInputClass = '';

/**
 * 
 * @param {string} rawValue 
 * @returns 
 */
const renderDisplayValue = rawValue => {
    return rawValue.replace('.', ',');
}

/** */
const renderCurrentCalcDisplayValue = rawValue => {
    return rawValue.replace('.', ',').replace(/,$/, '');
}

const displayNumberInInputZone = currentUserInputValue => {

    let rawValue = inputZone.dataset.value + currentUserInputValue;

    if (inputZone.dataset.type != "current" || (inputZone.dataset.value == "0" && !isFloatPoint(currentUserInputValue))){
        rawValue = currentUserInputValue;
        inputZone.dataset.type = "current";
    }

    let displayValue = renderDisplayValue(rawValue);

    inputZone.dataset.value = rawValue;
    inputZone.innerText = displayValue;
}

const displayDecimalNumber = currentUserInputValue => {
    if(isDecimalNumber(inputZone.dataset.value)){
        return;
    }
    displayNumberInInputZone(currentUserInputValue);
}

const calculate = () => {
    let firstOperand = parseFloat(previousNumberElement.dataset.value);
    let operatorSign = operatorSignElement.dataset.value;
    let secondOperand = parseFloat(inputZone.dataset.value);

    switch (operatorSign) {
        case "+":
            return sum(firstOperand, secondOperand);

        case "-":
            return subtraction(firstOperand, secondOperand);

        case "*":
            return multiplication(firstOperand, secondOperand);

        case "/":
            return division(firstOperand, secondOperand);
    
        default:
            break;
    }
}

const displayOperator = currentUserInputValue => {
    let rawValue = inputZone.dataset.value;
    
    if(previousNumberElement.innerText.length != 0 && inputZone.dataset.type != "temporary"){
        rawValue = calculate();
    }

    let displayValue = renderCurrentCalcDisplayValue(rawValue.toString());

    previousNumberElement.dataset.value = rawValue;
    previousNumberElement.innerText = displayValue;

    inputZone.dataset.type = "temporary";
    operatorSignElement.dataset.value = currentUserInputValue;
    operatorSignElement.innerText = currentUserInputValue;
}

const treatUserInput = (currentUserInputValue, currentUserInputClass) => {
    /* console.log(currentUserInputValue + currentUserInputClass); */
    if(isDigit(currentUserInputValue) && currentUserInputClass === "numeric" && inputZone.dataset.value.length < 16) {
        displayNumberInInputZone(currentUserInputValue);
    }

    if(isFloatPoint(currentUserInputValue) && currentUserInputClass === "float_point" && inputZone.dataset.value.length < 16) {
        displayDecimalNumber(currentUserInputValue);
    }

    if(isOperator(currentUserInputValue) && currentUserInputClass === "operator"){
        displayOperator(currentUserInputValue);
    }
}

//Main script
try {
    //Listen for mouse input value
    calculatorKeyboard.addEventListener("click", (event) => {
        currentUserInputValue = event.target.getAttribute("data-value");
        currentUserInputClass = event.target.getAttribute("data-class");
        treatUserInput(currentUserInputValue, currentUserInputClass);
    });

    //Listen for user keyboard input value
    document.addEventListener("keydown", event => {
        if(isDigit(event.key)){
            currentUserInputValue = event.key;
            currentUserInputClass = "numeric";
        }
        else if(isOperator(event.key)){
            currentUserInputValue = event.key;
            currentUserInputClass = "operator";
        }
        else if(isFloatPoint(event.key)){
            currentUserInputValue = ".";
            currentUserInputClass = "float_point";
        }
        else if(isEqualSign(event.key)){
            currentUserInputValue = "=";
            currentUserInputClass = "equal_sign";
        }
        else if(isComplexOperator(event.key)){
            currentUserInputValue = event.key;
            currentUserInputClass = "complex_operator";
        }
        else if(isDeleteButton(event.key)){
            switch (event.key) {
                case "Backspace":
                    currentUserInputValue = "clear_last";
                    break;
            
                case "Delete":
                    currentUserInputValue = "clear_error";
                    break;

                case "Escape":
                    currentUserInputValue = "clear_all";
                    break;
            
                default:
                    break;
            }
            currentUserInputClass = "delete_button";
        }
        else {
            console.log(`Not a workable key: ${event.key}`);
        }
        treatUserInput(currentUserInputValue, currentUserInputClass);
    });
    

} 

catch (error) {
    inputZone.textContent = "ERROR";
    inputZone.dataset.type = "error";
    console.log(error);
}
