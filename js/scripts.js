const OPERATIONS = {
    plus: '+',
    minus: '-',
    product: '*',
    division: '/'
};
Object.freeze(OPERATIONS);

function getResult() {
    var num1 = +document.getElementById("number1").value;
    var operationSign = document.getElementById("operation-signs").value;
    var num2 = +document.getElementById("number2").value;
    var result = calculate(num1, operationSign, num2);
    //var resultText = num1 +" "+ operationSign +" "+ num2 +" = "+ sum;
    document.getElementById('result').innerHTML = '<b>' + result + '</b>';
    // alert(sum);
}

function calculate(num1, operationSign, num2){
    switch(operationSign)
    {
        case OPERATIONS.plus:
            return sum(num1, num2);
        case OPERATIONS.minus:
            return diff(num1, num2);
        case OPERATIONS.product:
            return mult(num1, num2);
        case OPERATIONS.division:
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
        return "UNDEFINDE!";
    return num1 / num2;
}