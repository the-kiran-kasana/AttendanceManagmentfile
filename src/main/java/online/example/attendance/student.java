package online.example.attendance;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="student_detail")
public class student {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int student_id;
    private int student_roll_no;
    private String student_class;
    private String student_full_name;
    private String student_father_name;
    private String student_mother_name;
    private String student_gender;
    private String student_DOB;
    private int Contact_number;
    private String student_address;


    public student() {
 
    }
    

    public student(int student_id, int student_roll_no, String student_class, String student_full_name, String student_father_name, String student_mother_name, String student_gender,
            String student_DOB,int Contact_number,String student_address) {
        super();
        this.student_id = student_id;
        this.student_roll_no =student_roll_no ;
        this.student_class = student_class;
        this.student_full_name = student_full_name;
        this.student_father_name =  student_father_name;
        this.student_mother_name = student_mother_name;
        this.student_gender = student_gender;
        this.student_DOB = student_DOB;
        this.Contact_number = Contact_number;
        this.student_address = student_address;
    }

    public int getstudent_id() {
        return student_id;
    }
 
    public void setstudent_id(int student_id) {
        this.student_id = student_id;
    }
 
    public int getstudent_roll_no() {
        return student_roll_no;
    }
 
    public void setstudent_roll_no(int student_roll_no) {
        this.student_roll_no = student_roll_no;
    }
 
    public String getstudent_class() {
        return student_class;
    }
 
    public void setstudent_class(String student_class) {
        this.student_class = student_class;
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
 
    public String getstudent_DOB() {
        return student_DOB;
    }
 
    public void setstudent_DOB(String student_DOB) {
        this.student_DOB = student_DOB;
    }

     public int getContact_number() {
        return Contact_number;
    }
 
    public void setContact_number(int Contact_number) {
        this.Contact_number = Contact_number;
    }


     public String getstudent_address () {
        return student_address ;
    }
 
    public void setstudent_address (String student_address ) {
        this.student_address  = student_address ;
    }
 
    @Override
    public String toString() {
        return "User [student_id=" + student_id + ", student_roll_no=" + student_roll_no + ", student_class=" + student_class + ", student_full_name=" + student_full_name
                + ", student_father_name=" + student_father_name + ", student_mother_name=" + student_mother_name + ", student_gender=" + student_gender + ", student_DOB=" + student_DOB + ", Contact_number=" + Contact_number + ", student_address=" + student_address + "]";
    }
 
}
    

