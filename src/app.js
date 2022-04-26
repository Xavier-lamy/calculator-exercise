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
    innerIsEmpty,
    valueIsEmpty
} from './functions/validations.js';

//Variables
let inputZone = document.getElementById("input_zone");
let calculatorKeyboard = document.getElementById("calculator_keyboard");

let previousNumberElement = document.getElementById("previous_number");
let operatorSignElement = document.getElementById("operator_sign");
let latestNumberElement = document.getElementById("latest_number");
let equalSignElement = document.getElementById("equal_sign");

let maxDigitSize = 16;

let currentUserInputValue = '';
let currentUserInputClass = '';

//math functions
const sum = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

//Functions
/**
 * 
 * @param {string} rawValue 
 * @returns 
 */
const renderDisplayValue = rawValue => {
    if(rawValue == "Infinity"){
        return "OVERFLOW ERROR";
    }
    return rawValue.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, " ").replace('.', ',');
}

/** 
 * 
 * @param {string} rawValue 
 * @returns
 */
const renderCurrentCalcDisplayValue = rawValue => {
    return renderDisplayValue(rawValue).replace(/,$/, '');
}

/**
 * 
 * @param {HTMLElement} element 
 * @param {*} dataValue 
 * @param {*} innerValue Optionnal, default value: dataValue
 */
const setInnerAndDataValue = (element, dataValue, innerValue=dataValue) => {
    element.dataset.value = dataValue;
    element.innerText = innerValue;
}

const erasePreviousCalculation = () => {
    let emptyString = "";

    setInnerAndDataValue(previousNumberElement, emptyString);
    setInnerAndDataValue(operatorSignElement, emptyString);
    setInnerAndDataValue(latestNumberElement, emptyString);
    setInnerAndDataValue(equalSignElement, emptyString);

}

const clearInputZone = () => {
    setInnerAndDataValue(inputZone, 0);
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
    }
    else if(inputZone.dataset.type == "current"){
        let valueToClear = inputZone.dataset.value;
        let rawValue = "0";
    
        if(valueToClear.length > 1){
            rawValue = valueToClear.replace(/.$/, '');        
        }
    
        let displayValue = renderDisplayValue(rawValue);
    
        setInnerAndDataValue(inputZone, rawValue, displayValue);
    }
}

const displayNumberInInputZone = currentUserInputValue => {

    let rawValue = inputZone.dataset.value;

    //Prevent user from inputing more digits than max allowed size
    if(inputZone.dataset.value.length < maxDigitSize){
        rawValue += currentUserInputValue;
    }

    if ( inputZone.dataset.type != "current" || (inputZone.dataset.value == "0" && !isFloatPoint(currentUserInputValue)) ){
        if(inputZone.dataset.type == "result" && equalSignElement.innerText == "="){
            erasePreviousCalculation();
        }

        rawValue = currentUserInputValue;
        inputZone.dataset.type = "current";

    }

    let displayValue = renderDisplayValue(rawValue);

    setInnerAndDataValue(inputZone, rawValue, displayValue);
}

