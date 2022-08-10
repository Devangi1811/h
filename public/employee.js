function initiate() {
    var saveButton = document.getElementById('save');
    var retrieveButton = document.getElementById('retrieve');
    saveButton.addEventListener('click', saveItem);
    retrieveButton.addEventListener('click', retrieveItem);
 
   
}

function saveItem() {
    var nameofemployee = document.getElementById('name').value;
    var ageofemployee = document.getElementById('age').value;
    var salaryofeployee = document.getElementById('salary').value;
    var locationofemployee = document.getElementById('location').value;
  
        var selectedgender = document.employeeform.gender.value;
        // result.innerHTML = 'You selected: '+radVal;
     
 

    // var malegender = document.getElementById('radio1').value;
    // var femalegender = document.getElementById('radio2').value;
    var emailaddress = document.getElementById('email').value;
    var dateofjoining = document.getElementById('doj').value;
    var contactnumber = document.getElementById('Contactno').value;
   

    const employee = {
        nameofemployee: nameofemployee,
        ageofemployee: ageofemployee,
        salaryofeployee: salaryofeployee,

        locationofemployee: locationofemployee,
        selectedgender: selectedgender,
        // selectedOption: selectedOption,
        emailaddress: emailaddress,
        dateofjoining: dateofjoining,
        contactnumber: contactnumber,

    }
    window.sessionStorage.setItem('employee', JSON.stringify(employee));

}

function retrieveItem() {
    console.log("retrieve records");
    var data = document.getElementById('data');
    var records = window.sessionStorage.getItem('employee');
    //    var paragraph = document.createElement("p");
    //    var infor = document.createTextNode(records);
    //    paragraph.appendChild(infor);
    //    var element=document.getElementById("retrieve");
    //    element.appendChild(paragraph);
    data.innerHTML = records;
}

//  function removeItem() {//deletes item from sessionStorage
//   sessionStorage.removeItem('employee');
//   console.log("remove items");
// }

// function clearStorage() { //clears the entire sessionStorage
//   sessionStorage.clear();
//   console.log("clear records");
// }

// window.onload=function(){
//   document.getElementById("employeeform").onsubmit = store;
//   document.getElementById("retrieve").onclick=retrieveRecords;
// }

addEventListener("load", initiate);

