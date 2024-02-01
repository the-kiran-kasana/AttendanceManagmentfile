// // Set cookies null, So that they can be set after login.
// document.cookie = "";

function attendance_page() {
  location.replace("http://localhost:8080/Main_Page");
}

function registrationform() {
  location.replace("http://localhost:8080/School_Registration");
}

function aboutform() {
  location.replace("http://localhost:8080/About_Page");
}

function home() {
  location.replace("http://localhost:8080/Welcome_Page");
}

function contact() {
  location.replace("http://localhost:8080/Contact_Page");
}

function btnclickforSignup(){
  location.replace("http://localhost:8080/Signup_Page");
}



// for admin of Attendance page
function admin() {
  document.getElementById("admindetails").innerHTML =
    '<h5 style="color:rgb(117, 155, 252);text-align: center;">Admin_name  :' + Username + '</h5>' +
    '<h6 style="text-align: center;">School    :' + school_name + '</h6>';
}





 //add student details
function addstudent() {
  location.replace("http://localhost:8080/Add_Student_Details");
}



function TakeSchoolID(schoolname) {
  return new Promise((resolve, reject) => {
    const xhp = new XMLHttpRequest();
    xhp.onreadystatechange = function () {
      if (this.readyState == 4) {
        if (this.status == 200) {
          if (this.responseText != null) {
            var Response = JSON.parse(this.responseText);
            for (var i in Response) {
              if (Response[i].school_name === schoolname) {
                var SclID = Response[i].school_id;
                resolve(SclID);
                return;
              }
            }
          }
        } else {
          reject(new Error('Failed to fetch school ID'));
        }
      }
    };

    xhp.open('GET', "http://localhost:8080/school", true);
    xhp.setRequestHeader("Accept", "application/json");
    xhp.setRequestHeader("Content-Type", "application/json");
    xhp.send();
  });
}





function submitFormForSignup() {

    var schoolname = document.getElementById("SchoolForSignup").value;
    var address = document.getElementById("AddressOfSchool").value;
    var user_name = document.getElementById("username").value;
    var user_password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm password").value;
    if (schoolname === "" || address === "" || user_name === "" || user_password === "" || confirm_password === "") {
          alert("Please fill the form");
    }
    else
    {
      if (user_password != confirm_password) {
          alert("Not A Confirm Password");
      }
      else
      {
        var school_id=TakeSchoolID(schoolname)
        const user={user_name,user_password,school_id }
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:8080/add_users_details", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
          var response = this.responseText;
          if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            alert("Successfully  Add user");
            console.log(response);
          }};
        body = JSON.stringify(user);
        xhr.send(body);
      }
    }
}
  




















function submitFormForSignup() {
  var schoolname = document.getElementById("SchoolForSignup").value;
  var address = document.getElementById("AddressOfSchool").value;
  var user_name = document.getElementById("username").value;
  var user_password = document.getElementById("password").value;
  var confirm_password = document.getElementById("confirm password").value;

  if (schoolname === "" || address === "" || user_name === "" || user_password === "" || confirm_password === "") {
    alert("Please fill the form");
  } else if (!isValidUsername(user_name)) {
    alert("Invalid username. Username must be at least 3 characters long and contain only letters and numbers.");
  } else {
    if (user_password != confirm_password) {
      alert("Not A Confirm Password");
    } else {
      TakeSchoolID(schoolname)
        .then((school_id) => {
          const user = { school_id, user_name, user_password };
          const xhr = new XMLHttpRequest();
          xhr.open("POST", "http://localhost:8080/add_users_details", true);
          xhr.setRequestHeader("Content-Type", "application/json");
          xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
              if (xhr.status === 200) {
                // User signed up successfully
               
                console.log("hello");
                //document.getElementById("req").classList.remove("hidden"); // Show the notification
                location.replace("http://localhost:8080/Online_Attendance");
              } 
            }
            else {
              // Handle other status codes or errors
              alert("Error signing up. Please try again.");
            }
          };
          body = JSON.stringify(user);
          xhr.send(body);
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }
}

// // Add a CSS class to initially hide the notification
// document.getElementById("req").classList.add("hidden");

function isValidUsername(username) {
  // Validate the username (customize this according to your requirements)
  const usernameRegex = /^[a-zA-Z0-9]{3,}$/;
  return usernameRegex.test(username);
}



let text = "Mr. Blue has a blue house";
let position = text.search("Blue");





// add teachers details
function addteachers() {
  location.replace("http://localhost:8080/Add_Teacher_Details");
}

function submitFormforteachers() {
  var teacher_name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var class_id = document.getElementById("Class_Name").value;
  if (teacher_name === "" || subject === "" || class_id === "") {
    alert("please fill the details");
  } else {
    const user = { teacher_name, subject, class_id };
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/add_teacher_details", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      var response = this.responseText;
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(response);
      }
    };
    body = JSON.stringify(user);
    xhr.send(body);
  }
}