const displayDecimalNumber = currentUserInputValue => {
    if(isDecimalNumber(inputZone.dataset.value)){
        return;
    }
    //Erase previous calculation result
    if(inputZone.dataset.type == "result"){
        erasePreviousCalculation();
        setInnerAndDataValue(inputZone, 0);
        inputZone.dataset.type = "current";
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

    //If operator is empty:
    if(innerIsEmpty(operatorSignElement)){
        setInnerAndDataValue(inputZone, rawValue, displayValue);
        //And if previous number is empty as well:
        if(innerIsEmpty(previousNumberElement)){
            setInnerAndDataValue(previousNumberElement, rawValue, displayValue);
        }
    }
    //if current_calc end by an operator:
    else if(!innerIsEmpty(operatorSignElement)) {

        //If last number is empty
        if(innerIsEmpty(latestNumberElement)){
            setInnerAndDataValue(latestNumberElement, rawValue, displayValue);
        }
        //If there is already "=" sign
        else if(!innerIsEmpty(equalSignElement)){
            setInnerAndDataValue(previousNumberElement, rawValue, displayValue);
        }

        let rawResult = calculate();
        let displayResult = renderDisplayValue(rawResult.toString());

        setInnerAndDataValue(inputZone, rawResult, displayResult);
    }

    setInnerAndDataValue(equalSignElement, currentUserInputValue);

    inputZone.dataset.type = "result";

}

const displayOperator = currentUserInputValue => {

    let rawValue = inputZone.dataset.value;
    let rawValueIsCalculated = false;

    //Erase previous calculation
    if(inputZone.dataset.type == "result" && !innerIsEmpty(equalSignElement)){
        erasePreviousCalculation();
    }
    //Calculate previous number if needed
    else if(!innerIsEmpty(previousNumberElement)){
        if(inputZone.dataset.type == "current"){
            latestNumberElement.dataset.value = rawValue;
        }

        if(!valueIsEmpty(latestNumberElement) && !innerIsEmpty(operatorSignElement)){
            rawValue = calculate();
            rawValueIsCalculated = true;
            if(inputZone.dataset.type == "temporary"){
                setInnerAndDataValue(latestNumberElement, "");
                setInnerAndDataValue(equalSignElement, "");
            }
        }

    }
    
    let displayValue = renderCurrentCalcDisplayValue(rawValue.toString());

    setInnerAndDataValue(previousNumberElement, rawValue, displayValue);
    setInnerAndDataValue(operatorSignElement, currentUserInputValue);

    inputZone.dataset.type = "temporary";

    if(rawValueIsCalculated){
        setInnerAndDataValue(inputZone, rawValue, displayValue);
        inputZone.dataset.type = "result";
    }
}

const switchSign = () => {
    let rawValue = inputZone.dataset.value;
    if(rawValue < 0){
        console.log(rawValue);
        rawValue = rawValue.replace(/^-/, ""); 
    }
    else if(rawValue > 0){
        rawValue = "-" + rawValue;
    }
    let displayValue = renderDisplayValue(rawValue);

    setInnerAndDataValue(inputZone, rawValue, displayValue);
}

const displayComplexOperator = currentUserInputValue => {
    let x = inputZone.dataset.value;
    let currentCalcDisplayValue = ""; 
    let result = 0;

    if(currentUserInputValue === "1/x"){
        if(x == 0){
            inputZone.innerText = "CANNOT DIVIDE BY 0";
            inputZone.dataset.type = "error";
            erasePreviousCalculation();
            return;
        }
        currentCalcDisplayValue = "1/" + x;
        result = 1 / x;
    }
    else if(currentUserInputValue === "x²"){
        currentCalcDisplayValue = x + "²";
        result = Math.pow(x, 2);
    }
    else if(currentUserInputValue === "√x"){
        if(x < 0){
            inputZone.innerText = "INVALID INPUT";
            inputZone.dataset.type = "error";
            erasePreviousCalculation();
            return;
        }
        currentCalcDisplayValue = "√" + x;
        result = Math.sqrt(x);
    }
    else if(currentUserInputValue === "%"){
        currentCalcDisplayValue = x + "%";
        let previousValue = innerIsEmpty(previousNumberElement) ? 0 : previousNumberElement.dataset.value;
        result = previousValue * x / 100;
    }

    if( innerIsEmpty(operatorSignElement) ){
        setInnerAndDataValue(previousNumberElement, result, currentCalcDisplayValue);
    }
    else if(!innerIsEmpty(operatorSignElement)) { 
        setInnerAndDataValue(latestNumberElement, result, currentCalcDisplayValue);
        setInnerAndDataValue(equalSignElement, "");
    }

    let displayValue = renderDisplayValue(result.toString());
    setInnerAndDataValue(inputZone, result, displayValue);
    
    inputZone.dataset.type = "temporary";

}

const treatUserInput = (currentUserInputValue, currentUserInputClass) => {
    if(isDigit(currentUserInputValue) && currentUserInputClass === "numeric") {
        displayNumberInInputZone(currentUserInputValue);
    }

    else if(isFloatPoint(currentUserInputValue) && currentUserInputClass === "float_point") {
        displayDecimalNumber(currentUserInputValue);
    }

    else if(isOperator(currentUserInputValue) && currentUserInputClass === "operator"){
        displayOperator(currentUserInputValue);
    }

    else if(isEqualSign(currentUserInputValue) && currentUserInputClass === "equal"){
        displayEqualSign(currentUserInputValue);
    }

    else if(currentUserInputClass === "switch_sign"){
        switchSign();
    }

    else if(currentUserInputClass === "delete_button"){
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
    
    else if(currentUserInputClass === "complex_operator"){
        displayComplexOperator(currentUserInputValue);
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
            return;
        }
        treatUserInput(currentUserInputValue, currentUserInputClass);
    });
    

} 

catch (error) {
    inputZone.textContent = "ERROR";
    inputZone.dataset.type = "error";
    console.log(error);
}
