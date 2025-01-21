
//해당 월수 임의로 기입 맞는 계절을 출력
// ex)3월부터 6월까지 봄 6월부터 9월까지 여름 9월부터 12월까지 가을 12월부터 3월전까지 겨울 
let spring;
let summer;
let fall;
let winter;

let month = prompt("월을 입력하세요: ");

if(2 < month && month < 7) {
  console.log('spring');
}

else if(6 < month && month <10) {
  console.log('summer');
  
}

else if(8 < month && month < 12) {
  console.log('fall')
}

else {
  console.log('winter')
}
