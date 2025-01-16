//매개변수 2개를 prompt로 받아서 2개를 더한 값을 alert로 표현하기

function addNumber (num1, num2) {
    let input1=prompt ("숫자를 입력하세요: ");
    let input2=prompt ("숫자를 입력하세요: ");
    
    let sum = num1 + num2;
    return sum;
}
let result = addNumber();

alert(`두 수를 더한 값: ${result}`);