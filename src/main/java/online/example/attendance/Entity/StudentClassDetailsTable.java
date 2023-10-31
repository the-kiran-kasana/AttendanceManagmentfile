package online.example.attendance.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Class_Table")
public class StudentClassDetailsTable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="Class_Id", length=30,nullable = false)
    private int Class_Id;

    @Column(name="Class_Name", length=50,nullable = false)
    private String Class_Name;

    public StudentClassDetailsTable()
    {
        
    }

    public StudentClassDetailsTable(int Class_Id,String Class_Name)
    {
        this.Class_Id=Class_Id;
        this.Class_Name=Class_Name;
    }

    public int getClass_Id() {
        return Class_Id;
    }
 
    public void setClass_Id(int Class_Id) {
        this.Class_Id = Class_Id;
    }

    public String getClass_Name()
    {
        return Class_Name;
    }

    public void setClass_Name(String Class_Name)
    {
        this.Class_Name=Class_Name;
    }
    
    @Override
    public String toString()
    {
        return "{"
                  +"class_id " + Class_Id +
                  ",class_name" + Class_Name +
                "}";
    }
    
 
}
