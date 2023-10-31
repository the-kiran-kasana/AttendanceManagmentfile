package online.example.attendance.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;

@Entity
@Table(name="Teachers_Details")
public class TeacherDetailsTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Teacher_Id",length = 10,nullable = false)
    private int Teacher_Id;

    @Column(name="Teacher_Name",length = 100,nullable = false)
    private String Teacher_Name;

    @Column(name="Subject",length = 100,nullable = true)
    private String Subject;

    @Column(name="Class_Id",length = 10,nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Class_Id;

    public TeacherDetailsTable()
    {

    }

    public TeacherDetailsTable(int Teacher_Id,String Teacher_Name,String Subject,int Class_Id)
    {
        this.Teacher_Id=Teacher_Id;
        this.Teacher_Name=Teacher_Name;
        this.Subject=Subject;
        this.Class_Id=Class_Id;    
    }

    public int getTeacher_Id()
    {
        return Teacher_Id;
    }

    public void setTeacher_Id(int Teacher_Id)
    {
        this.Teacher_Id=Teacher_Id;
    }


    public String getTeacher_Name()
    {
        return Teacher_Name;
    }

    public void setTeacher_Name(String Teacher_Name)
    {
        this.Teacher_Name=Teacher_Name;
    }


    public String getSubject()
    {
        return Subject;
    }

    public void setSubject(String Subject)
    {
        this.Subject=Subject;
    }

    public int getClass_Id()
    {
        return Class_Id;
    }

    public void setClass_Id(int Class_Id)
    {
        this.Class_Id=Class_Id;
    }

    @Override
    public String toString()
    {
        return "{"
                   +"teacher_id" + Teacher_Id +", teacher_name " + Teacher_Name + 
                    ", subject " + Subject + " , class_id " + Class_Id +
                "}";
    }
    
}
