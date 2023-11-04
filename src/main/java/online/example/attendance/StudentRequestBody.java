package online.example.attendance;


public class StudentRequestBody {
    


    private  String student_id;
    private  String student_roll_no;
    private  String  class_id;
    private  String student_full_name;
    private  String student_father_name;
    private  String student_mother_name;
    private  String student_gender;
    private  String student_dob;
    private  String contact_number;
    private  String student_address;

     public StudentRequestBody()
     {

     }

     public StudentRequestBody(String student_id, String student_roll_no, String class_id, String student_full_name, String student_father_name, String student_mother_name, String student_gender,
            String student_dob,String contact_number,String student_address) {
    
        this.student_id = student_id;
        this.student_roll_no =student_roll_no ;
        this.class_id = class_id;
        this.student_full_name = student_full_name;
        this.student_father_name =  student_father_name;
        this.student_mother_name = student_mother_name;
        this.student_gender= student_gender;
        this.student_dob = student_dob;
        this.contact_number = contact_number;
        this.student_address = student_address;
    }


    


    public String getstudent_id() {
        return student_id;
    }
 
    public void setstudent_id(String student_id) {
        this.student_id = student_id;
    }
 
    public String getstudent_roll_no() {
        return student_roll_no;
    }
 
    public void setstudent_roll_no(String student_roll_no) {
        this.student_roll_no = student_roll_no;
    }
 
    public String getclass_id() {
        return class_id;
    }
 
    public void setclass_id(String class_id) {
        this.class_id = class_id;
    }
 
    public String getstudent_full_name() {
        return student_full_name;
    }
 
    public void setstudent_full_name(String student_full_name) {
        this.student_full_name =student_full_name;
    }
 
    public String getstudent_father_name() {
        return student_father_name;
    }
 
    public void setstudent_father_name(String student_father_name) {
        this.student_father_name = student_father_name;
    }
 
    public String getstudent_mother_name() {
        return student_mother_name;
    }
 
    public void setstudent_mother_name(String student_mother_name) {
        this.student_mother_name = student_mother_name;
    }
 
    public String getstudent_gender() {
        return student_gender;
    }
 
    public void setstudent_gender(String student_gender) {
        this.student_gender = student_gender;
    }
 
    public String getstudent_dob() {
        return student_dob;
    }
 
    public void setstudent_dob(String student_dob) {
        this.student_dob = student_dob;
    }

     public String getcontact_number() {
        return contact_number;
    }
 
    public void setcontact_number(String contact_number) {
        this.contact_number = contact_number;
    }


     public String getstudent_address () {
        return student_address ;
    }
 
    public void setstudent_address(String student_address ) {
        this.student_address  = student_address ;
    }
 
    @Override
    public String toString() {
        return "details [student_id=" + student_id + ", student_roll_no=" + student_roll_no + ", student_class=" + class_id + ", student_full_name=" + student_full_name
                + ", student_father_name=" + student_father_name + ", student_mother_name=" + student_mother_name + ", student_gender=" + student_gender + ", student_DOB=" + student_dob + ", Contact_number=" + contact_number + ", student_address=" + student_address + "]";
    }

}



