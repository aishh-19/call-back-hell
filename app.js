function calculate(num1 , num2 ){
    function operation(num1 , num2 , callback){
return callback(num1 , num2)
}
function addition(num1 , num2){
    return num1 + num2;
}
function multiplication( num1 , num2){
    return num1 * num2;
}
let additionresult = operation(num1 , num2 , addition)
console.log(`addition of these two numbers is ${additionresult}`);
let multiplyresult = operation (num1 , num2 , multiplication);
console.log(`multiplication is ${multiplyresult}`);}

calculate(4,5);
calculate(3,4);