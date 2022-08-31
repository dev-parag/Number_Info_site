function numberInfo(inputValue) {
    let primeResult;


    // Checking if the number is too big/small to calculate.
    if (inputValue > 1000000 || inputValue < -1000000) {
        primeResult = "Number is too big to check. :("
    }

    // Collecting all results to one result.
    else {
        primeResult = primeChecker(inputValue)
    }

    // Setting the output.
    document.getElementById("out1").innerText = evenOddChecker(inputValue)
    document.getElementById("out2").innerText = primeResult
    document.getElementById("out3").innerText = perfectSquareChecker(inputValue)
}

function evenOddChecker(num) {
    let evenOddAns;

    if (num % 2 == 0) {
        evenOddAns = num + " is an even number."
    }

    else {
        evenOddAns = num + " is an odd number."
    }

    if (num == 0) {
        evenOddAns = "0 is an even number."
    }

    return evenOddAns;
}

function primeChecker(num) {
    let primeAns;
    flag = 0;

    if (num < 0) {
        for (let i = -2; i > num; i--) {
            if (num % i == 0) {
                flag = 1;
            }
        }
    }

    else {
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                flag = 1;
            }
        }
    }

    if (flag == 0) {
        primeAns = num + " is a prime number.";
    }

    else {
        primeAns = num + " is not a prime number.";
    }

    if (num == 0) {
        primeAns = "0 is neither prime nor a composite number."
    }

    return primeAns;
}

function perfectSquareChecker(num) {
    let squareAns;
    let iota;
    let inverter;
    let fixer;
    if (num >= 0) {
        inverter = 1;
        iota = "";
        fixer = ""
    }

    else{
        inverter = -1;
        iota = "i (iota)";
        fixer = "not"
    }

    if (Math.pow(num * inverter,0.5) % 1 == 0 ) {
        squareAns = num + " is " + fixer + " a perfect square, its square root is " + (Math.pow(num * inverter,0.5)) + iota;
    }

    else{
        squareAns = num + " is not a perfect square, its approximate square root is " + (Math.pow(num * inverter,0.5)).toFixed(3) + iota;
    }

    if (num == 0) {
        squareAns = "0 is a perfect square, its square root is 0."
    }

    return squareAns;
}