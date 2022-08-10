import './style.css'
import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  // <div>
  //   <a href="https://vitejs.dev" target="_blank">
  //     <img src="/vite.svg" class="logo" alt="Vite logo" />
  //   </a>
  //   <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
  //     <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
  //   </a>
  //   <h1>Hello Vite!</h1>
  //   <div class="card">
  //     <button id="counter" type="button"></button>
  //   </div>
  //   <p class="read-the-docs">
  //     Click on the Vite logo to learn more
  //   </p>
  // </div>
`

// setupCounter(document.querySelector('#counter'))

function initiate()
{
  var saveButton = document.getElementById('save');
  var retrieveButton = document.getElementById('retrieve');
  saveButton.addEventListener('click',saveItem);
  retrieveButton.addEventListener('click',retrieveItem);
}
 function saveItem(){
   var nameofemployee=document.getElementById('name').value;
   var ageofemployee=document.getElementById('age').value;
   var salaryofeployee=document.getElementById('salary').value;
   var locationofemployee=document.getElementById('location').value;
   var malegender=document.getElementById('radio1').value;
   var femalegender=document.getElementById('radio2').value;
   var emailaddress=document.getElementById('email').value;
   var dateofjoining=document.getElementById('doj').value;
   var contactnumber=document.getElementById('Contactno').value;
    
   const employee = {
      nameofemployee: nameofemployee,
      ageofemployee: ageofemployee,
      salaryofeployee: salaryofeployee,

locationofemployee: locationofemployee,
malegender: malegender,
femalegender: femalegender,
emailaddress: emailaddress,
dateofjoining: dateofjoining,
contactnumber: contactnumber,

    }
    window.sessionStorage.setItem('employee',JSON.stringify(employee));

 }

 function retrieveItem(){
   console.log("retrieve records");
   var records= window.sessionStorage.getItem('employee');
   var paragraph = document.createElement("p");
   var infor = document.createTextNode(records);
   paragraph.appendChild(infor);
   var element=document.getElementById("retrieve");
   element.appendChild(paragraph);
 }

//  function removeItem() {//deletes item from sessionStorage
//   sessionStorage.removeItem('employee');
//   console.log("remove items");
// }

// function clearStorage() { //clears the entire sessionStorage
//   sessionStorage.clear();
//   console.log("clear records");
// }

window.onload=function(){
  document.getElementById("employeeform").onsubmit = store;
  document.getElementById("retrieve").onclick=retrieveRecords;
}
