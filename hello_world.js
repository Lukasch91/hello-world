var buttonClickEvent = function () {
    console.log("Ivyko funkcija");
    var inputValue = readInputField();
    var primeNumberResult = isPrimeNumber(inputValue);
    var factorialNumberResult = calculateFactorial(inputValue);
    var fizzBuzzRezult = fizzBuzz(inputValue);

    setResultForElementById("PrimeNumber", primeNumberResult);
    setResultForElementById("FactorialNumber", factorialNumberResult);
    setResultForElementById("fizzBuzz", fizzBuzzResult);
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

var fizzBuzz = function (inputValue) {
    if (inputValue / 3) {
        result = "Fizz";
    } else if (inputValue / 5) {
        result = "Buzz";
    } else if (inputValue / 15) {
        result = "FizzBuzz";
    }
    result = "NoFizzBuzz";
};

var isPrimeNumber = function (inputValue) {
    for (var i = 2; i < inputValue; i++) {
        var result = inputValue % i;
        if (result === 0) {
            return false;
        }
    }
    return true;
}