
function attendance_page()
{
  location.replace("http://localhost:8080/newpage");
}










// function attendance_page()
// {
//         var result = null;
//         var xhttp = new XMLHttpRequest();
//         xhttp.onreadystatechange = function () {
//           if (this.readyState == 4 && this.status == 200) {
//               if (this.responseText != null)  {
//                 bookListString = this.responseText;
//                 console.log(bookListString);
//                 var parseResponse = JSON.parse(bookListString);
//                 var buildDivForBooks = null;
//                 for (i in parseResponse) {
//                   if (buildDivForBooks == null) {
//                       buildDivForBooks = getDiv2(parseResponse[i].student_full_name,parseResponse[i].student_father_name)
//                   } else
//                   {
//                      buildDivForBooks += getDiv2(parseResponse[i].student_full_name,parseResponse[i].student_father_name)
//                 }
//                 document.getElementById("fontpage").innerHTML =buildDivForBooks;
//                 }
//              }
//             else
//             {
//                 result = getdetails();
//             }
//         };
//         xhttp.open("GET", "http://localhost:8080/student", true);
//         xhttp.setRequestHeader("Accept", "application/json");
//         xhttp.setRequestHeader("Content-Type", "application/json");
//         xhttp.send();
//         //return result;
//   }
// }




// function getDiv2(student_name,student_father_name)
// {
//     return "<div style=\"margin-left:500px;font-size: 30px; margin-top:10px;\">"+
//     "Attendance Sheet"+
//     "<h5>Date</h5>"+
//     "</div>"+
//     "<div style=\"width:900px; height: 50px;background-color: white; margin-left: 170px;\">"+
//     "<h3>     "   + student_name + "   " + student_father_name + " </h3>"+
//     "</div>";
// }


function admin_profile()
{
    document.getElementById("fontpage").innerHTML="<div style=\"margin-left:450px; display: inline-block;  margin-top:100px;width:300px;height:400px;background-color:white;\">"+
                                                  "<h4>teacher_name</h4>"+
                                                  "<h5>subject-is</h5>"+
                                                  "<h5>teacher-of</h5>"+
                                                  "</div>";
}
   









function addstudent()
{
    document.getElementById("fontpage").innerHTML= "<div style=\"height:500px; width:800px;box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1); background-color: white; margin-left: 280px; margin-top: 40px;\">"+
        "<h3 style=\"text-align: center;padding: 10px;\">Add Student</h3>"+
        "<hr style=\"color: rgb(238, 239, 241);\">"+
        "<h4 style=\"color:rgb(32, 164, 245);text-align: center; padding: 15px;\">Student Details</h4>"+
        "<div style=\"display:inline-block;margin-left: 100px; padding-left:10px;\">"+
        "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 15px;\">Name  :  <input type=\"text\" id=\"Name\" style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student Name\"></h5>"+
        "<h5 style=\"display: inline-block; margin-left: 80px ; padding: 15px;\">Student_Father_Name  :  <input type=\"text\" id=\"Student_Father_Name\" style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student Father Name\"></h5>"+
        "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 15px;\">Class  : <button  onclick=\"classdetailontable()\" id=\"Classdrop\" style=\"border-top: 1px; font-size:13px; margin-left: 20px;border-left: 1px;  border-right: 1px;background-color: transparent;\">Student class</button></h5>"+
        "<h5 style=\"display: inline-block; margin-left: 80px ; padding: 15px;\">Student_Mother_Name  :  <input type=\"text\"  id=\"Student_Mother_Name\" style=\"border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student Mother Name\"></h5>"+
        "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 15px;\">Studen_Roll_No  :  <input type=\"text\"  id=\"Studen_Roll_No\" style=\"border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student Roll No\"></h5>"+
        "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 15px;\">Student_Address/village  :  <input type=\"text\" id=\"Student_Address\" style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student_Address/village\"></h5>"+
        "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 15px;\">Student_DOB  :  <input type=\"text\" id=\"Student_DOB\" style=\"  border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student DOB\"></h5>"+
        "<h5 style=\"display: inline-block; margin-left: 35px ; padding: 15px;\">Contact Number  :  <input type=\"text\" id=\"Contact Number\" style=\" border-top: 1px; font-size:13px; margin-left: 60px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Contact Number\"></h5>"+
        "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 15px;\">Gender  :  <input type=\"text\" id=\"Gender\" style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Gender\"></h5>"+
        "</div>"+
        "<hr style=\"color: rgb(238, 239, 241);\">"+
        "<button style=\"background-color:rgb(61, 175, 246); border-color: transparent; color: aliceblue;height: 30px; margin-left: 340px; margin-top: 30px;\" onclick=\"addstudentdetails()\">Add Student Details</button>"+
        "<button style=\"background-color:rgb(213, 216, 217); border-color: transparent; color: aliceblue;height: 30px; margin-left: 10px; margin-top: 30px;\">Reset details</button>"+  
        "</div>"; 
}



