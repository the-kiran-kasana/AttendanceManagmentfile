
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
//                       buildDivForBooks = getDiv(parseResponse[i].student_roll_no, parseResponse[i].student_name,parseResponse[i].student_father_name,parseResponse[i].Present,parseResponse[i].Absent,parseResponse[i].Current_date,parseResponse[i].total_Strength)
//                   } else
//                   {
//                      buildDivForBooks += getDiv(parseResponse[i].student_roll_no, parseResponse[i].student_namestudent_name,parseResponse[i].student_father_name,parseResponse[i].Present,parseResponse[i].Absent,parseResponse[i].Current_date,parseResponse[i].total_Strength)
//                   }
//                 }
//                 document.getElementById("fontpage").innerHTML =buildDivForBooks;
//                 }
//              }
//             else
//             {
//                 result = getdetails();
//             }
//         };
//         xhttp.open("GET", "http://localhost:8080/attendance_sheet", true);
//         xhttp.setRequestHeader("Accept", "application/json");
//         xhttp.setRequestHeader("Content-Type", "application/json");
//         xhttp.send();
//         //return result;
//     }




// function getDiv(student_roll_no,student_name,student_father_name,Present,Absent,Current_date,total_Strength)
// {
//     return "<div style=\"margin-left:500px;font-size:  display: inline-block; 30px; margin-top:10px;\">"+
//     "Attendance Sheet"+
//     "<h5>Date"+Current_date+"</h5>"+
//     "</div>"+
//     "<div style=\"width:900px; height: 50px;background-color: white; margin-left: 170px;\">"+
//     "<h3> "   +student_roll_no+  "    "   + student_name + "   " + student_father_name + "   " +Present+ "   " + Absent+ "</h3>"+
//     "</div>";
// }


// function admin_profile()
// {
//     document.getElementById("fontpage").innerHTML="<div style=\"margin-left:450px; display: inline-block;  margin-top:100px;width:300px;height:400px;background-color:white;\">"+
//                                                   "<h4>teacher_name</h4>"+
//                                                   "<h5>subject-is</h5>"+
//                                                   "<h5>teacher-of</h5>"+
//                                                   "</div>";
// }

// // function detail()
// // {
// //     document.getElementById("fontpage").innerHTML="<div style=\"width:500; height:350px;  display: inline-block; background-color:white\">"+
// //                                                   "<h3>student_name</h3>"+
// //                                                   "<h5>student_rollno</h5>"+
// //                                                   "<h5>student_class<h5>"+
// //                                                   "<h5>student_father_name<h5>"+
// //                                                   "<h5>student_mother_name<h5>"+
// //                                                   "<h5>student_gender<h5>"+
// //                                                   "<h5>student_date_of_birth<h5>"+
// //                                                   "<h5>contact_number</h5>"+
// //                                                   "<h5>student_address</h5>"+
// //                                                   "<hr>"+
// //                                                   "</div>";
// // }

function addstudent()
{
    document.getElementById("fontpage").innerHTML= "<div style=\"height:600px; width:900px; background-color: rgb(252, 251, 251); margin-left: 200px; margin-top: 60px;\">"+
        "<h3 style=\"text-align: center;padding: 10px;\">Add Student</h3>"+
        "<hr style=\"color: rgb(238, 239, 241);\">"+
        "<h4 style=\"color:rgb(32, 164, 245);text-align: center;\">Student Details</h4>"+
        "<div style=\"display:inline-block;margin-left: 100px; padding-left:10px;\">"+
   
        "<h5 style=\"display: inline-block; margin-left: 20px ;\">Name  :  <input type=\"text\" id=\"Name\" style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student Name\"></h5>"+
        "<h5 style=\"display: inline-block; margin-left: 80px ;\">Student_Father_Name  :  <input type=\"text\" id=\"Student_Father_Name\" style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student Father Name\"></h5>"+
        "<h5 style=\"display: inline-block; margin-left: 20px ;\">Class  :  <input type=\"text\"  id=\"Class\" style=\"border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student Class\"></h5>"+
        "<h5 style=\"display: inline-block; margin-left: 80px ;\">Student_Mother_Name  :  <input type=\"text\"  id=\"Student_Mother_Name\" style=\"border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student Mother Name\"></h5>"+
        "<h5 style=\"display: inline-block; margin-left: 20px ;\">Studen_Roll_No  :  <input type=\"text\"  id=\"Studen_Roll_No\" style=\"border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student Roll No\"></h5>"+
        "<h5 style=\"display: inline-block; margin-left: 20px ;\">Student_Address/village  :  <input type=\"text\" id=\"Student_Address\" style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student_Address/village\"></h5>"+
        "<h5 style=\"display: inline-block; margin-left: 20px ;\">Student_DOB  :  <input type=\"text\" id=\"Student_DOB\" style=\"  border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Student DOB\"></h5>"+
        "<h5 style=\"display: inline-block; margin-left: 35px ;\">Contact Number  :  <input type=\"text\" id=\"Contact Number\" style=\" border-top: 1px; font-size:13px; margin-left: 60px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Contact Number\"></h5>"+
        "<h5 style=\"display: inline-block; margin-left: 20px ;\">Gender  :  <input type=\"text\" id=\"Gender\" style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Gender\"></h5>"+
        "</div>"+
        "<hr style=\"color: rgb(238, 239, 241);\">"+
        "<button style=\"background-color:rgb(61, 175, 246); border-color: transparent; color: aliceblue;height: 30px; margin-left: 340px; margin-top: 30px;\" onclick=\"addstudentdetails()\">Add Student Details</button>"+
        "<button style=\"background-color:rgb(213, 216, 217); border-color: transparent; color: aliceblue;height: 30px; margin-left: 10px; margin-top: 30px;\">Reset details</button>"+  
        "<h4 id=\"message\">add details<h4>"+
        "</div>"; 
}



