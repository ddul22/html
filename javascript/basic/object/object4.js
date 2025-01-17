// object4.js
// 1일의 요일, 막날 알면 달력 만들 수 있다
let month = 2;
let date = 0;
let year = 2024;

let today = new Date();

today.setFullYear(year);
today.setDate(month);
today.setMonth(date);

today = new Date();
let now = new Date();
console.log(today == now);

console.log(new Date(2000));
console.log(today.valueOf() == now.valueOf());
co
today = new Date();
// 2022년 5월 
today.setFullYear(2022);
today.setDate(4);

