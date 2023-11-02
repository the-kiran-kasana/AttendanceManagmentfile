package online.example.attendance.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Student_Details")
public class StudentDetailsTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Student_Id" ,nullable=false)
    private int Student_Id;

    @Column(name = "Student_Roll_No" ,length = 100,nullable=false) 
    private int Student_Roll_No;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Class_Id" ,length = 30,nullable=false) 
    private int Class_Id;

    @Column(name = "Student_Full_Name" ,length = 100,nullable=false) 
    private String Student_Full_Name;

    @Column(name = "Student_Father_Name" ,length = 100,nullable=false) 
    private String Student_Father_Name;

    @Column(name = "Student_Mother_Name" ,length = 100,nullable=true) 
    private String Student_Mother_Name;

    @Column(name = "Student_Gender" ,length = 10,nullable=true) 
    private String Student_Gender;

    @Column(name = "Student_DOB" ,length = 100,nullable=false) 
    private String Student_DOB;

    @Column(name = "Contact_Number" ,length = 100, nullable=false) 
    private int Contact_Number;

    @Column(name = "Student_Address" ,length = 100,nullable=false) 
    private String Student_Address;

   public StudentDetailsTable()
   {
     
   }
    

    public StudentDetailsTable(int Student_Id, int Student_Roll_No, int Class_Id, String Student_Full_Name, String Student_Father_Name, String Student_Mother_Name, String Student_Gender,
            String Student_DOB,int Contact_Number,String Student_Address) {
        super();
        this.Student_Id = Student_Id;
        this.Student_Roll_No =Student_Roll_No ;
        this.Class_Id = Class_Id;
        this.Student_Full_Name = Student_Full_Name;
        this.Student_Father_Name =  Student_Father_Name;
        this.Student_Mother_Name = Student_Mother_Name;
        this.Student_Gender = Student_Gender;
        this.Student_DOB = Student_DOB;
        this.Contact_Number = Contact_Number;
        this.Student_Address = Student_Address;
    }



    


    public int getStudent_Id() {
        return Student_Id;
    }
 
    public void setStudent_Id(int Student_Id) {
        this.Student_Id = Student_Id;
    }
 
    public int getStudent_Roll_No() {
        return Student_Roll_No;
    }
 
    public void setStudent_Roll_No(int Student_Roll_No) {
        this.Student_Roll_No = Student_Roll_No;
    }
 
    public int getClass_Id() {
        return Class_Id;
    }
 
    public void setClass_Id(int Class_Id) {
        this.Class_Id = Class_Id;
    }
 
    public String getStudent_Full_Name() {
        return Student_Full_Name;
    }
 
    public void setStudent_Full_Name(String Student_Full_Name) {
        this.Student_Full_Name =Student_Full_Name;
    }
 
    public String getStudent_Father_Name() {
        return Student_Father_Name;
    }
 
    public void setStudent_Father_Name(String Student_Father_Name) {
        this.Student_Father_Name = Student_Father_Name;
    }
 
    public String getStudent_Mother_Name() {
        return Student_Mother_Name;
    }
 
    public void setStudent_Mother_Name(String Student_Mother_Name) {
        this.Student_Mother_Name = Student_Mother_Name;
    }
 
    public String getStudent_Gender() {
        return Student_Gender;
    }
 
    public void setStudent_Gender(String Student_Gender) {
        this.Student_Gender = Student_Gender;
    }
 
    public String getStudent_DOB() {
        return Student_DOB;
    }
 
    public void setStudent_DOB(String Student_DOB) {
        this.Student_DOB = Student_DOB;
    }

     public int getContact_Number() {
        return Contact_Number;
    }
 
    public void setContact_Number(int Contact_Number) {
        this.Contact_Number = Contact_Number;
    }


     public String getStudent_Address () {
        return Student_Address ;
    }
 
    public void setStudent_Address (String Student_Address ) {
        this.Student_Address  = Student_Address ;
    }
 
    @Override
    public String toString() {
        return "details [student_id=" + Student_Id + ", student_roll_no=" + Student_Roll_No + ", student_class=" + Class_Id + ", student_full_name=" + Student_Full_Name
                + ", student_father_name=" + Student_Father_Name + ", student_mother_name=" + Student_Mother_Name + ", student_gender=" + Student_Gender + ", student_DOB=" + Student_DOB + ", Contact_number=" + Contact_Number + ", student_address=" + Student_Address + "]";
    }
 
}
    