//add class details

function addclasses() {
  location.replace("http://localhost:8080/Add_Class_Details");
}

function submitFormforclass() {
  var class_num = document.getElementById("class_no").value;
  var class_name = document.getElementById("class_name").value;
  var school_id = School_Id;

  if (class_num === "" || class_name === "") {
       alert("please fill the details"); } 
  else{
    const user = { class_num, class_name, school_id };
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/add_class_details", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      var response = this.responseText;
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        alert("Successfully  Add Class");
        console.log(response);
      }};
    body = JSON.stringify(user);
    xhr.send(body);
  }
}


















// show all student details
function detail() {

  document.getElementById('fontpage').style.display = 'none';

  document.getElementById("sectionclassstudentdetail").innerHTML="<section style=\"margin-bottom: 10px;\">"+
                                              "<label for=\"class\">Class : </label>"+
                                              "<select id=\"HClasses\" name=\"class\" style=\"width: 20%;\">"+
                                              "<option value=\"schDATE\">Select Class</option>"+
                                              "</select>"+
                                              "</section>";
                                              


  
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



            var selectClass;
            var selectclasses = document.getElementById("HClasses");
            selectclasses.addEventListener("change",function()
            {
                 selectClass   = selectclasses.value;
    
    
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
                      detailsofstudents(parse[i].class_id);
                    }
                 }}
                 }};  
                 xhth.open('GET', "http://localhost:8080/classes", true);
                 xhth.setRequestHeader("Accept", "application/json");
                 xhth.setRequestHeader("Content-Type", "application/json");
                 xhth.send();
            })
}


function detailsofstudents(class_id)
{

  document.getElementById('fontpage').style.display = 'block';
   
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText != null) {
        bookListString = this.responseText;
        var parseResponse = JSON.parse(bookListString);


        var buildTable ;

           buildTable = "<table border='1'>";
           buildTable += "<tr><th>Roll No</th><th>Full Name</th><th>Class</th><th>Father Name</th><th>Mother Name</th><th>Date Of Birth</th><th>Contact_Number</th><th>Address</th></tr>";
           
        for (i in parseResponse) {   
          if (parseResponse[i].school_id == School_Id) {
            if(class_id==parseResponse[i].class_id)
            {
             if (buildTable == null) {
                buildTable = getDiv(
                parseResponse[i].student_id,
                parseResponse[i].student_roll_no,
                parseResponse[i].class_id,
                parseResponse[i].student_full_name,
                parseResponse[i].student_father_name,
                parseResponse[i].student_mother_name,
                parseResponse[i].student_gender,
                parseResponse[i].student_dob,
                parseResponse[i].contact_number,
                parseResponse[i].student_address
              );
            } else {
              buildTable += getDiv(
                parseResponse[i].student_id,
                parseResponse[i].student_roll_no,
                parseResponse[i].class_id,
                parseResponse[i].student_full_name,
                parseResponse[i].student_father_name,
                parseResponse[i].student_mother_name,
                parseResponse[i].student_gender,
                parseResponse[i].student_dob,
                parseResponse[i].contact_number,
                parseResponse[i].student_address
              ); }
            }
          }
        }
        buildTable += "</table>";   
        document.getElementById("fontpage").innerHTML = buildTable;
      }
    }};
  xhttp.open("GET", "http://localhost:8080/student", true);
  xhttp.setRequestHeader("Accept", "application/json");
  xhttp.setRequestHeader("Content-Type", "application/json");
  xhttp.send();



}



function getDiv(student_id,student_roll_no,class_id,student_name,student_father_name,student_mother_name,student_gender,student_date_of_birth,contact_number,student_address)
 {
  var row = "<tr>";
  row += "<td>" + student_roll_no+ "</td>";
  row += "<td>" + student_name + "</td>";
  row += "<td>" + class_id + "</td>";
  row += "<td>" + student_father_name + "</td>";
  row += "<td>" + student_mother_name + "</td>";
  row += "<td>" + student_date_of_birth + "</td>";
  row += "<td>" + contact_number + "</td>";
  row += "<td>" + student_address + "</td>";
  
  return row;
}














