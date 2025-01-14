let spring;
let summer;
let fall;
let winter;

let month = prompt("월을 입력하세요: ");
if(2 < month && month< 7) {
    console.log('spring');
}

else if(6 < month && month < 10) {
    console.log('summer')
}

else if(8 < month && month < 12) {
    console.log('fall')
}
else {
    console.log('winter')
}
