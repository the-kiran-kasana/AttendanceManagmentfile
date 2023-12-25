

var School_Id = document.cookie.replace(/(?:(?:^|.*;\s*)school_id\s*=\s*([^;]*).*$)|^.*$/,"$1");


const xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    if (this.responseText != null) {
      var parseResponse = JSON.parse(this.responseText);
      var buildDivForClass = "";
      for (var i in parseResponse) {
        if(parseResponse[i].school_id==School_Id)
        {
          buildDivForClass +='<option value="' +parseResponse[i].class_name +'">' +parseResponse[i].class_name + "</option>";
      }}
      document.getElementById("class").innerHTML =
        '<select name="dropdwonclass" id="selectclasses"  style=" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;">' +
        '<option value="classess">Select Class</option>' + buildDivForClass +"</select>";
    }
}};
xhttp.open("GET", "http://localhost:8080/classes", true);
xhttp.setRequestHeader("Accept", "application/json");
xhttp.setRequestHeader("Content-Type", "application/json");
xhttp.send();




 




    function submitForm() {

         
          var SClasses=document.getElementById("class").value;

          console.log("SClasses   "+SClasses);
          const xhth = new XMLHttpRequest();
          xhth.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
          if (this.responseText != null) {
          var parse = JSON.parse(this.responseText);
          for (var i in parse) 
          {     
           if(parse[i].class_name===SClasses)
           {
             var classId=parse[i].class_id; 
             document.cookie = "classId=" + classId;
           }
          }}
          }};  
          xhth.open('GET', "http://localhost:8080/classes", true);
          xhth.setRequestHeader("Accept", "application/json");
          xhth.setRequestHeader("Content-Type", "application/json");
          xhth.send();

        
var classId = document.cookie.replace(/(?:(?:^|.*;\s*)classId\s*=\s*([^;]*).*$)|^.*$/,"$1");
console.log(" outside classId " +classId);
console.log("School_Id  "+ School_Id);


  var student_full_name = document.getElementById("name").value;
  var student_father_name = document.getElementById("fatherName").value;
  var class_id =  classId;
  var student_mother_name = document.getElementById("motherName").value;
  var student_roll_no = document.getElementById("rollNo").value;
  var student_address = document.getElementById("address").value;
  var student_dob = document.getElementById("dob").value;
  var contact_number = document.getElementById("contactNumber").value;
  var student_gender = document.getElementById("gender").value;
  var school_id = School_Id;

  console.log(student_full_name,student_father_name,class_id,student_roll_no,student_address,student_dob,contact_number,student_gender,school_id);

  if (student_full_name === "" ||student_father_name === "" ||class_id === "" ||student_mother_name === "" ||student_roll_no === "" ||student_address === "" ||student_dob === "" ||contact_number === "" ||student_gender === "") {
      alert("please fill the details");} 
  else {
      const user = {school_id,student_full_name,student_father_name,class_id,student_mother_name,student_roll_no,student_address, student_dob,contact_number,student_gender,};
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "http://localhost:8080/add_student_details", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
      var response = this.responseText;
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        alert("Successfully  Add Student 😊");
      }};
      body = JSON.stringify(user);
      xhr.send(body);
  }

}







// all school list in the section 

        const xhp = new XMLHttpRequest();
        xhp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                if (this.responseText != null) {
                    var Response = JSON.parse(this.responseText);
                    var buildDiv = "";
                    var address = "";
                    for (var i in Response) {
                        address  += '<option value="' + Response[i].local_address + '">' + Response[i].local_address + '</option>';
                        buildDiv += '<option value="' + Response[i].school_name + '">' + Response[i].school_name + '</option>'; 
                      }

                        document.getElementById("AddressOfSchool").innerHTML="<select name=\"dropdwonschool\" id=\"dropschool\"  style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\">" +
                        "<option value=\"classess\">Select Address</option>" + address + "</select>";
        
                        document.getElementById("SchoolForSignup").innerHTML = "<select name=\"dropdwonschool\" id=\"dropschool\"  style=\" border-top: 1px; font-size:13px; margin-left: 20px ;border-left: 1px; border-right: 1px; background-color: transparent;\">" +
                        "<option value=\"classess\">Select School</option>" + buildDiv + "</select>";
                }
            }
        };  
        xhp.open('GET', "http://localhost:8080/school", true);
        xhp.setRequestHeader("Accept", "application/json");
        xhp.setRequestHeader("Content-Type", "application/json");
        xhp.send();



        
        
        
