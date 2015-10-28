var buttonClickEvent = function () {
    console.log("Ivyko funkcija");
    var inputValue = readInputField();
    var primeNumberResult = isPrimeNumber(inputValue);
    var factorialNumberResult = calculateFactorial(inputValue);
    var fizzBuzzResult = fizzBuzz(inputValue);
    var arrayResult = array(inputValue);

    setResultForElementById("PrimeNumber", primeNumberResult);
    setResultForElementById("FactorialNumber", factorialNumberResult);
    setResultForElementById("fizzBuzz", fizzBuzzResult);
    setResultForElementById("array", arrayResult);
    console.log(primeNumberResult);
};
var readInputField = function () {
    var value = document.getElementById("inputNumber").value;
    console.log("My value: " + value);
    return value;
};

var setResultForElementById = function (id, result) {
    document.getElementById(id).value = result;
};

var calculateFactorial = function (inputValue) {
    var result = inputValue;
    if (inputValue == 0) {
        return 1;
    }
    for (inputValue; inputValue > 1; inputValue--) {
        result = result * (inputValue - 1);

    }
    return result;
};

var isPrimeNumber = function (inputValue) {
    for (var i = 2; i < inputValue; i++) {
        var result = inputValue % i;
        if (result === 0) {
            return false;
        }
    }
    return true;
};

var fizzBuzz = function (inputValue) {
    for (var result = inputValue; result <= 999999; result++) {
        if (result % 15 == 0)
            return "FizzBuzz";
        else if (result % 3 == 0)
            return "Fizz";
        else if (result % 5 == 0)
            return "Buzz";
        else
            return "noFizzNoBuzz";
    }
};

var array = function (inputValue) {
    var a = inputValue.split("");
    return a;
};


