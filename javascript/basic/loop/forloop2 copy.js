// forloop2.js
// 1~10까지 짝수값을 구하는 반복.

// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//   console.log(`현재 i의 값 ${i}`)
//   if(i % 2 == 0) {
//     sum = sum + i;
//   }
// }
// console.log(`1~10까지의 짝수의 합: ${sum}`)
// console.log('end-of-for')

//1~9까지 표를 만들고 홀수에 색 칠하기
document.write('<table border=1">');
document.write('<tbody>');
for(let i = 1; i <= 9; i++) {
  if(i % 2 == 0 ) {
    document.write(`<tr style = backgroundcolor = yellow>`);
    document.write('</tr>');
  }
  else {
    
  }  
}

document.write('</tbody>');
document.write('</table>');
