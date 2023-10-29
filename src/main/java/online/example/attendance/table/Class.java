package online.example.attendance.table;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Class_table")
public class Class {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="class_id", length=30,nullable = false)
    private int class_id;

    @Column(name="class_name", length=50,nullable = false)
    private String class_name;

    public Class(int class_id,String class_name)
    {
        this.class_id=class_id;
        this.class_name=class_name;
    }

    public int getclass_id() {
        return class_id;
    }
 
    public void setclass_id(int class_id) {
        this.class_id = class_id;
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
        return "class_id " + class_id +
               " , class_name" + class_name + ";";
    }
    
 
}
