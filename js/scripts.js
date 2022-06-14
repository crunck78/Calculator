const operationSignMap = new Map();
operationSignMap.set('+', sum);
operationSignMap.set('-', diff);
operationSignMap.set('*', mult);
operationSignMap.set('/', div);

function showResult(result){
    document.getElementById('result').innerHTML = '<b>' + result + '</b>';
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
        return "UNDEFINED!";
    return num1 / num2;
}

function handleGetResult() {
    const {num1, operationSign, num2} = getInputs();
    const result = calculate(num1, operationSign, num2);
    showResult(result);
}

function getInputs(){
    const num1 = +document.getElementById("number1").value;
    const operationSign = document.getElementById("operation-signs").value;
    const num2 = +document.getElementById("number2").value;

    return {num1, operationSign, num2};
}

function calculate(num1, operationSign, num2){
    try{
        const operation = operationSignMap.get(operationSign);
        const result = operation(num1, num2);
        return result;
    }catch(err){
        return "Please select operation sign!";
    }
}