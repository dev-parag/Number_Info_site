function numberInfo(inputValue) {
    // Setting the output.
    document.getElementById("out1").innerHTML = evenOddChecker(inputValue)
    document.getElementById("out2").innerHTML = primeChecker(inputValue)
    document.getElementById("out3").innerHTML = perfectSquareChecker(inputValue)
}

function evenOddChecker(num) {
    let evenOddAns;

    // Checking if the number is too big/small to calculate.
    if (num > 9000000000000000) {
        evenOddAns = "Number is too big to check. :("
    }

    // Checking if num is even or odd.
    else {
        if (num % 2 == 0) {
            evenOddAns = num + " is an <b>even</b> number."
        }

        else {
            evenOddAns = num + " is an <b>odd</b> number."
        }

        if (num == 0) {
            evenOddAns = "0 is an <b>even</b> number."
        }
    }

    return evenOddAns;
}

function primeChecker(num) {
    let primeAns;
    flag = 0;

    // Checking if the number is too big/small to calculate.
    if (num > 1000000 || num < -1000000) {
        primeAns = "Number is too big to check. :("
    }

    // Checking if num is prime or not.
    else {
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
            primeAns = num + " is a <b>prime</b> number.";
        }

        else {
            primeAns = num + " is <b>not a prime</b> number.";
        }

        if (num == 0) {
            primeAns = "0 is <b>neither prime nor a composite</b> number."
        }
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

    else {
        inverter = -1;
        iota = "i (iota)";
        fixer = "not"
    }

    if (Math.pow(num * inverter, 0.5) % 1 == 0) {
        squareAns = num + " is " + fixer + " a <b>perfect square</b>, its square root is <b>" + (Math.pow(num * inverter, 0.5)) + iota + "</b>";
    }

    else {
        squareAns = num + " is <b>not a perfect square</b>, its approximate square root is <b>" + (Math.pow(num * inverter, 0.5)).toFixed(3) + iota + "</b>";
    }

    if (num == 0) {
        squareAns = "0 is a <b>perfect square</b>, its square root is <b>0</b>"
    }

    return squareAns;
}