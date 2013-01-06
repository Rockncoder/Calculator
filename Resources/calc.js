
var Calc = {};

Calc.Logic =  function () {
    var operator,
        displayControl = "",
        operatorSet = false,
        equalsPressed = false,
        accumulator = null,

        add = function(x, y) {
            return x + y;
        },
        divide = function(x, y) {
            if (y === 0) {
                alert("Can't divide by 0");
                return 0;
            }
            return x / y;
        },
        multiply = function(x, y) {
            return x * y;
        },
        subtract = function(x, y) {
            return x - y;
        },
        calculate = function() {
            if (!operator || accumulator == null) return;
            var currNumber = parseFloat(displayControl),
                newVal = 0;

            switch (operator) {
                case "+":
                    newVal = add(accumulator, currNumber);
                    break;
                case "-":
                    newVal = subtract(accumulator, currNumber);
                    break;
                case "*":
                    newVal = multiply(accumulator, currNumber);
                    break;
                case "/":
                    newVal = divide(accumulator, currNumber);
                    break;
            }
            setValue(newVal);
            accumulator = newVal;
        },
        setValue = function(val) {
            displayControl = val + "";
        },
        getValue = function(){
            return displayControl;
        },
        /* clears all of the digits */
        clearDisplay = function() {
            accumulator = null;
            equalsPressed = operatorSet = false;
            setValue("0");
            updateDisplay();
        },
        /* removes the last digit entered in the display */
        clearError = function(){
            var display = getValue();
            /* if the string is valid, remove the right most character from it remember: to be valid, must have a value and length */
            if(display){
                display = display.slice(0, display.length - 1);
                display = display? display: "0";
                setValue(display);
            }
            updateDisplay();
        },
        /* handles a numeric or decimal point key being entered */
        enterDigit = function(buttonValue) {
            var currentlyDisplayed = displayControl;
            /* keep the max digits to a reasonable number */
            if(currentlyDisplayed.length < 20){
                if (operatorSet == true || currentlyDisplayed === "0") {
                    setValue("");
                    operatorSet = false;
                }
                /* already pressed a decimal point */
                if(buttonValue === "." && currentlyDisplayed.indexOf(".")>= 0){
                    return;
                }
                setValue(displayControl + buttonValue);
            }
            updateDisplay();
        },
        setOperator = function(newOperator) {
            if (newOperator === "=") {
                equalsPressed = true;
                calculate();
            } else {
                if (!equalsPressed) calculate();
                equalsPressed = false;
                operator = newOperator;
                operatorSet = true;
                accumulator = parseFloat(displayControl);
            }
            updateDisplay();
        },
        updateDisplay = function() {
            Ti.App.fireEvent('calc.updateDisplay', {display: displayControl});
        };
    return {
        init: clearDisplay,
        processKey: function(key) {
            switch(key){
                case "0":
                case "1":
                case "2":
                case "3":
                case "4":
                case "5":
                case "6":
                case "7":
                case "8":
                case "9":
                case ".":
                    enterDigit(key);
                    break;
                case "+":
                case "-":
                case "*":
                case "/":
                case "=":
                    setOperator(key);
                    break;
                case "C":
                    clearDisplay();
                    break;
                case "CE":
                    clearError();
                    break;
            }
        }
    };
};

module.exports = Calc;


