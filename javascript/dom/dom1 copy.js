// dom1.js

document.addEventListener('DOMContentLoaded', init);

function init() {
  console.log(document);
  document.forms.myForm.addEventListener('submit', function (e) {
    e.preventDefault(); // 기본 기능 차단.
    let mid = document.querySelector('input[name="member_id"]').value;
    let mname = document.querySelector('input[name="member_name"]').value;
    let mpoint = document.querySelector('input[name="point"]').value;
    if (mid == null || mid.length < 5 || mid.length > 20) {
      alert("id를 5자 이상 20자 이하로 생성해주세요.");
      return; // 함수종료.
    }
    //간결한 방법 반복문사용
    member = {
      memberId: mid,
      memberName: mname,
      point: mpoint
    };
    // let tr = makeTr(member); // 값
    // let member = [mid, memberName, mpoint];
    // let tr = makeTrAry(member);
    let tr = makeTr(member)

    console.log(mid.length);

    document.querySelector('#list').appendChild(tr); //<tbody><tr><td>mid</td><td>mname</td><td>mpoint</td><tr></tbody>

    
  })
  let headInput = document.querySelector('thead input')
   headInput.addEventListener('change',function(){
    let tbodyInput = document.querySelectorAll('tbody input')
    if(headInput.checked){
      tbodyInput.forEach(function(item,idx,ary){
        item.checked=true;
      })
    }else{
      tbodyInput.forEach(function(item){
        item.checked=false;
      })
    }
   })
  
}


function makeTrAry(mbr = []) {
  let tr = document.createElement('tr'); // td*3을 자식요소로 가질 부모
  mbr.forEach(function (item) {
    let td = document.createElement('td'); // 회원 ID, 회원이름, 점수
    td.innerText = item; // 아이디, 이름, 점수
    tr.appendChild(td);
  })
}

function makeTr(mbr = {}) {



  let tr = document.createElement('tr');
  // <td><input type="checkbox"></td>
  let td = document.createElement('td');
  let chk = document.createElement('input');
  chk.type = "checkbox";
  td.appendChild(chk);
  tr.appendChild(td);


  for (let prop in mbr) {

    let td = document.createElement('td');
    td.innerText = mbr[prop];
    tr.appendChild(td);
  }
  // <td><button>삭제</button></td>
  td = document.createElement('td');
  let btn = document.createElement('button');
  btn.style.backgroundColor = 'yellow';
  btn.innerHTML = '삭제';
  btn.addEventListener('click', function () {
    btn.parentElement.parentElement.remove();
    btn.remove();
  });


  td.appendChild(btn);
  tr.appendChild(td);



  return tr; //return
}