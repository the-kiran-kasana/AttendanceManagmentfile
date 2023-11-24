



// for attendance page
function attendance_page()
{
  location.replace("http://localhost:8080/Main_Page");
}


function registrationform()
{
  location.replace("http://localhost:8080/School_Registration");
}


function aboutform()
{
  location.replace("http://localhost:8080/About_Page");
}


function home()
{
  location.replace("http://localhost:8080/Welcome_Page");
}


function contact()
{
  location.replace("http://localhost:8080/Contact_Page");
}


// location.replace("http://localhost:8080/Online_Attendance");
// var school_name =document.getElementById('schoolname').value;
    // var principal   = document.getElementById('username').value;
    // var password    = document.getElementById('password').value;
    // if(school_name==="" || principal==="" || password==="")
    // {
    //   alert("please fill the form");
    // }


//  function btnclickforlogin()
//  {
//         const xhr = new XMLHttpRequest();
//         xhr.onreadystatechange = function () {
//           if (this.readyState == 4 && this.status == 200) {
//             if (this.responseText != null) {
//                   var response=this.responseText;
//                   console.log(response);
//                   var parseResponse = JSON.parse(response);
//                 }
//               }};
//         xhr.open('GET', "http://localhost:8080/school", true);
//         xhr.setRequestHeader("Accept", "application/json");
//         xhr.setRequestHeader("Content-Type", "application/json");
//         xhr.send();
//     }



function admin(){
// for admin of Attendance page
document.getElementById("admindetails").innerHTML= "<h5 style=\"color:rgb(117, 155, 252);text-align: center;\">Teacher_name  : Kiran Kasana</h5>"+
                                                        "<h6 style=\"text-align: center;\">Class Teacher    : 10th </h6>"+
                                                        "<h6 style=\"text-align: center;\">Subject  : Science</h6>";
}



//add student details

function addstudent()
{
  location.replace("http://localhost:8080/Add_Student_Details");
}

function submitForm() {
  var student_full_name = document.getElementById("name").value;
   var student_father_name = document.getElementById("fatherName").value;
   var class_id =  document.getElementById("Classdrop").value;
   var student_mother_name  =  document.getElementById("motherName").value;
   var student_roll_no  =  document.getElementById("rollNo").value;
   var student_address  =  document.getElementById("address").value;
   var student_dob  =  document.getElementById("dob").value;  
   var contact_number  =  document.getElementById("contactNumber").value; 
   var student_gender  =  document.getElementById("gender").value;
   if(student_full_name==="" || student_father_name==="" || class_id==="" || student_mother_name===""|| student_roll_no==="" || student_address==="" || student_dob==="" || contact_number==="" || student_gender==="" )
   {
     alert("please fill the details");
   }
   else
   {
     const user = {student_full_name,student_father_name,class_id,student_mother_name, student_roll_no,student_address ,student_dob,contact_number,student_gender};
     const xhr = new XMLHttpRequest();
     xhr.open('POST', "http://localhost:8080/add_student_details", true);
     xhr.setRequestHeader('Content-Type', 'application/json');
     xhr.onreadystatechange = function () {
     var response=this.responseText;
     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
         console.log(response);}};

     body=JSON.stringify(user)
     xhr.send(body);
     }
 
}



// add teachers details

function addteachers()
{
  location.replace("http://localhost:8080/Add_Teacher_Details");
}

function submitFormforteachers()
{
  var teacher_name = document.getElementById('name').value;
  var subject = document.getElementById('subject').value;
  var class_id = document.getElementById('Class_Name').value;
  if(teacher_name==="" || subject==="" || class_id==="")
  {
    alert("please fill the details");
  }
  else
  { 
    const user = {teacher_name,subject,class_id};
    const xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:8080/add_teacher_details", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
    var response=this.responseText;
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(response);
    }}; 
    body=JSON.stringify(user)
    xhr.send(body);
    }
}




//add class details

function addclasses()
{
  location.replace("http://localhost:8080/Add_Class_Details");
}


function submitFormforclass()
{
  var class_num = document.getElementById('class_no').value;
  var class_name = document.getElementById('class_name').value;
  if(class_num==="" || class_name==="")
  {
    alert("please fill the details");
  }
  else
  {  
    const user = {class_num,class_name};

    const xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:8080/add_class_details", true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
    var response=this.responseText;
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        location.replace("http://localhost:8080/Main_Page");
        console.log(response);
    }
    };
   
    body=JSON.stringify(user)
    xhr.send(body);
    }
}


// show all student details