// function addclasses()
// {
//     document.getElementById("fontpage").innerHTML="<div style=\"height: 400px; width: 400px; margin-left: 400px; background-color: white; margin-top: 100px;\">"+
//     "<h3 style=\"text-align: center;padding: 20px;\">Add Classes</h3>"+
//     "<hr style=\"color: rgb(238, 239, 241);\">"+
//     "<h5 style=\"display: inline-block; margin-left: 20px ;\">Class Number  :  <input type=\"text\" style=\" border-top: 1px; font-size:13px; margin-left: 10px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Class No.\"></h5>"+
//     "<h5 style=\"display: inline-block; margin-left: 20px ;\">Class Name  :  <input type=\"text\" style=\"border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"class Name\"></h5>"+
//     "<hr style=\"color: rgb(238, 239, 241);\">"+
//     "<button style=\"background-color:rgb(61, 175, 246); border-color: transparent; color: aliceblue;height: 30px; margin-left: 150px; margin-top: 30px;\">Add Classes</button>"+
//     "</div>";  
// }

// function addteachers()
// {
//     document.getElementById("fontpage").innerHTML= "<div style=\"height:400px; width:800px; background-color: rgb(252, 251, 251); margin-left: 200px; margin-top: 60px;\">"+
//     "<h3 style=\"text-align: center;padding: 10px;\">Add Teacher</h3>"+
//     "<hr style=\"color: rgb(238, 239, 241);\">"+
//     "<h4 style=\"color:rgb(32, 164, 245);text-align: center;\">Add Teacher Details</h4>"+
//     "<div style=\"display:inline-block;margin-left: 100px; padding-left:10px;\">"+
//         "<h5 style=\"display: inline-block; margin-left: 20px ;\">Teacher Name  :  <input type=\"text\" style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Enter Teacher Name\"></h5>"+
//         "<h5 style=\"display: inline-block; margin-left: 80px ;\">Subject :  <input type=\"text\" style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Enter Subject Name\"></h5>"+
//         "<h5 style=\"display: inline-block; margin-left: 20px ;\">Class ID  :  <input type=\"text\" style=\" border-top: 1px; font-size:13px; margin-left:50px ;border-left: 1px; border-right: 1px; background-color: transparent;\" placeholder=\"Enter Class ID\"></h5>"+
//     "</div>"+
//    "<hr style=\"color: rgb(238, 239, 241);\">"+
//    "<button style=\"background-color:rgb(61, 175, 246); border-color: transparent; color: aliceblue;height: 30px; margin-left: 280px; margin-top: 30px;\">Add Teacher Details</button>"+
//    "<button style=\"background-color:rgb(213, 216, 217); border-color: transparent; color: aliceblue;height: 30px; margin-left: 10px; margin-top: 30px;\">Reset details</button>"+ 
// "</div>";  
// }





// function detail()
// {
//     var result = null;
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function () {
//       if (this.readyState == 4 && this.status == 200) {
//           // Return books details from server
//           if (this.responseText != null)  {
//             bookListString = this.responseText;
//             console.log(bookListString);
//             var parseResponse = JSON.parse(bookListString);
//             var buildDivForBooks = null;
//             // for (i in parseResponse) {
//             //   if (buildDivForBooks == null) {
//             //       buildDivForBooks = getDiv(parseResponse[i].book_id, parseResponse[i].book_name,parseResponse[i].bookcpy)
//             //   } else 
//             //   {
//             //      buildDivForBooks += getDiv(parseResponse[i].book_id, parseResponse[i].book_name,parseResponse[i].bookcpy)
//             //   }
//             // }
  
//         //   
//           }
//     };
//     xhttp.open("GET", "http://localhost:8080/Student_details", true);
//     xhttp.setRequestHeader("Accept", "application/json");
//     xhttp.setRequestHeader("Content-Type", "application/json");
//     xhttp.send();

// }
// }




function addstudentdetails() {

   console.log("add student details");

   var Name = document.getElementById('Name').value;
   var Student_Father_Name = document.getElementById('Student_Father_Name').value;
   var Class =  document.getElementById('Class').value;
   var Student_Mother_Name  =  document.getElementById('Student_Mother_Name').value;
   var Studen_Roll_No  =  document.getElementById('Studen_Roll_No').value;
   var Student_Address  =  document.getElementById('Student_Address').value;
   var Student_DOB  =  document.getElementById('Student_DOB').value;  
   var Contact_Number  =  document.getElementById('Contact Number').value; 
   var Gender  =  document.getElementById('Gender').value;
  

  
   console.log(Name,Student_Father_Name,Class,Student_Mother_Name);
 
   if(Name==="" || Student_Father_Name==="" || Class==="" || Student_Mother_Name===""|| Studen_Roll_No==="" || Student_Address==="" || Student_DOB==="" || Contact_Number==="" || Gender==="" )
   {
     alert("please fill the details");
   }
   else
   {
     console.log("form is fill now");
     const user = {Name,Student_Father_Name,Class,Student_Mother_Name, Studen_Roll_No,Student_Address ,Student_DOB,Contact_Number,Gender};
 
     const xhr = new XMLHttpRequest();
     xhr.open('POST', "http://localhost:8080/add_student_details", true);
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
  
   
 
 
