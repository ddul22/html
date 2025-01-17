//exe2.js

let numAry = [10, 14, 31, 45, 21];
// 0번째 값은 10
// 1번째 값은 14
numAry.forEach(function(item, index, ary){
  console.log(`${index}번째 값은 ${item}`);
})


let friendAry = [{name: '조카', age:10},
              {name: '큰조카', age:14},
              {name: '삼촌', age:31},
              {name: '큰아버지', age:45},
              {name: '', age:21}];

let filter = friendAry.filter(function(item,idx,ary) {
  if(item.name.indexOf('조카') != -1) {
    return true;
  }
  return false;
});
console.log(filter);
friendAry.forEach(function (item, index, ary) {
  if (item > 10) {
    console.log(`${idx}번째 값은 ${item}`);
  }
});