


//Check cookies :
var cookiesString = document.cookie;

// Check if the cookie string is empty
if (!cookiesString) {
    console.log("Cookies null " + cookiesString)
    alert("Looks you are logged out, Please login first.");
    location.replace("http://localhost:8080/Welcome_Page");
}







//for current date

function join(date, options, separator) {
    function format(option) {
    let formatter = new Intl.DateTimeFormat('en', option);
    return formatter.format(date);}
    return options.map(format).join(separator);
}
let options = [{day: 'numeric'}, {month: 'short'}, {year: 'numeric'}];
let joined = join(new Date, options, '-');
document.getElementById("date").innerHTML=joined;



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




// var cookiesString = document.cookie;
// console.log("Got cookies : " + cookiesString.toString())

// Check if the cookie string is empty
// if (!cookiesString) {
//     console.log("Cookies null " + cookiesString)
//     alert("Looks you are logged out, Please login first.");
//     location.replace("http://localhost:8080/Welcome_Page");
// }



// // Parsing the cookie string
// var parsedCookies = parseCookies(cookiesString);

// // Accessing individual values
// console.log("SchoolName: " + parsedCookies.school_name);
// console.log("Username: " + parsedCookies.Username);
// // document.getElementById("school").innerHTML=cookiesString.toString();

// Function to parse the cookie string
// function parseCookies(cookieString) {
//     var parse= JSON.parse(cookieString);
//     return parse;
// }


// Parse the cookie string
// var parsedCookies = parseCookies(cookiesString);

// // Access specific cookies
// console.log("SchoolName " + parsedCookies.school_name);
// console.log("Username " + parsedCookies.Username);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




var Username = document.cookie.replace(/(?:(?:^|.*;\s*)Username\s*=\s*([^;]*).*$)|^.*$/,"$1");
var school_name = document.cookie.replace(/(?:(?:^|.*;\s*)school_name\s*=\s*([^;]*).*$)|^.*$/,"$1");
var School_Id = document.cookie.replace(/(?:(?:^|.*;\s*)school_id\s*=\s*([^;]*).*$)|^.*$/,"$1");


document.getElementById("school").innerHTML = school_name;



// take attendance
function showTakeAttendance()
{ 




    document.getElementById('date').style.display = 'block';
    document.getElementById('school').style.display = 'block';
    document.getElementById('class').style.display = 'block';
    document.getElementById('submitBtn').style.display = 'block';
    document.getElementById('history').style.display = 'none';
    document.getElementById('HistoryOfClass').style.display = 'none';
    document.getElementById('displaysection').style.display = 'block';
    document.getElementById('searchstudent').style.display = 'none';


    

    




        // all class list in section
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText != null) {
                    var parseResponse = JSON.parse(this.responseText);
                    var buildDivForClass = "";
                    for (var i in parseResponse) {
                        if(parseResponse[i].school_id==School_Id)
                        {
                        buildDivForClass += '<option value="' + parseResponse[i].class_name + '">' + parseResponse[i].class_name + '</option>'; 
                        }
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

        
        // show students details by the class
         var selectedValue;
         var selectElement = document.getElementById("class");
         selectElement.addEventListener("change", function() {
         selectedValue = selectElement.value;

            const xht = new XMLHttpRequest();
            xht.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText != null) {
                    var parse = JSON.parse(this.responseText);
                    for (var i in parse) 
                    {     
                        if(parse[i].school_id==School_Id)
                        {
                          if(parse[i].class_name==selectedValue)
                         {
                            var id=parse[i].class_id;
                            showstudentlistbytheclasss(id);
                         }
                        } 
                    }
                }
            }
        };  
        xht.open('GET', "http://localhost:8080/classes", true);
        xht.setRequestHeader("Accept", "application/json");
        xht.setRequestHeader("Content-Type", "application/json");
        xht.send();
    });
 }
 


