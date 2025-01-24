// 278 시간 => 1?일 몇시간 입니다.

// 89345 분 => ?일 ?시간 ?분 입니다.

//let firstValue = parseInt(prompt("시간을 입력하세요"));

//let day = firstValue / 24;
//let time = firstValue % 24;
//console.log(firstValue + "시간은 " + parseInt(day) + "일 이고" + time + "시간입니다");

let secondValue = parseInt(prompt("분을 입력하세요")); 
let minutestPer
let day2 = parseInt(secondValue / (24 * 60));
let hour2 = parseInt((secondValue - day2 * 1440) /60);
console.log( secondValue + "분은 "+day2+"일 "+hour2+  "시간"+secondValue%60+"분입니다");

//1234123444512312314