function detail()
{   
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200){
              if (this.responseText != null){
                   bookListString = this.responseText;
                   console.log("value second" + bookListString);
                   var parseResponse = JSON.parse(bookListString);
                   var buildDivForBooks = null;
                   for (i in parseResponse) {
                   if (buildDivForBooks == null) {
                      buildDivForBooks = getDiv(parseResponse[i].student_id,parseResponse[i].student_roll_no, parseResponse[i].class_id,parseResponse[i].student_full_name,parseResponse[i].student_father_name,parseResponse[i].student_mother_name,parseResponse[i].student_gender,parseResponse[i].student_dob,parseResponse[i].contact_number,parseResponse[i].student_address)  
                    } 
                   else{
                     buildDivForBooks += getDiv(parseResponse[i].student_id,parseResponse[i].student_roll_no, parseResponse[i].class_id,parseResponse[i].student_full_name,parseResponse[i].student_father_name,parseResponse[i].student_mother_name,parseResponse[i].student_gender,parseResponse[i].student_dob,parseResponse[i].contact_number,parseResponse[i].student_address)  
                    }
                }
                for(i in buildDivForBooks){
                   document.getElementById("fontpage").innerHTML =buildDivForBooks;
                }
              }
             }
        };
        xhttp.open('GET', "http://localhost:8080/student", true);
        xhttp.setRequestHeader("Accept", "application/json");
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send();
    }
    

function getDiv(student_id,student_roll_no,class_id,student_name,student_father_name,student_mother_name,student_gender,student_date_of_birth,contact_number,student_address)
{

 

  return "<div id=\"studentDetails\"style=\" background-color: #fff; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); padding: 5px; max-width: 600px;  width: 100%;margin-left:230px;\">"+
         "<h2 style=\" text-align: center; color: rgb(117, 155, 252);\"> Details of  " + student_name + "</h2>"+"<hr>"+"<form>"+
         "<h3  style=\"padding: 5px;margin-left: 30px;\">student_name       :     " + student_name + "</h3>"+
         "<h5  style=\"padding: 5px;margin-left: 30px;\">student_father_name :    " + student_father_name + "<h5>"+   
         "<h5  style=\"padding: 5px;margin-left: 30px;\">student_mother_name :    " + student_mother_name + "<h5>"+    
         "<h5  style=\"padding: 5px;margin-left: 30px;\">student_class      :     " + class_id + "<h5>"+       
         "<h5  style=\"padding: 5px;margin-left: 30px;\">student_rollno     :       " + student_roll_no + "</h5>"+       
         "<h5  style=\"padding: 5px;margin-left: 30px;\">student_address      :   " + student_address + "</h5>"+     
         "<h5  style=\"padding: 5px;margin-left: 30px;\">student_date_of_birth :  " + student_date_of_birth + "<h5>"+
         "<h5  style=\"padding: 5px;margin-left: 30px;\">contact_number       :   " + contact_number + "</h5>"+ "<hr>"+"</form>"+"</div>";
                                                  
}






const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText != null) {
                    var parseResponse = JSON.parse(this.responseText);
                    var buildDivForClass = "";
                    for (var i in parseResponse) {
                        buildDivForClass += '<option value="' + parseResponse[i].class_name + '">' + parseResponse[i].class_name + '</option>'; 
                        }
                        document.getElementById("class").innerHTML = "<select name=\"dropdwonclass\" id=\"dropclass\"  style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\">" +
                        "<option value=\"classess\">Select Class</option>" + buildDivForClass + "</select>";
                }
            }
        };  
        xhttp.open('GET', "http://localhost:8080/classes", true);
        xhttp.setRequestHeader("Accept", "application/json");
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send(); 















function registerschooldetails() {

  var school_name=document.getElementById("school-name").value;
  var local_address=document.getElementById("local-address").value;
  var district=document.getElementById("district").value;
  var principal=document.getElementById("headmaster").value;
  var password=document.getElementById("password").value;

  if(school_name==="" || local_address==="" || district==="" || principal===""|| password==="")
  {
     alert("please fill the details");
  }
   else
  {
       const user = {school_name,local_address ,district,principal,password};
       const xhr = new XMLHttpRequest();
       xhr.open('POST', "http://localhost:8080/add_school_details", true);
       xhr.setRequestHeader('Content-Type', 'application/json');
       xhr.onreadystatechange = function () {
       var response=this.responseText;
       if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
       console.log(response);}};

       body=JSON.stringify(user)
       xhr.send(body);
   }
}



// function btnclickforlogin()
// {
//   import axios from 'axios';
//   const axios = require("axios");

//   axios.get('http://localhost:8080/school').then(resp => {
  
//       console.log(resp.data);
//   });
// }
  

  // const xhr = new XMLHttpRequest();
  // xhr.onreadystatechange = function () {
  //             if (this.readyState == 4 && this.status == 200) {
  //               if (this.responseText != null) {
  //                     var response=this.responseText;
  //                     console.log(response);
  //               }
  //             }
  //           };
  //           xhr.open('GET', "http://localhost:8080/school", true);
  //       xhr.setRequestHeader("Accept", "application/json");
  //       xhr.setRequestHeader("Content-Type", "application/json");
  //       xhr.send();




 import axios from 'axios';

axios.get('http://localhost:8080/school', {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})
  .then(response => {
    console.log('Response:', response.data);
    // You can further process the response data here
  })
  .catch(error => {
    console.error('Error:', error);
  });