//registration for school attemdance
function registerschooldetails() {
  var school_name = document.getElementById("school-name").value;
  var local_address = document.getElementById("local-address").value;
  var district = document.getElementById("district").value;
  var principal = document.getElementById("headmaster").value;
  var password = document.getElementById("password").value;

  if (
    school_name === "" ||
    local_address === "" ||
    district === "" ||
    principal === "" ||
    password === ""
  ) {
    alert("please fill the details");
  } else {
    const user = { school_name, local_address, district, principal, password };
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/add_school_details", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      var response = this.responseText;
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        alert("Successfully  Register School");
        console.log(response);
      }
    };

    body = JSON.stringify(user);
    xhr.send(body);
  }
}









// login page
async function btnclickforlogin() {
  try {
    const user_name = document.getElementById("username").value;
    const user_password = document.getElementById("password").value;
    const user = { user_name, user_password };

    const response = await fetch("http://localhost:8080/login_controller", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (response.ok) {
      const parseResponse = await response.json();

      if (parseResponse !== null) {
        const schoolid = parseResponse.school_id;

        await takeschooldetails(schoolid);

        console.log(schoolid);
        location.replace("http://localhost:8080/Online_Attendance");
      } else {
        alert("Login failed, Please try again with valid credentials");
      }
    } else {
      alert("Not a valid Username and Password");
    }
  } catch (error) {
    console.error("Error during login:", error);
  }
}

async function takeschooldetails(schoolid) {
  try {
    const response = await fetch("http://localhost:8080/school");

    if (response.ok) {
      const data = await response.json();

      const school = data.find((item) => item.school_id === schoolid);

      if (school) {
        const { school_name, principal, school_id } = school;

        console.log(school_name, principal, school_id);

        document.cookie = "Username=" + principal;
        document.cookie = "school_name=" + school_name;
        document.cookie = "school_id=" + school_id;

        return school_id;
      } else {
        throw new Error("School not found");
      }
    } else {
      throw new Error("Failed to fetch school details");
    }
  } catch (error) {
    console.error("Error during school details fetch:", error);
    throw error; // Propagate the error up the chain
  }
}


// document.cookie = "Username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
// document.cookie = "school_name=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";
// document.cookie = "School_Id=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

var Username = document.cookie.replace(/(?:(?:^|.*;\s*)Username\s*=\s*([^;]*).*$)|^.*$/,"$1");
var school_name = document.cookie.replace(/(?:(?:^|.*;\s*)school_name\s*=\s*([^;]*).*$)|^.*$/,"$1");
var School_Id = document.cookie.replace(/(?:(?:^|.*;\s*)school_id\s*=\s*([^;]*).*$)|^.*$/,"$1");

console.log("Username: " + Username);
console.log("school_name: " + school_name);
console.log("school_id: " + School_Id);





// //login page
// function btnclickforlogin() {
//   var principal = document.getElementById("username").value;
//   var password = document.getElementById("password").value;
//   const user = { principal, password };
//   const xhr = new XMLHttpRequest();
//   xhr.open("POST", "http://localhost:8080/login_controller", true);
//   xhr.setRequestHeader("Content-Type", "application/json");
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         var response = xhr.responseText;
//         try {
//           var parseResponse = JSON.parse(response);
//           if (parseResponse != null) {
//             var school_name = parseResponse.school_name;
//             var Username = parseResponse.principal;
//             var school_id = parseResponse.school_id;
//             if (school_name != null && Username != null) {

//               document.cookie = "Username=" + Username;
//               document.cookie = "school_name=" + school_name;
//               document.cookie = "school_id=" + school_id;

//               //  var cookiesString = "{ \"schoolName\":\"" + school_name  + "\"\"Username\":\"" + Username + "\"}";
//               // // var cookiesString = "school_id=" + school_id + ";school_name=" + school_name + ";Username=" + Username;
//               // document.cookie = cookiesString;
//               // console.log(document.cookie);
//               // var cookiesString = "schoolName=" + encodeURIComponent(school_name) + "; Username=" + encodeURIComponent(Username);
//               // document.cookie = cookiesString;

//               location.replace("http://localhost:8080/Online_Attendance");
//             } else {
//               alert("Login failed, Please try again with valid credentials");
//               return;
//             }
//           } else {
//             alert("User not found, Please try with valid credentials");
//           }
//         } catch (error)  {  console.error("Error parsing JSON response:", error); }
//       } else {
//         alert("Not a valid Username and Password");
//       }
//     }};
//   var body = JSON.stringify(user);
//   xhr.send(body);
// }



