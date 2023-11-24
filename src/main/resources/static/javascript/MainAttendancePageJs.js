
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



function showTakeAttendance()
{ 
        // all class list in section

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




      // all school list in the section 

        const xhp = new XMLHttpRequest();
        xhp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText != null) {
                    var Response = JSON.parse(this.responseText);
                    var buildDiv = "";
                    for (var i in Response) {
                        buildDiv += '<option value="' +Response[i].school_name + '">' + Response[i].school_name + '</option>'; }
        
                        document.getElementById("school").innerHTML = "<select name=\"dropdwonschool\" id=\"dropschool\"  style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\">" +
                        "<option value=\"classess\">Select School</option>" + buildDiv + "</select>";
                }
            }
        };  
        xhp.open('GET', "http://localhost:8080/school", true);
        xhp.setRequestHeader("Accept", "application/json");
        xhp.setRequestHeader("Content-Type", "application/json");
        xhp.send();

        
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
                        if(parse[i].class_name===selectedValue)
                        {
                            var id=parse[i].class_id;
                            showstudentlistbytheclasss(id);
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
                if(id===parseResponse[i].class_id)
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
 



function AddDetailsInAttendanceTable(studentId,isChecked)
{
    var student_id  =  studentId;
    var teacher_id  =  "";
    var  date       =  joined;
    var is_present  =  isChecked;
    const user = {student_id,teacher_id,date,is_present};
    const xhr = new XMLHttpRequest();
    xhr.open('POST', "http://localhost:8080/add__details_in_attendance_table", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
    var response=this.responseText;
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(response);
    }};
    body=JSON.stringify(user)
    xhr.send(body);
}






function  showCheckHistory()
{
    const xhr = new XMLHttpRequest();
    let AttendaceListString;   
    xhr.onreadystatechange = function ()
    {
     if (this.readyState == 4 && this.status == 200)
     {
       if (this.responseText != null)
       {
          AttendaceListString = this.responseText;
          var parseResponse = JSON.parse(AttendaceListString);
          var buildTable = "<table border='1'>";
          buildTable += "<tr><th>Date</th><th>Students_Id</th><th>Present / Absent</th></tr>";
          for (let i in parseResponse)
          {
              buildTable += historyattendance(parseResponse[i].date,parseResponse[i].student_id,parseResponse[i].is_present);
          }       
          buildTable += "</table>";   
          document.getElementById("studentListSection").innerHTML = buildTable;
       }
     }
    };
    xhr.open('GET', "http://localhost:8080/attendance", true);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send();
}


function historyattendance(date,student_id, is_present) {
    var row = "<tr>";
    row += "<td>" + date + "</td>";
    row += "<td>" + student_id + "</td>";
    row += "<td>" + is_present + "</td>";   
    row += "</tr>";
    return row;
}


