//Regex tests
const digitsReg = new RegExp(/^[0-9]$/);
const isDigit = value => digitsReg.test(value);

const operatorsReg = new RegExp(/^[-/*+]$/);
const isOperator = value => operatorsReg.test(value);

const floatingPointReg = new RegExp(/^[.,]$/);
const isFloatPoint = value => floatingPointReg.test(value);

const decimalNumberReg = new RegExp(/^\d*[,.]\d*$/);
const isDecimalNumber = value => decimalNumberReg.test(value);

const equalSignReg = new RegExp(/^=|Enter$/);
const isEqualSign = value => equalSignReg.test(value);

const complexOperatorReg = new RegExp(/^[%²]$/);
const isComplexOperator = value => complexOperatorReg.test(value);

const deleteButtonReg = new RegExp(/^Backspace|Delete|Escape|clear_(error|all|last)$/);
const isDeleteButton = value => deleteButtonReg.test(value);

module.exports = {
    isDeleteButton,
    isComplexOperator,
    isEqualSign,
    isDecimalNumber,
    isFloatPoint,
    isOperator,
    isDigit,
}