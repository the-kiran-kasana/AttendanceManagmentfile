
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






//for take student attendance

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



        // var selectElement = document.getElementById("mySelect");

        // // Add a change event listener to the select element
        // selectElement.addEventListener("change", function() {
        //     // Update the selectElement variable when an option is selected
        //     var selectedValue = selectElement.value;
        //     console.log("Selected value:", selectedValue);
        // });











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
                            console.log("show class id " + id);
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
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText != null) {
                    bookListString = this.responseText;
                    var parseResponse = JSON.parse(bookListString);
        
                    var buildTable = "<table border='1'>";
                    buildTable += "<tr><th>Roll No</th><th>Full Name</th><th>Father Name</th><th>Present / Absent</th></tr>";
        
                    for (let i in parseResponse) {

                        if(id===parseResponse[i].class_id)
                        {
                          buildTable += takeattendance(parseResponse[i].student_roll_no, parseResponse[i].student_full_name, parseResponse[i].student_father_name);
                          callattendancetable(parseResponse[i].student_id);
                        }
                    }       
                    buildTable += "</table>";        
                    document.getElementById("student-list").innerHTML = buildTable;
                }
            }
        };
        xhr.open('GET', "http://localhost:8080/student", true);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send();
}



function takeattendance(studentRollNo, studentFullName, studentFatherName) {
    var row = "<tr>";
    row += "<td>" + studentRollNo + "</td>";
    row += "<td>" + studentFullName + "</td>";
    row += "<td>" + studentFatherName + "</td>";
    row += "<td><input type='checkbox' name='attendanceStatus' id='attendanceStatus_" + studentRollNo + "'></td>";
    row += "</tr>";
    return row;
}



// function handleCheckboxValues() {
//     // Select all checkboxes with name 'attendanceStatus'
//     var checkboxes = document.querySelectorAll('input[name="attendanceStatus"]');

//     // Loop through the checkboxes and retrieve their values
//     checkboxes.forEach(function (checkbox) {
//         console.log(checkbox.id, checkbox.checked);
//         // You can use checkbox.id and checkbox.checked as needed
//     });
// }


function callattendancetable(student_id)
{
   

document.getElementById('submitButton').addEventListener('click', function () {
    handleCheckboxValues(student_id);
});
}



function handleCheckboxValues(student_id) {
    
    var checkboxes = document.querySelectorAll('input[name="attendanceStatus"]');

    
    var checkboxValues = [];

    checkboxes.forEach(function (checkbox) {
        checkboxValues.push({
            checked: checkbox.checked
        });
    });

    console.log("attendance table");
    console.log(joined,student_id,checkboxValues);
}