function addclasses()
{
    document.getElementById("fontpage").innerHTML="<div style=\"height: 400px; width: 400px; margin-left: 400px; background-color: white; margin-top: 100px;\">"+
    "<h3 style=\"text-align: center;padding: 20px;\">Add Classes</h3>"+
    "<hr style=\"color: rgb(238, 239, 241);\">"+
    "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 20px;\">Class Number  :  <input type=\"text\" id=\"class_no\"   style=\" border-top: 1px; font-size:13px; margin-left: 10px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Class No.\"></h5>"+
    "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 20px;\">Class Name    :  <input type=\"text\" id=\"class_name\" style=\"border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"class Name\"></h5>"+
    "<hr style=\"color: rgb(238, 239, 241);\">"+
    "<button style=\"background-color:rgb(61, 175, 246); border-color: transparent; color: aliceblue;height: 30px; margin-left: 150px; margin-top: 30px;\" onclick=\"addclassdetail()\">Add Classes</button>"+
    "</div>";  
}

function addteachers()
{
    document.getElementById("fontpage").innerHTML= "<div style=\"height:400px; width:800px; background-color: rgb(252, 251, 251); margin-left: 200px; margin-top: 60px;\">"+
    "<h3 style=\"text-align: center;padding: 10px;\">Add Teacher</h3>"+
    "<hr style=\"color: rgb(238, 239, 241);\">"+
    "<h4 style=\"color:rgb(32, 164, 245);text-align: center; padding: 15px;\">Add Teacher Details</h4>"+
    "<div style=\"display:inline-block;margin-left: 100px; padding-left:10px;\">"+
        "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 15px;\">Teacher Name  :  <input type=\"text\" id=\"teacher_name\"style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Enter Teacher Name\"></h5>"+
        "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 15px;\">Subject       :  <input type=\"text\" id=\"subject\" style=\" border-top: 1px; font-size:13px; margin-left: 40px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Enter Subject Name\"></h5>"+
        "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 15px;\">Class ID      :  <input type=\"text\" id=\"class_id\"style=\" border-top: 1px; font-size:13px; margin-left:50px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Enter Class ID\"></h5>"+
    "</div>"+
   "<hr style=\"color: rgb(238, 239, 241);\">"+
   "<button style=\"background-color:rgb(61, 175, 246); border-color: transparent; color: aliceblue;height: 30px; margin-left: 280px; margin-top: 30px;\" onclick=\"addteacherdetail()\">Add Teacher Details</button>"+
   "<button style=\"background-color:rgb(213, 216, 217); border-color: transparent; color: aliceblue;height: 30px; margin-left: 10px; margin-top: 30px;\">Reset details</button>"+ 
"</div>";  
}





function addteacherdetail(){



  var teacher_name = document.getElementById('teacher_name').value;
  var subject = document.getElementById('subject').value;
  var class_id = document.getElementById('class_id').value;
 
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
        location.replace("http://localhost:8080/AttendaacePage");
        console.log(response);
    }
    };
   
    body=JSON.stringify(user)
    xhr.send(body);
    }
}
 




