// whileloop4.js
// member_id: "user01", member_name: "홍길동", point: 80
// member_id: "user02", member_name: "신현욱", point: 90
// member_id: "user03", member_name: "김민식", point: 85 
let member01 = {
  member_id: "user01",
  member_name: "홍길동",
  point: 80
}
let member02 = {
  member_id: "user02",
  member_name: "신현욱",
  point: 90
}
let member03 = {
  member_id: "user03",
  member_name: "김민식",
  point: 85
}
let members = [member01, member02, member03];


console.log(members)

let max = members[0];
let maxId = '';
for(let i = 0; i < members.length; i++) {
  if(max.point < members[i]['point']) { // 객체끼리 비교.
    max = members[i];
    // maxId = members[i]['member_id'];
  }
  console.log(`최고point: ${max.point}, ${max['member_name']}`);

}
