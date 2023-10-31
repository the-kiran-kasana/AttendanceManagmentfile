
function attendance_page()
{
        var result = null;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
              if (this.responseText != null)  {
                bookListString = this.responseText;
                console.log(bookListString);
                var parseResponse = JSON.parse(bookListString);
                var buildDivForBooks = null;
                for (i in parseResponse) {
                  if (buildDivForBooks == null) {
                      buildDivForBooks = getDiv(parseResponse[i].student_roll_no, parseResponse[i].student_name,parseResponse[i].student_father_name,parseResponse[i].Present,parseResponse[i].Absent,parseResponse[i].Current_date,parseResponse[i].total_Strength)
                  } else
                  {
                     buildDivForBooks += getDiv(parseResponse[i].student_roll_no, parseResponse[i].student_namestudent_name,parseResponse[i].student_father_name,parseResponse[i].Present,parseResponse[i].Absent,parseResponse[i].Current_date,parseResponse[i].total_Strength)
                  }
                }
                document.getElementById("fontpage").innerHTML =buildDivForBooks;
                }
             }
            else
            {
                result = getdetails();
            }
        };
        xhttp.open("GET", "http://localhost:8080/attendance_sheet", true);
        xhttp.setRequestHeader("Accept", "application/json");
        xhttp.setRequestHeader("Content-Type", "application/json");
        xhttp.send();
        //return result;
    }




function getDiv(student_roll_no,student_name,student_father_name,Present,Absent,Current_date,total_Strength)
{
    return "<div style=\"margin-left:500px;font-size: 30px; margin-top:10px;\">"+
    "Attendance Sheet"+
    "<h5>Date"+Current_date+"</h5>"+
    "</div>"+
    "<div style=\"width:900px; height: 50px;background-color: rgb(246, 240, 240); margin-left: 170px;\">"+
    "<h3> "   +student_roll_no+  "    "   + student_name + "   " + student_father_name + "   " +Present+ "   " + Absent+ "</h3>"+
    "</div>";
}


function admin_profile()
{
    document.getElementById("fontpage").innerHTML="<div style=\"margin-left:450px; margin-top:100px;width:300px;height:400px;background-color:rgb(246, 240, 240);\">"+
                                                  "<h4>teacher_name</h4>"+
                                                  "<h5>subject-is</h5>"+
                                                  "<h5>teacher-of</h5>"+
                                                  "</div>";
}

function detail()
{
    document.getElementById("fontpage").innerHTML="<div style=\"width:500; height:350px; background-color:rgb(246, 240, 240)\">"+
                                                  "<h3>student_name</h3>"+
                                                  "<h5>student_rollno</h5>"+
                                                  "<h5>student_class<h5>"+
                                                  "<h5>student_father_name<h5>"+
                                                  "<h5>student_mother_name<h5>"+
                                                  "<h5>student_gender<h5>"+
                                                  "<h5>student_date_of_birth<h5>"+
                                                  "<h5>contact_number</h5>"+
                                                  "<h5>student_address</h5>"+
                                                  "<hr>"+
                                                  "</div>";
}
