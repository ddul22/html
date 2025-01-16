// forloop2.js
// 표그리기

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

