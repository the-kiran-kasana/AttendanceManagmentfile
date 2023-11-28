package online.example.attendance.entity;

import java.sql.Date;

public class AttendanceModel {
    int attendance_id;
    int student_id;
    int teacher_id;
    Date date;
    boolean isPresent;

    public AttendanceModel()
    {

    }
    public AttendanceModel(int attendance_id,int student_id, int teacher_id,Date date,boolean isPresent)
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

    public Date getdate()
    {
        return date;
    }

    public void setdate(Date date)
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
        return "{" + "Attendance_Id" + attendance_id
                   + "student_id" + student_id + ", teacher_id" + teacher_id + 
                   ", date" + date + ", presention" + isPresent +
               "}";
    }



}
