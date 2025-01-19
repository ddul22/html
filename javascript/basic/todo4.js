// 1~100까지 반복문을 통해 배열 numAray 필터 사용해서 짝수만 evenAray 받아오기

for(i = 1; i <= 100; i++) {
    let numAry = [i];
    
    numAry.forEach(function (item, idx, ary) {
        if(item % 2 == 0) {
            console.log(`item => ${item}`);
        }
    });
    let filterAry = numAry.filter(function(item,idx,ary){
        if(item % 2 == 0) {
            return true;
        } else {
            return false;
        }
    }); 
    
    console.log(filterAry);
    }