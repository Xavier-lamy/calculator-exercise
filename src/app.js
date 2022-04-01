//Style for dev environment only
import style from './main.scss';

//Imports
import './functions/regex.js';

let inputZone = document.getElementById("input_zone");
let calculatorKeyboard = document.getElementById("calculator_keyboard");

let previousNumberElement = document.getElementById("previous_number");
let operatorSignElement = document.getElementById("operator_sign");
let latestNumberElement = document.getElementById("latest_number");
let equalSignElement = document.getElementById("equal_sign");

const digitsReg = new RegExp(/^[0-9]$/);
const isDigit = value => digitsReg.test(value);

const operatorsReg = new RegExp(/^[-/*+]$/);
const isOperator = value => operatorsReg.test(value);

const floatingPointReg = new RegExp(/^[.,]$/);
const isfloatingPoint = value => floatingPointReg.test(value);

const equalSignReg = new RegExp(/^=|Enter$/);
const isEqualSign = value => equalSignReg.test(value);

const complexOperatorReg = new RegExp(/^[%²]$/);
const isComplexOperator = value => complexOperatorReg.test(value);

const deleteButtonReg = new RegExp(/^Backspace|Delete|Escape|clear_(error|all|last)$/);
const isDeleteButton = value => deleteButtonReg.test(value);

let currentUserInputValue = '';
let currentUserInputClass = '';
const treatUserInput = (currentUserInputValue, currentUserInputClass) => {
    console.log(currentUserInputValue + currentUserInputClass);
}

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
        else if(isfloatingPoint(event.key)){
            currentUserInputValue = event.key;
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