function addclassdetail() {

    
  
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
          location.replace("http://localhost:8080/AttendaacePage");
          console.log(response);
      }
      };
     
      body=JSON.stringify(user)
      xhr.send(body);
      }
  }
   
//         "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 15px;\">Name  :  <input type=\"text\" id=\"Name\" style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student Name\"></h5>"+
//         "<h5 style=\"display: inline-block; margin-left: 80px ; padding: 15px;\">Student_Father_Name  :  <input type=\"text\" id=\"Student_Father_Name\" style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student Father Name\"></h5>"+
//         "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 15px;\">Class  :  <input type=\"text\"  id=\"Class\" style=\"border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student Class\"></h5>"+
//         "<h5 style=\"display: inline-block; margin-left: 80px ; padding: 15px;\">Student_Mother_Name  :  <input type=\"text\"  id=\"Student_Mother_Name\" style=\"border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student Mother Name\"></h5>"+
//         "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 15px;\">Studen_Roll_No  :  <input type=\"text\"  id=\"Studen_Roll_No\" style=\"border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student Roll No\"></h5>"+
//         "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 15px;\">Student_Address/village  :  <input type=\"text\" id=\"Student_Address\" style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student_Address/village\"></h5>"+
//         "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 15px;\">Student_DOB  :  <input type=\"text\" id=\"Student_DOB\" style=\"  border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student DOB\"></h5>"+
//         "<h5 style=\"display: inline-block; margin-left: 35px ; padding: 15px;\">Contact Number  :  <input type=\"text\" id=\"Contact Number\" style=\" border-top: 1px; font-size:13px; margin-left: 60px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Contact Number\"></h5>"+
//         "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 15px;\">Gender  :  <input type=\"text\" id=\"Gender\" style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Gender\"></h5>"+
//         "</div>"+
//         "<hr style=\"color: rgb(238, 239, 241);\">"+
//         "<button style=\"background-color:rgb(61, 175, 246); border-color: transparent; color: aliceblue;height: 30px; margin-left: 340px; margin-top: 30px;\" onclick=\"addstudentdetails()\">Add Student Details</button>"+
//         "<button style=\"background-color:rgb(213, 216, 217); border-color: transparent; color: aliceblue;height: 30px; margin-left: 10px; margin-top: 30px;\">Reset details</button>"+  
//         "</div>"; 
// }



// function addclasses()
// {
//     document.getElementById("fontpage").innerHTML="<div style=\"height: 400px; width: 400px; margin-left: 400px; background-color: white; margin-top: 100px;\">"+
//     "<h3 style=\"text-align: center;padding: 20px;\">Add Classes</h3>"+
//     "<hr style=\"color: rgb(238, 239, 241);\">"+
//     "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 20px;\">Class Number  :  <input type=\"text\" id=\"class_no\"   style=\" border-top: 1px; font-size:13px; margin-left: 10px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Class No.\"></h5>"+
//     "<h5 style=\"display: inline-block; margin-left: 20px ; padding: 20px;\">Class Name    :  <input type=\"text\" id=\"class_name\" style=\"border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"class Name\"></h5>"+
//     "<hr style=\"color: rgb(238, 239, 241);\">"+
//     "<button style=\"background-color:rgb(61, 175, 246); border-color: transparent; color: aliceblue;height: 30px; margin-left: 150px; margin-top: 30px;\" onclick=\"addclassdetail()\">Add Classes</button>"+
//     "</div>";  
// }

function addstudentdetails() {

   var student_full_name = document.getElementById('Name').value;
   var student_father_name = document.getElementById('Student_Father_Name').value;
   var class_id =  document.getElementById('Classdrop').value;
   var student_mother_name  =  document.getElementById('Student_Mother_Name').value;
   var student_roll_no  =  document.getElementById('Studen_Roll_No').value;
   var student_address  =  document.getElementById('Student_Address').value;
   var student_dob  =  document.getElementById('Student_DOB').value;  
   var contact_number  =  document.getElementById('Contact Number').value; 
   var student_gender  =  document.getElementById('Gender').value;
 
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
         location.replace("http://localhost:8080/AttendaacePage");
         console.log(response);}};

     body=JSON.stringify(user)
     xhr.send(body);
     }
 }


