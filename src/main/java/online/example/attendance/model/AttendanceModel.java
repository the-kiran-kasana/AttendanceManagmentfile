package online.example.attendance.model;

import java.sql.Date;

public class AttendanceModel {
    int Student_Id;
    int Teacher_Id;
    Date date;
    boolean isPresent;

    public AttendanceModel()
    {

    }
    public AttendanceModel(int Student_Id, int Teacher_Id,Date date,boolean isPresent)
    {
      this.Student_Id=Student_Id;
      this.Teacher_Id=Teacher_Id;
      this.date=date;
      this.isPresent=isPresent;
    }
    
    public int getStudent_Id()
    {
        return Student_Id;
    }

    public void setStudent_Id(int Student_Id)
    {
        this.Student_Id=Student_Id;
    }
    
    public int getTeacher_Id()
    {
        return Teacher_Id;
    }

    public void setTeacher_Id(int Teacher_Id)
    {
        this.Teacher_Id=Teacher_Id;
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
        return "{" 
                   + "student_id" + Student_Id + ", teacher_id" + Teacher_Id + 
                   ", date" + date + ", presention" + isPresent +
               "}";
    }



}
