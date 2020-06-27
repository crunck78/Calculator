function getResult() {
    var num1 = +document.getElementById("number1").value;
    var operationSign = document.getElementById("operation-signs").value;
    var num2 = +document.getElementById("number2").value;
    var sum = calculate(num1, operationSign, num2);
    //var resultText = num1 +" "+ operationSign +" "+ num2 +" = "+ sum;
    alert(sum);
}

function calculate(num1, operationSign, num2){
    switch(operationSign)
    {
        case '+':
            return sum(num1, num2);
        case '-':
            return diff(num1, num2);
        case '*':
            return mult(num1, num2);
        case '/':
            return div(num1, num2);
        default: 
            return "PLEASE SELECT AN OPERATION SIGN!";
    }
}

function sum(num1, num2){
    return num1 + num2;
}

function diff(num1, num2){
    return num1 - num2;
}

function mult(num1, num2){
    return num1 * num2;
}

function div(num1, num2){
    if(num2 === 0)
        return "UNDEFINDE";
    return num1 / num2;
}