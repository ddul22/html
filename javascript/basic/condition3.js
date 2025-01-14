// 2개의 숫자를 입력
// 2개 짝수 => "모두 짝수"
// 1개 짝수 => "하나는 짝수"
// 0개 => "짝수는 없습니다"

let input1 = prompt("숫자를 입력하세요: ");
let input2 = prompt("숫자를 입력하세요: ");

if(input1 % 2 == 0 && input2 % 2 == 0) {
  console.log('모두 짝수입니다')
}
else if(input1 % 2 == 0 || input2 % 2 == 0) {
  console.log('하나는 짝수입니다')
}
else {
  console.log('짝수는 없습니다')
}

