//whileloop2.js
// stop 을 입력하면 반복문 종료.
// 입력한 값중에서 제일 큰 값을 출력.
// let run = true;
// let max = 0;
// while (run) {
//   let inputValue = prompt("점수를 입력하세요: ");
//   console.log(inputValue);
//   if (inputValue == 'stop') {
//     run = false;
//     console.log(`최고점수는 ${max}입니다.`)
//   } else if(max < parseInt(inputValue)) {
//     max = parseInt(inputValue)
//   }
// } // end of while.


let temp = parseInt(inputValue);
if(isNaN(temp)) {
  if(inputValue == 'stop') {
    run = false;
  } else {
    alert('정상적인 값을 입력하세요');
  }
} else{
  if(max < parseInt(inputValue)) {
    max = parseInt(inputValue);
  }
}
