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


document.write('<table border="1">');
document.write('<tbody>');
for(let i = 1; i<= 9; i++) {
  document.write('<tr>');
  if(i % 2 == 0){
    document.write(`<td style="background-color:yellow">2 * ${i} = ${2 * i}</td>`)
  } 
  if(i % 2 == 1) {
    document.write(`<td>2 * ${i} = ${2 * i}</td>`)
  } 
  document.write('</tr>');  
}
document.write('</tbody>');
document.wirte('</table>');

