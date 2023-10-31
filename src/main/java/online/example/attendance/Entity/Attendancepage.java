package online.example.attendance.Entity;

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
    @Column(name="Student_Id",length =10,nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Student_Id;

    @Column(name="Teacher_Id",length =10,nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int Teacher_Id;

    @Column(nullable = false)
   // @Temporal(TemporalType.DATE)
    private String date;

    @Column(nullable = false)
    private boolean isPresent;

    public Attendancepage()
    {
        
    }

    public Attendancepage(int Student_Id, int Teacher_Id,String date,boolean isPresent)
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
                   + "student_id" + Student_Id + ", teacher_id" + Teacher_Id + 
                   ", date" + date + ", presention" + isPresent +
               "}";
    }



}
