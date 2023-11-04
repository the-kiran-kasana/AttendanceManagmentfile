package online.example.attendance.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="student_details")
public class StudentDetailsTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id" ,nullable=false)
    private int student_id;

    @Column(name = "student_roll_no" ,nullable=false)
    private int student_roll_no;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "class_id" ,nullable=false)
    private int class_id;

    @Column(name = "student_full_name" ,nullable=false)
    private String student_full_name;

    @Column(name = "student_father_name" ,nullable=false)
    private String student_father_name;

    @Column(name = "student_mother_name" ,nullable=true)
    private String student_mother_name;

    @Column(name = "student_gender" ,nullable=true)
    private String student_gender;

    @Column(name = "student_dob" ,nullable=false)
    private String student_dob;

    @Column(name = "contact_number" , nullable=false)
    private int contact_number;

    @Column(name = "student_address" ,nullable=false)
    private String student_address;

   public StudentDetailsTable()
   {
     
   }
    

    public StudentDetailsTable(int student_id, int student_roll_no, int class_id, String student_full_name, String student_father_name, String student_mother_name, String student_gender,
            String student_dob,int contact_number,String student_address) {
        super();
        this.student_id = student_id;
        this.student_roll_no =student_roll_no ;
        this.class_id = class_id;
        this.student_full_name = student_full_name;
        this.student_father_name =  student_father_name;
        this.student_mother_name = student_mother_name;
        this.student_gender = student_gender;
        this.student_dob = student_dob;
        this.contact_number = contact_number;
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
 
    public int getclass_id() {
        return class_id;
    }
 
    public void setclass_id(int class_id) {
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

     public int getcontact_number() {
        return contact_number;
    }
 
    public void setcontact_number(int contact_number) {
        this.contact_number = contact_number;
    }


     public String getstudent_address() {
        return student_address ;
    }
 
    public void setstudent_address (String student_address) {
        this.student_address = student_address ;
    }
 
    @Override
    public String toString() {
        return "details [student_id=" + student_id + ", student_roll_no=" + student_roll_no + ", student_class=" + class_id + ", student_full_name=" + student_full_name
                + ", student_father_name=" + student_father_name + ", student_mother_name=" + student_mother_name + ", student_gender=" + student_gender + ", student_DOB=" + student_dob + ", Contact_number=" + contact_number + ", student_address=" + student_address + "]";
    }
 
}
    