function showstudentlistbytheclasss(id)
{

    
        const xhr = new XMLHttpRequest();
        let bookListString;   
        xhr.onreadystatechange = function ()
        {
         if (this.readyState == 4 && this.status == 200)
         {
           if (this.responseText != null)
           {
              bookListString = this.responseText;
              var parseResponse = JSON.parse(bookListString);
              var buildTable = "<table border='1'>";
              buildTable += "<tr><th>Roll No</th><th>Full Name</th><th>Father Name</th><th>Present / Absent</th></tr>";
              for (let i in parseResponse)
              {
                if(id==parseResponse[i].class_id && parseResponse[i].school_id==School_Id)
                {
                  buildTable += takeattendance(parseResponse[i].student_id,parseResponse[i].student_roll_no, parseResponse[i].student_full_name, parseResponse[i].student_father_name);
                }
              }       
              buildTable += "</table>";   
              document.getElementById("studentListSection").innerHTML = buildTable;
           }
         }
        };
        xhr.open('GET', "http://localhost:8080/student", true);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();
}



function takeattendance(student_id,studentRollNo, studentFullName, studentFatherName) {
    var row = "<tr>";
    row += "<td>" + studentRollNo + "</td>";
    row += "<td>" + studentFullName + "</td>";
    row += "<td>" + studentFatherName + "</td>";
    row +=
    "<td><input type='checkbox' name='attendanceStatus' id='attendanceStatus_" +studentRollNo +
    "' class='attendance-checkbox' data-student-id='" + student_id + "'></td>";    
    row += "</tr>";
    return row;
}




document.getElementById('submitBtn').addEventListener('click', function () {
    alert("Successfully  Submit Attendance 👩🏻‍🎓");
    handleCheckboxValues();
});

function handleCheckboxValues()
{
    var checkboxes = document.querySelectorAll('input[name="attendanceStatus"]');
    checkboxes.forEach(function (checkbox) {
        var student_id=checkbox.dataset.studentId;
        var isChecked=checkbox.checked;
        AddDetailsInAttendanceTable(student_id,isChecked);
    });
}
 



const existingRecordsArray = [];
function AddDetailsInAttendanceTable(studentId, isChecked) {
    var student_id = studentId;
    var teacher_id = "";
    var date = joined;
    var isPresent = isChecked;

    // Check if a record with the same student_id, teacher_id, and date already exists
    if (isRecordUnique(student_id, teacher_id, date)) {
        const user = { student_id, teacher_id, date, isPresent };
        const xhr = new XMLHttpRequest();
        xhr.open('POST', "http://localhost:8080/add__details_in_attendance_table", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = function () {
            var response = this.responseText;
            if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                console.log(response);
            }
        };
        const body = JSON.stringify(user);
        xhr.send(body);
    } else {
        console.log('Record already exists. Not adding duplicate.');
    }
}  

function isRecordUnique(student_id, teacher_id, date) {
    const existingRecord = existingRecordsArray.find(record =>
        record.student_id === student_id &&
        record.teacher_id === teacher_id &&
        record.date === date
    );

    return !existingRecord;
}
































