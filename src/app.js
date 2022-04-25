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

/** 
 * 
 * @param {string} rawValue 
 * @returns
 */
const renderCurrentCalcDisplayValue = rawValue => {
    return rawValue.replace('.', ',').replace(/,$/, '');
}

const erasePreviousCalculation = () => {
    previousNumberElement.innerText = "";
    previousNumberElement.dataset.value = "";

    operatorSignElement.innerText = "";
    operatorSignElement.dataset.value = "";

    latestNumberElement.innerText = "";
    latestNumberElement.dataset.value = "";
    
    equalSignElement.innerText = "";
    equalSignElement.dataset.value = "";
}

const clearInputZone = () => {
    inputZone.innerText = 0;
    inputZone.dataset.value = 0;
    inputZone.dataset.type = "current";
}

const clearError = () => {
    if(inputZone.dataset.type == "result"){
        erasePreviousCalculation();
    }
    clearInputZone();
}

const clearAll = () => {
    erasePreviousCalculation();
    clearInputZone();
}

const clearLast = () => {
    if(inputZone.dataset.type == "result"){
        erasePreviousCalculation();
        return;
    }
    
    let valueToClear = inputZone.dataset.value;
    let rawValue = "0";

    if(valueToClear.length > 1){
        console.log(valueToClear.length);
        rawValue = valueToClear.replace(/.$/, '');        
    }

    let displayValue = renderDisplayValue(rawValue);

    inputZone.dataset.value = rawValue;
    inputZone.innerText = displayValue;
}

const displayNumberInInputZone = currentUserInputValue => {

    let rawValue = inputZone.dataset.value + currentUserInputValue;

    if ( inputZone.dataset.type != "current" || (inputZone.dataset.value == "0" && !isFloatPoint(currentUserInputValue)) ){
        if(inputZone.dataset.type == "result" && equalSignElement.innerText == "="){
            erasePreviousCalculation();
        }

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
    //Erase previous calculation result
    if(inputZone.dataset.type == "result"){
        erasePreviousCalculation();
        inputZone.dataset.type = "current";
        inputZone.dataset.value = 0;
        inputZone.innerText = 0;
    }
    displayNumberInInputZone(currentUserInputValue);
}

const calculate = () => {
    let firstOperand = parseFloat(previousNumberElement.dataset.value);
    let operatorSign = operatorSignElement.dataset.value;
    let secondOperand = parseFloat(latestNumberElement.dataset.value);

    switch (operatorSign) {
        case "+":
            return sum(firstOperand, secondOperand);

        case "-":
            return subtraction(firstOperand, secondOperand);

        case "*":
            return multiplication(firstOperand, secondOperand);

        case "/":
            if(secondOperand == 0){
                inputZone.textContent = "GO BACK TO SCHOOL";
                inputZone.dataset.type = "error";
                erasePreviousCalculation();
                break;
            }
            return division(firstOperand, secondOperand);
    
        default:
            break;
    }
}

const displayEqualSign = currentUserInputValue => {

    let rawValue = inputZone.dataset.value;
    let displayValue = renderCurrentCalcDisplayValue(rawValue.toString());

    if(equalSignElement.innerText.length == 0) {
        latestNumberElement.dataset.value = rawValue;
        latestNumberElement.innerText = displayValue;
    }

    if(previousNumberElement.innerText.length == 0){
        inputZone.dataset.value = rawValue;
        inputZone.innerText = displayValue;
    }
    else if(operatorSignElement.innerText.length != 0) {
        if(equalSignElement.innerText.length != 0) {
            previousNumberElement.dataset.value = rawValue;
            previousNumberElement.innerText = displayValue;
        }

        let rawResult = calculate();
        let displayResult = renderDisplayValue(rawResult.toString());

        inputZone.dataset.value = rawResult;
        inputZone.innerText = displayResult;
    }

    equalSignElement.dataset.value = currentUserInputValue;
    equalSignElement.innerText = currentUserInputValue;
    inputZone.dataset.type = "result";

}

const displayOperator = currentUserInputValue => {

    let rawValue = inputZone.dataset.value;
    let rawValueIsCalculated = false;

    //Erase previous calculation
    if(inputZone.dataset.type == "result" && equalSignElement.innerText == "="){
        erasePreviousCalculation();
    }
    //Calculate previous number if needed
    else if(previousNumberElement.innerText.length != 0 && inputZone.dataset.type == "current"){
        latestNumberElement.dataset.value = rawValue;
        rawValue = calculate();
        rawValueIsCalculated = true;
    }

    let displayValue = renderCurrentCalcDisplayValue(rawValue.toString());

    previousNumberElement.dataset.value = rawValue;
    previousNumberElement.innerText = displayValue;

    inputZone.dataset.type = "temporary";
    operatorSignElement.dataset.value = currentUserInputValue;
    operatorSignElement.innerText = currentUserInputValue;

    if(rawValueIsCalculated){
        inputZone.dataset.type = "result";
        inputZone.dataset.value = rawValue;
        inputZone.innerText = displayValue;
    }
}

const treatUserInput = (currentUserInputValue, currentUserInputClass) => {
    /* console.log(currentUserInputValue + currentUserInputClass); */
    if(isDigit(currentUserInputValue) && currentUserInputClass === "numeric" && inputZone.dataset.value.length < maxDigitSize) {
        displayNumberInInputZone(currentUserInputValue);
    }

    if(isFloatPoint(currentUserInputValue) && currentUserInputClass === "float_point" && inputZone.dataset.value.length < maxDigitSize) {
        displayDecimalNumber(currentUserInputValue);
    }

    if(isOperator(currentUserInputValue) && currentUserInputClass === "operator"){
        displayOperator(currentUserInputValue);
    }

    if(isEqualSign(currentUserInputValue) && currentUserInputClass === "equal"){
        displayEqualSign(currentUserInputValue);
    }

    if(currentUserInputClass === "delete_button"){
        switch (currentUserInputValue) {
            case "clear_error":
                clearError();
                break;
            case "clear_all":
                clearAll();
                break;
            case "clear_last":
                clearLast();
                break;
        }
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
            currentUserInputClass = "equal";
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
