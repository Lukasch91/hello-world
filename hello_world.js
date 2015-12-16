var buttonClickEvent = function (event) {
    console.log("Ivyko funkcija" + event);

    var inputValue = readInputField();
    var onlyNumericResult = onlyNumeric(inputValue);
    if (onlyNumericResult) {
        var primeNumberResult = isPrimeNumber(inputValue);
        var factorialNumberResult = calculateFactorial(inputValue);
        var fizzBuzzResult = fizzBuzz(inputValue);
        var arrayResult = array(inputValue);
        var bubbleSortResult = bubbleSort(inputValue);
        var quickSortResult = quickSort(inputValue);
        setResultForElementById("PrimeNumber", primeNumberResult);
        setResultForElementById("FactorialNumber", factorialNumberResult);
        setResultForElementById("fizzBuzz", fizzBuzzResult);
        setResultForElementById("array", arrayResult);
        setResultForElementById("bubbleSort", bubbleSortResult);
        setResultForElementById("quickSort", quickSortResult);
        document.getElementById("errorText").innerHTML = "";
        document.getElementById('inputNumber').style.borderColor="";
    }
    else {
        document.getElementById("errorText").innerHTML = "*numbers only!";
        document.getElementById('inputNumber').style.borderColor="#FF0000";
    }

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

var hasElementInArray = function (array, element) {
    for (var x = 0; x <= array.length; x++) {
        if (element == array[x]) {
            return true;
        }
    }
    return false;
};


var array = function (inputValue) {
    var inputValueArray = inputValue.split("");
    var arrayWithoutDuplicates = [inputValueArray[0]];
    for (var x = 0; x <= inputValueArray.length; x++) {
        var slicedArray = inputValueArray.slice(0, x + 1);
        if (!hasElementInArray(slicedArray, inputValueArray[x + 1])) {
            arrayWithoutDuplicates.push(inputValueArray[x + 1]);
        }
    }
    return arrayWithoutDuplicates;
};

var bubbleSort = function (inputValue) {
    var array = inputValue.split("");
    var arrayChanged = true;
    while (arrayChanged) {
        arrayChanged = false;
        for (var x = 0; x < array.length - 1; x++) {
            if (array[x] > array[x + 1]) {
                var change = array[x];
                array[x] = array [x + 1];
                array[x + 1] = change;
                arrayChanged = true;
            }
        }
    }
    return array
};

var quickSort = function (inputValue) {
    var array = inputValue.split("");
    array.sort(function (a, b) {
        return a - b
    });
    return array
};

var onlyNumeric = function (inputValue) {
    var numbers = /^[0-9]+$/;
    if (inputValue.match(numbers)) {
        return true
    }
    else {
        return false
    }
};