function showCheckHistory()
{


    document.getElementById('date').style.display = 'none';
    document.getElementById('school').style.display = 'none';
    document.getElementById('class').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'none';
    // Show or perform logic for sections related to Check History
    document.getElementById('history').style.display = 'block';
    document.getElementById('HistoryOfClass').style.display = 'block';
    document.getElementById('displaysection').style.display = 'none';
    document.getElementById('searchstudent').style.display = 'block';


    //select option section code for date
    document.getElementById("history").innerHTML="<section style=\"margin-bottom: 10px;\">"+
    "<label for=\"DATE\">Date   :  </label>"+
    "<select id=\"DATE\" name=\"class\" style=\"width: 200px;\">"+
    "<option value=\"schDATE\">Select Date</option>"+
    "</select>"+
    "</section>";

    

    //select unique date section code for history
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText != null) {
                var parseResponse = JSON.parse(this.responseText);      
                var uniqueDates = new Set();
                for (var i in parseResponse) {
                       uniqueDates.add(parseResponse[i].date);
                }
            
                var uniqueDatesArray = Array.from(uniqueDates);
                var buildDivForClass = "";
                for (var i in uniqueDatesArray) {
                    buildDivForClass += '<option value="' + uniqueDatesArray[i] + '">' + uniqueDatesArray[i] + '</option>';
                }
                document.getElementById("DATE").innerHTML = "<select name=\"dropdwondate\" id=\"dropdate\"  style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: #ddd; width:250px;\">" +
                    "<option value=\"classess\">Select Date</option>" + buildDivForClass + "</select>";
            }
        }
    };  
    xhttp.open('GET', "http://localhost:8080/attendance", true);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.send();
    

    var selectedValue;
        var selectClass;
        var selectElement = document.getElementById("DATE");
        selectElement.addEventListener("change", function()
        {


            
                document.getElementById("HistoryOfClass").innerHTML="<section style=\"margin-bottom: 10px;\">"+
                "<label for=\"DATE\">Class : </label>"+
                "<select id=\"HClasses\" name=\"class\" style=\"width: 20%;\">"+
                "<option value=\"schDATE\">Select Class</option>"+
                "</select>"+
                "</section>";


             // history according to class
             const xht = new XMLHttpRequest();
             xht.onreadystatechange = function () {
             if (this.readyState == 4 && this.status == 200) {
             if (this.responseText != null) {
             var parseResponse = JSON.parse(this.responseText);
             var buildDivForClass = "";
             for (var i in parseResponse) {
                if(parseResponse[i].school_id==School_Id)
                {
                buildDivForClass += '<option value="' + parseResponse[i].class_name + '">' + parseResponse[i].class_name + '</option>'; 
                }
             }
                document.getElementById("HClasses").innerHTML = 
               "<select name=\"dropdwonclass\" id=\"dropclass\"  style=\"\">" +
               "<option value=\"classess\">Select Class</option>" + buildDivForClass + "</select>";
             }
             }
             };  
             xht.open('GET', "http://localhost:8080/classes", true);
             xht.setRequestHeader("Accept", "application/json");
             xht.setRequestHeader("Content-Type", "application/json");
             xht.send();


        var selectclasses = document.getElementById("HClasses");
        selectclasses.addEventListener("change",function()
        {
             selectClass   = selectclasses.value;
             selectedValue = selectElement.value;


             ///class_id by the class_name
             const xhth = new XMLHttpRequest();
             xhth.onreadystatechange = function () {
             if (this.readyState == 4 && this.status == 200) {
             if (this.responseText != null) {
             var parse = JSON.parse(this.responseText);
             for (var i in parse) 
             {     
                if(parse[i].class_name==selectClass)
                {
                  console.log("student according to date and class   " +  id,selectedValue);
                  var id=parse[i].class_id;  
                  HistoryAccordingToClassAndDate(id,selectedValue);
                }
             }}
             }};  
             xhth.open('GET', "http://localhost:8080/classes", true);
             xhth.setRequestHeader("Accept", "application/json");
             xhth.setRequestHeader("Content-Type", "application/json");
             xhth.send();
        })

})

}










//history according to class and date 
function HistoryAccordingToClassAndDate(id,selectedValue)
{


 ///show history of student according to date and class
 const  xhr = new XMLHttpRequest();
 let attendanceList;   
 xhr.onreadystatechange = function () {
 if (this.readyState == 4 && this.status == 200) {
 if (this.responseText != null) {
  attendanceList = JSON.parse(this.responseText);
  let uniqueStudentIds = new Set();

  
 var buildTable = "<table border='1'>";
     buildTable += "<tr><th>Date</th><th>Students_Roll_No</th><th>Students_Name</th><th>Students_Father_Name</th><th>Present / Absent</th></tr>";
 for (let i in attendanceList) {

    console.log("student according to date and class   " +  id,selectedValue);


        var attendance = attendanceList[i][0];  
        var studentDetails = attendanceList[i][1];  
          //if (!uniqueStudentIds.has(attendance.date)) {
         // uniqueStudentIds.add(attendance.date);
         if(selectedValue==attendance.date ){
         
            if(id==studentDetails.class_id)
            {
              
              buildTable += getvalue( attendance.date, attendance.isPresent, studentDetails.student_roll_no, studentDetails.student_full_name, studentDetails.student_father_name);
            }
        }
    }
}
buildTable += "</table>"; 
document.getElementById("studentListSection").innerHTML = buildTable;
}
};

xhr.open('GET', "http://localhost:8080/attendanceAndStudent", true);
xhr.setRequestHeader("Accept", "application/json");
xhr.send();
}


