// dom1.js

document.addEventListener('DOMContentLoaded',init);

function init() {
  console.log(document);
  document.forms.myForm.addEventListener('submit', function(e) {
    e.preventDefault(); // 기본 기능 차단.
    let mid = document.querySelector('input[name="member_id"]').value;
    let mname = document.querySelector('input[name="member_name"]').value;
    let mpoint = document.querySelector('input[name="point"]').value;
    if(mid == null || mid.length < 5 || mid.length > 20) {
      alert("id를 5자 이상 20자 이하로 생성해주세요.");
      return; // 함수종료.
    }
    //간결한 방법 반복문사용
    let member = {memberId: mid, memberName:mname, point:mpoint};

    for(let prop in member) {
      let td1 = document.createElement('td');
      td1.innerText = member[prop];
      tr.appendChild(td1);
    }

    console.log(mid.length);
    // <tr><td>admin</td>.......</tr> 필요한함수: createElement, appendChild (방법 2가지)
    let tr = document.createElement('tr'); //<tr></tr>
    let td1 = document.createElement('td'); //<td></td>
    let td2 = document.createElement('td'); //<td></td>
    let td3 = document.createElement('td'); //<td></td>
    // mid = document.createTextNode(mid); //mid
    // mname = document.createTextNode(mname);//mName
    // mpoint = document.createTextNode(mpoint);//mPoint
    td1.innerText = mid;//<td>mid</td>
    td2.innerText = mname;//<td>mname</td>
    td3.innerText = mpoint;//<td>mpoint</td>

    // td1.appendChild(mid);//<td>mid</td>
    // td2.appendChild(mname);//<td>mname</td>
    // td3.appendChild(mpoint);//<td>mpoint</td>
    tr.appendChild(td1);//<tr><td>mid</td></tr>
    tr.appendChild(td2);//<tr><td>mid</td><td>tName</td></tr>
    tr.appendChild(td3);//<tr><td>mid</td><td>mname</td><td>mpoint</td></tr>
    document.querySelector('#list').appendChild(tr);//<tbody><tr><td>mid</td><td>mname</td><td>mpoint</td><tr></tbody>
    


  })
}