// 연습1. exe1.js
let myFriends = [];
myFriends.push({
  name: "홍길동",
  escore: 70,
  kscore: 78,
  gender: 'Female'
});
myFriends.push({
  name: "신현욱",
  escore: 80,
  kscore: 88,
  gender: 'Female'
});
myFriends.push({
  name: "김민식",
  escore: 90,
  kscore: 70,
  gender: 'Male'
});
myFriends.push({
  name: "석지욱",
  escore: 95,
  kscore: 55,
  gender: 'Female'
});

// forEach: 콘솔출력
let sum = 0;
let cnt = 0;
let avg = 0;

myFriends.forEach(function (item, idx, ary) {

  if (item.gender == 'Female') {
    console.log(`이름: ${item.name} 점수는 ${item.escore}`);
    cnt++;
    sum += item.escore;
  }
  
})
avg = sum / cnt;
console.log(`점수는${avg}`)
console.log(avg)

let filterAry = myFriends.filter(function(item, idx, ary) {
  if(item.escore < avg) {
    return true;
  } else {
    return false;
  }
});
console.log(filterAry);
// forEach: 콘솔출력 영어점수가 90점이상.
// forEach: 콘솔출력 영어점수와 국어점수 80점이상 평균
// forEach: 콘솔출력 여학생의 영어평균.
// filter: 여학생의 영어평균 미만 => underAvgAry 저장.