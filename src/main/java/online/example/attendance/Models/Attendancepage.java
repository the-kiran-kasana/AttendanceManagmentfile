package online.example.attendance.Models;

import java.util.List;

//import java.sql.Date;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
//import jakarta.persistence.Temporal;
//import jakarta.persistence.TemporalType;


@Entity
@Table(name = "AttendanceDetailsTable")
public class Attendancepage {

    @Id
    @Column(name="attendance_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int attendance_id;

   @Column(name="student_id")
    private int student_id;

    @Column(name="teacher_id",length =10,nullable = false)
    private int teacher_id;

    @Column(nullable = false)
   // @Temporal(TemporalType.DATE)
    private String date;

    @Column(nullable = false)
    private boolean isPresent;

    public Attendancepage()
    {
        
    }

    public Attendancepage(int attendance_id,int student_id, int teacher_id,String date,boolean isPresent)
    {
      this.attendance_id=attendance_id;
      this.student_id=student_id;
      this.teacher_id=teacher_id;
      this.date=date;
      this.isPresent=isPresent;
    }


    public int getattendance_id()
    {
        return attendance_id;
    }

    public void setattendance_id(int attendance_id)
    {
        this.attendance_id=attendance_id;
    }
    

    public int getstudent_id()
    {
        return student_id;
    }

    public void setstudent_id(int student_id)
    {
        this.student_id=student_id;
    }
    
    public int getteacher_id()
    {
        return teacher_id;
    }

    public void setteacher_id(int teacher_id)
    {
        this.teacher_id=teacher_id;
    }

    public String getdate()
    {
        return date;
    }

    public void setdate(String date)
    {
        this.date=date;
    }

    public boolean getisPresent()
    {
        return isPresent;
    }

    public void setisPresent(boolean isPresent)
    {
        this.isPresent=isPresent;
    }

    @Override
    public String toString()
    {
        return "{" 
                   +"Attendance_Id"+ attendance_id
                   + "student_id" + student_id + ", teacher_id" + teacher_id + 
                   ", date" + date + ", presention" + isPresent +
               "}";
    }

   



}