//Student attendance history table
function getvalue( date, isPresent, student_roll_no, student_full_name, student_father_name) {
    var row = "<tr>";
    row += "<td>" + date + "</td>";
    row += "<td>" + student_roll_no + "</td>";
    row += "<td>" + student_full_name + "</td>"; 
    row += "<td>" + student_father_name + "</td>"; 
    row += "<td>" + (isPresent ? 'Present' : 'Absent') + "</td>";  // Assuming isPresent is a boolean 
    row += "</tr>";
    return row;
}
























   function searchStudentAttendanceByClass()
  {


    document.getElementById('date').style.display = 'none';
    document.getElementById('school').style.display = 'none';
    document.getElementById('class').style.display = 'none';
    document.getElementById('submitBtn').style.display = 'none';
    // Show or perform logic for sections related to Check History
    document.getElementById('history').style.display = 'none';
    document.getElementById('HistoryOfClass').style.display = 'block';
    document.getElementById('displaysection').style.display = 'none';
    document.getElementById('searchstudent').style.display = 'block';






    document.getElementById("HistoryOfClass").innerHTML = "<section style=\"margin-bottom: 10px;\">" +
    "<label for=\"DATE\">Class  :   </label>" +
    "<select id=\"HClasses\" name=\"class\" style=\"width: 20%;\" onchange=\"getAttendanceByClass()\">" +
    "<option value=\"schDATE\">Select Class</option>" +
    "</select>" +
    "</section>";


    const xht = new XMLHttpRequest();
    xht.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText != null) {
                var parseResponse = JSON.parse(this.responseText);
                var buildDivForClass = "";
                for (var i in parseResponse) {
                    if (parseResponse[i].school_id == School_Id) {
                        buildDivForClass += '<option value="' + parseResponse[i].class_name + '">' + parseResponse[i].class_name + '</option>';
                    }
                }
                    document.getElementById("HClasses").innerHTML =
                    "<select name=\"dropdwonclass\" id=\"dropclass\"  style=\"\">" +
                    "<option value=\"classess\">Select Class</option>" + buildDivForClass + "</select>";

                    fetchAttendanceHistory();
            }
        } };
    xht.open('GET', "http://localhost:8080/classes", true);
    xht.setRequestHeader("Accept", "application/json");
    xht.setRequestHeader("Content-Type", "application/json");
    xht.send();   

}




function fetchAttendanceHistory()
{

    var selectedClass = document.getElementById("dropclass").value;


    console.log("selectedClass" + selectedClass);

    const xht = new XMLHttpRequest();
    xht.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        if (this.responseText != null) {
            var parse = JSON.parse(this.responseText);
            for (var i in parse) 
            {     
                if(parse[i].school_id==School_Id)
                {
                  if(parse[i].class_name==selectedClass)
                 {
                    var id=parse[i].class_id;
                    console.log("let " + id)
                    getAttendanceByClass(id);
                 }
                } 
            }
        }
    }};  
    xht.open('GET', "http://localhost:8080/classes", true);
    xht.setRequestHeader("Accept", "application/json");
    xht.setRequestHeader("Content-Type", "application/json");
    xht.send();


}


