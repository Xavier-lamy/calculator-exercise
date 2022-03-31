//Style for dev environment
import style from './main.scss';

let inputZone = document.getElementById("input_zone");
let keyboard = document.getElementById("keyboard");

let previousNumber = document.getElementById("previous_number");
let operatorSign = document.getElementById("operator_sign");
let latestNumber = document.getElementById("latest_number");
let equalSign = document.getElementById("equal_sign");

let currentInputValue = '';
try {

    const clickedButton = (event) => {
        return event.target.getAttribute("data-value");
/*         console.log(event.target.getAttribute("data-class"));
        console.log(event.target.getAttribute("data-value")); */
    };

    currentInputValue = clickedButton;

    const checkClickedButtonInKeyboard = keyboard => {
        keyboard.onclick = clickedButton;
    };

    window.onload = checkClickedButtonInKeyboard(keyboard);
    
} 

catch (error) {
    inputZone.textContent = "ERROR";
    inputZone.dataset.class = "error";
    console.error(error);
}


