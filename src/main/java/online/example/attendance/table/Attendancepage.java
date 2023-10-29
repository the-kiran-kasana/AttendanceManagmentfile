package online.example.attendance.table;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;

@Entity
@Table
public class Attendancepage {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int student_id;
    private int teacher_id;
    private Date date;
    private int presention;

    public Attendancepage(int student_id, int teacher_id,Date date,int presention)
    {
      this.student_id=student_id;
      this.teacher_id=teacher_id;
      this.date=date;
      this.presention=presention;
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

    public int getpresention()
    {
        return presention;
    }

    public void setpresention(int presention)
    {
        this.presention=presention;
    }

    public String toString()
    {
        return "student_id" + student_id + ", teacher_id" + teacher_id + ", date" + date + ", presention" + presention + "";
    }



}