function getAttendanceByClass(id)
{
   
    console.log("id" +  id);
    document.getElementById('searchstudent').innerHTML = "Search : " +
    "<input style=\"width:208px; height:25px;\" type=\"text\" id=\"myInput\" onkeyup=\"myFunction1()\" placeholder=\"Search for names..\" title=\"Type in a name\">" +
    "<div style=\"height:10px;\"></div>";



    const xhr = new XMLHttpRequest();
    let attendanceList;
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (this.responseText != null) {
                attendanceList = JSON.parse(this.responseText);
                var buildTable = "<table border='1' id=\"studentListSection\">";
                buildTable += "<tr><th>Date</th><th>Students_Roll_No</th><th>Students_Name</th><th>Students_Father_Name</th><th>Present / Absent</th></tr>";
                for (let i in attendanceList) {
                    var attendance = attendanceList[i][0];
                    var studentDetails = attendanceList[i][1];
                    
                    console.log("id" +  id);
                    if (id == studentDetails.school_id) {
                        buildTable += getvalue1(attendance.date, attendance.isPresent, studentDetails.student_roll_no, studentDetails.student_full_name, studentDetails.student_father_name);
                        
                    }
                }
                buildTable += "</table>";
                document.getElementById("studentListSection").innerHTML = buildTable;
            }
        }
    };

    xhr.open('GET', "http://localhost:8080/attendanceAndStudent", true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.send();


}



//Student attendance history table
function getvalue1( date, isPresent, student_roll_no, student_full_name, student_father_name) {
    var row = "<tr>";
    row += "<td>" + date + "</td>";
    row += "<td>" + student_roll_no + "</td>";
    row += "<td>" + student_full_name + "</td>"; 
    row += "<td>" + student_father_name + "</td>"; 
    row += "<td>" + (isPresent ? 'Present' : 'Absent') + "</td>";  // Assuming isPresent is a boolean 
    row += "</tr>";
    return row;
}





function myFunction1() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("studentListSection");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2]; // Index 2 is for the Students_Name column
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

























// function getAttendanceByClass() {
//     var selectedClass = document.getElementById("dropclass").value;
//     // Perform logic to fetch attendance history for the selected class
//     // Use selectedClass in your API request
//     // Update the display based on the fetched data
//     // Example:
//      fetchAttendanceHistory(selectedClass);
//     // displayAttendanceTable();
// }

// // Function to fetch attendance history based on the selected class
// function fetchAttendanceHistory(selectedClass) {
//     // Perform XMLHttpRequest or fetch API request to fetch attendance data based on the selected class
//     // Update the 'attendanceList' variable
//     // Example:
//     const xhrAttendance = new XMLHttpRequest();
//     xhrAttendance.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             if (this.responseText != null) {
//                 attendanceList = JSON.parse(this.responseText);
//                 displayAttendanceTable();
//             }
//         }
//     };
//     xhrAttendance.open('GET', "http://localhost:8080/classes"+ selectedClass, true);
//     xhrAttendance.setRequestHeader("Accept", "application/json");
//     xhrAttendance.send();
// }

















//  function searchaccordingtoclass()
//  {
//      document.getElementById('searchstudent').innerHTML = "Search : " +
//     "<input style=\"width:200px; height:25px;\" type=\"text\" id=\"myInput\" onkeyup=\"myFunction1()\" placeholder=\"Search for names..\" title=\"Type in a name\">" +
//     "<div style=\"height:10px;\"></div>";


//     document.getElementById("HistoryOfClass").innerHTML = "<section style=\"margin-bottom: 10px;\">" +
//     "<label for=\"DATE\">Class : </label>" +
//     "<select id=\"HClasses\" name=\"class\" style=\"width: 20%;\">" +
//     "<option value=\"schDATE\">Select Class</option>" +
//     "</select>" +
//     "</section>";


