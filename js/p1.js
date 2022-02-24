const calculator = {
    number1: 0,
    number2: 0,
    operation: ""
}
const calcGrab = () =>{
    nb1 = Number(prompt("Please enter a number"));
    calculator.number1 += (nb1);
    nb2 = Number(prompt("Please enter a number again"));
    calculator.number2 += nb2;
    operations = prompt("Please enter the mathematical operation of your choice")
    calculator.operation += operations;
}
 calcOp = () =>{
   if (calculator.operation === "+") {
    console.log(`Output: ${calculator.number1} + ${calculator.number2} =${Number(calculator.number1)+Number(calculator.number2)} `); 
}else if (calculator.operation === "-"){
    console.log(`Output: ${calculator.number1} - ${calculator.number2} =${Number(calculator.number1)-Number(calculator.number2)} `); 
}else if (calculator.operation === "*"){
    console.log(`Output: ${calculator.number1} * ${calculator.number2} =${Number(calculator.number1)*Number(calculator.number2)} `); 
}else if (calculator.operation === "/"){
    console.log(`Output: ${calculator.number1} / ${calculator.number2} =${Number(calculator.number1)/Number(calculator.number2)} `); 
}
 }


calcGrab();
console.log(`Input:${Number(calculator.number1)},${Number(calculator.number2)},${calculator.operation}`);
calcOp();

    

    

