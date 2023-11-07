package online.example.attendance.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="class_table")
public class StudentClassDetailsTable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="class_id", nullable = false)
    private int class_id;

    @Column(name="class_num", nullable = false)
    private int class_num;

    @Column(name="class_name",nullable = false)
    private String class_name;

    public StudentClassDetailsTable()
    {
        
    }

    public StudentClassDetailsTable(int class_id,int class_num, String class_name)
    {
        this.class_id=class_id;
        this.class_num=class_num;
        this.class_name=class_name;
    }

    public int getclass_id() {
        return class_id;
    }
 
    public void setclass_id(int class_id) {
        this.class_id = class_id;
    }

    public int getclass_num() {
        return class_num;
    }
 
    public void setclass_num(int class_num) {
        this.class_num = class_num;
    }

    public String getclass_name()
    {
        return class_name;
    }

    public void setclass_name(String class_name)
    {
        this.class_name=class_name;
    }
    
    @Override
    public String toString()
    {
        return "{"
                  +"class_id " + class_id +
                  "class_no " + class_num +
                  ",class_name" + class_name +
                "}";
    }
    
 
}