//     const xhr = new XMLHttpRequest();
//     let attendanceList;
//     xhr.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         if (this.responseText != null) {
//             attendanceList = JSON.parse(this.responseText);
//             var buildTable = "<table border='1' id=\"myUL\">";
//             buildTable += "<tr><th>Date</th><th>Students_Roll_No</th><th>Students_Name</th><th>Students_Father_Name</th><th>Present / Absent</th></tr>";
//             for (let i in attendanceList) {
//                 var attendance = attendanceList[i][0];
//                 var studentDetails = attendanceList[i][1];
//                 if (School_Id == studentDetails.school_id) {
//                     buildTable += getvalue1(attendance.date, attendance.isPresent, studentDetails.student_roll_no, studentDetails.student_full_name, studentDetails.student_father_name);
//                 }
//             }
//             buildTable += "</table>";
//             document.getElementById("studentListSection").innerHTML = buildTable;
            
//         }
//     }};
//     xhr.open('GET', "http://localhost:8080/attendanceAndStudent", true);
//     xhr.setRequestHeader("Accept", "application/json");
//     xhr.send();





//     const xht = new XMLHttpRequest();
//     xht.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             if (this.responseText != null) {
//                 var parseResponse = JSON.parse(this.responseText);
//                 var buildDivForClass = "";
//                 for (var i in parseResponse) {
//                     if (parseResponse[i].school_id == School_Id) {
//                         buildDivForClass += '<option value="' + parseResponse[i].class_name + '">' + parseResponse[i].class_name + '</option>';
//                     }
//                 }
//                 document.getElementById("HClasses").innerHTML =
//                     "<select name=\"dropdwonclass\" id=\"dropclass\"  style=\"\" onchange=\"getAttendanceHistory()\">" +
//                     "<option value=\"classess\">Select Class</option>" + buildDivForClass + "</select>";
//             }
//         }
//     };

//     xht.open('GET', "http://localhost:8080/classes", true);
//     xht.setRequestHeader("Accept", "application/json");
//     xht.setRequestHeader("Content-Type", "application/json");
//     xht.send();
//  }








// function myFunction1() {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("myInput");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("myUL");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[2]; // Index 2 is for the Students_Name column
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.toUpperCase().indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }



// function getAttendanceHistory() {
//     var selectedClass = document.getElementById("dropclass").value;
//     // Perform logic to fetch attendance history for the selected class
//     // Use selectedClass in your API request
//     // Update the display based on the fetched data
//     // Example:
//     // fetchAttendanceHistory(selectedClass);
//     // displayAttendanceTable();
// }





// // Function to fetch attendance history based on the selected class
// function fetchAttendanceHistory(selectedClass) {
//     // Perform XMLHttpRequest or fetch API request to fetch attendance data based on the selected class
//     // Update the 'attendanceList' variable
//     // Example:
//     // const xhrAttendance = new XMLHttpRequest();
//     // xhrAttendance.onreadystatechange = function () {
//     //     if (this.readyState == 4 && this.status == 200) {
//     //         if (this.responseText != null) {
//     //             attendanceList = JSON.parse(this.responseText);
//     //             displayAttendanceTable();
//     //         }
//     //     }
//     // };
//     // xhrAttendance.open('GET', "your_attendance_endpoint_here?class=" + selectedClass, true);
//     // xhrAttendance.setRequestHeader("Accept", "application/json");
//     // xhrAttendance.send();
// }









      // all school list in the section 

        // const xhp = new XMLHttpRequest();
        // xhp.onreadystatechange = function () {
        //     if (this.readyState == 4 && this.status == 200) {
        //         if (this.responseText != null) {
        //             var Response = JSON.parse(this.responseText);
        //             // var buildDiv = "";
        //             // for (var i in Response) {
        //             //     buildDiv += '<option value="' +Response[i].school_name + '">' + Response[i].school_name + '</option>'; }
        
        //                 // document.getElementById("school").innerHTML = "<select name=\"dropdwonschool\" id=\"dropschool\"  style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\">" +
        //                 // "<option value=\"classess\">Select School</option>" + buildDiv + "</select>";
        //         }
        //     }
        // };  
        // xhp.open('GET', "http://localhost:8080/school", true);
        // xhp.setRequestHeader("Accept", "application/json");
        // xhp.setRequestHeader("Content-Type", "application/json");
        // xhp.send();