// function addteacherdetail(){

//   console.log("add class details");

 
 
//   if(teacher_name==="" || subject==="" || class_id==="")
//   {
//     alert("please fill the details");
//   }
//   else
//   {
//     console.log("form is fill now");
//     const user = {teacher_name,subject,class_id};

//   if(teacher_name==="" || subject==="" || class_id==="")
//   {
//     alert("please fill the details");
//   }
//   else
//   {
//     console.log("form is fill now");
//     const user = {teacher_name,subject,class_id};



   
   
//     body=JSON.stringify(user)
//     xhr.send(body);
//     }
// }

//     body=JSON.stringify(user)
//     xhr.send(body);
//     }
// }



function detail()
{
       
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function ()
         {
          if (this.readyState == 4 && this.status == 200)
           {
            

              if (this.responseText != null)
                {
                   bookListString = this.responseText;
                   console.log("value second" + bookListString);
                   var parseResponse = JSON.parse(bookListString);
                   var buildDivForBooks = null;
                   for (i in parseResponse) {
                   if (buildDivForBooks == null) 
                   {
                      buildDivForBooks = getDiv(parseResponse[i].student_id,parseResponse[i].student_roll_no, parseResponse[i].class_id,parseResponse[i].student_full_name,parseResponse[i].student_father_name,parseResponse[i].student_mother_name,parseResponse[i].student_gender,parseResponse[i].student_dob,parseResponse[i].contact_number,parseResponse[i].student_address)  
                   
                    } 
                   else
                   {
                     buildDivForBooks += getDiv(parseResponse[i].student_id,parseResponse[i].student_roll_no, parseResponse[i].class_id,parseResponse[i].student_full_name,parseResponse[i].student_father_name,parseResponse[i].student_mother_name,parseResponse[i].student_gender,parseResponse[i].student_dob,parseResponse[i].contact_number,parseResponse[i].student_address)  
                    }
                }
                for(i in buildDivForBooks)
                  {
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
    return "<div style=\"width:700px; height:500px;  display: inline-block; background-color:white;margin-left: 300px; margin-top: 60px;\">"+
                                                  "<h2  style=\"color:rgb(32, 164, 245);text-align: center; padding: 15px;\">Student Details Of " + student_name + "</h2>"+
                                                  "<h3  style=\"padding: 15px;margin-left: 30px;\">student_name       :     " + student_name + "</h3>"+
                                                  "<h5  style=\"padding: 15px;margin-left: 30px;\">student_rollno     :       " + student_roll_no + "</h5>"+
                                                  "<h5  style=\"padding: 15px;margin-left: 30px;\">student_class      :     " + class_id + "<h5>"+
                                                  "<h5  style=\"padding: 15px;margin-left: 30px;\">student_father_name :    " + student_father_name + "<h5>"+
                                                  "<h5  style=\"padding: 15px;margin-left: 30px;\">student_mother_name :    " + student_mother_name + "<h5>"+
                                                  "<h5  style=\"padding: 15px;margin-left: 30px;\">student_gender      :    " + student_gender + "<h5>"+
                                                  "<h5  style=\"padding: 15px;margin-left: 30px;\">student_date_of_birth :  " + student_date_of_birth + "<h5>"+
                                                  "<h5  style=\"padding: 15px;margin-left: 30px;\">contact_number       :   " + contact_number + "</h5>"+
                                                  "<h5  style=\"padding: 15px;margin-left: 30px;\">student_address      :   " + student_address + "</h5>"+
                                                  "<hr>"+
                                                  "</div>";
}



//     console.log("add class details");
   
//     console.log("add class details");
   
//     if(class_num==="" || class_name==="")
//     {
//       alert("please fill the details");
//     }
//     else
//     {
//       console.log("form is fill now");
//       const user = {class_num,class_name};

//     if(class_num==="" || class_name==="")
//     {
//       alert("please fill the details");
//     }
//     else
//     {
//       console.log("form is fill now");
//       const user = {class_num,class_name};
  
  
//       const xhr = new XMLHttpRequest();
//       xhr.open('POST', "http://localhost:8080/add_class_details", true);
//       xhr.setRequestHeader('Content-Type', 'application/json');

//       const xhr = new XMLHttpRequest();
//       xhr.open('POST', "http://localhost:8080/add_class_details", true);
//       xhr.setRequestHeader('Content-Type', 'application/json');
  
  
//       xhr.onreadystatechange = function () {
//       var response=this.responseText;
//       if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//           location.replace("http://localhost:8080/AttendaacePage");
//           console.log(response);
//       }
//       };

//       xhr.onreadystatechange = function () {
//       var response=this.responseText;
//       if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//           location.replace("http://localhost:8080/AttendaacePage");
//           console.log(response);
//       }
//       };
     
     
//       body=JSON.stringify(user)
//       xhr.send(body);
//       }
//   }

//       body=JSON.stringify(user)
//       xhr.send(body);
//       }
//   }

function classdetailontable()
{ 
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function ()
         {
          if (this.readyState == 4 && this.status == 200)
           {
              if (this.responseText != null)
                {
                   bookListString = this.responseText;
                   var parseResponse = JSON.parse(bookListString);
                   var buildDivForBooks = null;
                   for (i in parseResponse) {
                    buildDivForBooks += getDiv1(parseResponse[i].class_name)
                  }
                  for(i in buildDivForBooks)
                  {
                     document.getElementById("Classdrop").innerHTML = "<select name=\"dropdwonclass\" id=\"drop\"  style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\">"+
                     "<option value=\"classess\">" + buildDivForBooks + "</option>"+
                     "</select>";
                  }
               }
             }
        };
        xhttp.open('GET', "http://localhost:8080/classes", true);
        xhttp.setRequestHeader("Accept", "application/json");
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send();
    }
    

function getDiv1(class_name)
{ 
   return "<option value=class_name>" + class_name + "</option>";
}





// function addstudentdetails() {
 
// function addstudentdetails() {
 
//    if(student_full_name==="" || student_father_name==="" || class_id==="" || student_mother_name===""|| student_roll_no==="" || student_address==="" || student_dob==="" || contact_number==="" || student_gender==="" )
//    {
//      alert("please fill the details");
//    }
//    else
//    {
//      const user = {student_full_name,student_father_name,class_id,student_mother_name, student_roll_no,student_address ,student_dob,contact_number,student_gender};
//      const xhr = new XMLHttpRequest();
//      xhr.open('POST', "http://localhost:8080/add_student_details", true);
//      xhr.setRequestHeader('Content-Type', 'application/json');
//      xhr.onreadystatechange = function () {
//      var response=this.responseText;
//      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//          location.replace("http://localhost:8080/AttendaacePage");
//          console.log(response);}};

//    if(student_full_name==="" || student_father_name==="" || class_id==="" || student_mother_name===""|| student_roll_no==="" || student_address==="" || student_dob==="" || contact_number==="" || student_gender==="" )
//    {
//      alert("please fill the details");
//    }
//    else
//    {
//      const user = {student_full_name,student_father_name,class_id,student_mother_name, student_roll_no,student_address ,student_dob,contact_number,student_gender};
//      const xhr = new XMLHttpRequest();
//      xhr.open('POST', "http://localhost:8080/add_student_details", true);
//      xhr.setRequestHeader('Content-Type', 'application/json');
//      xhr.onreadystatechange = function () {
//      var response=this.responseText;
//      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//          location.replace("http://localhost:8080/AttendaacePage");
//          console.log(response);}};

 


