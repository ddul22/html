// forloop4.js
// 50 <= Math.random() * 51 < 101 => 50부터 100
// 학생 10명의 임의 점수를 배열에 저장.

let scores = [];
let sum = 0;
let max = 0;

for(i = 0; i < 10; i++) {
  let number = parseInt(Math.random() * 51)+50;
  scores[i]=number
  console.log(`인덱스 번호는 ${i}입니다`) 
}
console.log(scores)

for (let i = 0; i < 10; i++) {
  sum += scores[i];
  if(max > scores[i]) {
    max += scores[i];
  }
 
} 
console.log(`최대점수: ${max}`);

for(let i = 0; i < 10; i++) {
  sum += scores[i];
}
console.log(`평균: ${sum / 10}`);