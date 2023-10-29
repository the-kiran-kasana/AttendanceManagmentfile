package online.example.attendance.table;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;

@Entity
@Table(name="teachers_details")
public class teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="teacher_id",length = 10,nullable = false)
    private int teacher_id;

    @Column(name="teacher_name",length = 10,nullable = false)
    private String teacher_name;

    @Column(name="subject",length = 10,nullable = true)
    private String subject;

    @Column(name="class_id",length = 10,nullable = false)
    private int class_id;

    public teacher(int teacher_id,String teacher_name,String subject,int class_id)
    {
        this.teacher_id=teacher_id;
        this.teacher_name=teacher_name;
        this.subject=subject;
        this.class_id=class_id;    
    }

    public int getteacher_id()
    {
        return teacher_id;
    }

    public void setteacher_id(int teacher_id)
    {
        this.teacher_id=teacher_id;
    }


    public String getteacher_name()
    {
        return teacher_name;
    }

    public void setteacher_name(String teacher_name)
    {
        this.teacher_name=teacher_name;
    }


    public String getsubject()
    {
        return subject;
    }

    public void setsubject(String subject)
    {
        this.subject=subject;
    }

    public int getclass_id()
    {
        return class_id;
    }

    public void setclass_id(int class_id)
    {
        this.class_id=class_id;
    }

    public String toString()
    {
        return "teacher_id" + teacher_id +", teacher_name " + teacher_name + ", subject " + subject + " , class_id " + class_id ;
    }
    
}
