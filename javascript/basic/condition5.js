// 두 수 1 ~ 100 까지의 임의의 값을 생성
// 큰수에서 작은 수 빼서 결과값을 출력

let num1 = parseInt(Math.random() * 100) + 1;
let num2 = parseInt(Math.random() * 100) + 1;
let num3 = parseInt(Math.random() * 100) + 1;
console.log(num1)
console.log(num2)
console.log(num3)
let result = 0;
// 세수중에서 제일 큰 값을 출력.

<<<<<<< HEAD
if (num1 > num3 && num1 > num2) {
  result = num1
} else if (num2 > num3 && num2 > num1) {
  result = num2;
} else if (num3 > num1 && num3 > num2) {
  result = num3;
=======
if (num1 > num2) {
  if (num1 > num3) {
    result = num1;
  }
} else if (num2 > num1) {
  if (num2 > num3) {
    result = num2;
  }
} else if(num3 > num1) {
  if(num3 > num2){
    result = num3;
  }
>>>>>>> fcabc7732272018719c282ac1deef268aca80f86
}
console.log(result)



// console.log(num1, num2);

// if(num1 > num2) {
//  let result =  num1 - num2
// console.log(result)
// }

// else if(num1 < num2) {
// num2 - num1
// console.log(num2 - num1)
// }