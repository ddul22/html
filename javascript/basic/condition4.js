

const obj = {
  name: "홍길동",
  age: 20,
  showName: function() { // 메소드.
    console.log(obj.name);
  }
}
obj.showName();

// 1 ~ 10 사이의 임의수 출력.
console.log(); // 0 <= x < 1값의 출력.
let num1 = parseInt(Math.random() * 10) + 1;
let num2 = parseInt(Math.random() * 10) + 1;

let sumEven = 10; // 짝수의 값은 sumEven에 합하기.
let sumOdd = 20; // 홀수의 값은 sumOdd에 합하기.

// truthy(10, "aaa",true) vs. falsy (0, "", null, undefined)
if( num1 % 2 == 0 && num2 % 2 ==0) {
  sumEven += num1
  sumEven += num2
} 
else if( num1 % 2 ==0 || num2 % 2 == 0) {
  if (num1 % 2 == 0) {
    sumEven += num1;
  }
  else {
    sumOdd += num2;
  }
}
else {
  sumOdd += num1;
  sumOdd += num2;
}

