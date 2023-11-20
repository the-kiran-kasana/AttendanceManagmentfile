package online.example.attendance.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="school_table")
public class schooltable {
    
 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="school_id", nullable = false)
    private int school_id;

    @Column(name="school_name", nullable = false)
    private String school_name;

    @Column(name="city_name",nullable = false)
    private String city_name;

    public schooltable()
    {
        
    }

    public schooltable(int school_id,String school_name, String city_name)
    {
        this.school_id=school_id;
        this.school_name=school_name;
        this.city_name=city_name;
    }

    public int getschool_id() {
        return school_id;
    }
 
    public void setschool_id(int school_id) {
        this.school_id = school_id;
    }

    public String getschool_name() {
        return school_name;
    }
 
    public void setschool_name(String school_name) {
        this.school_name = school_name;
    }

    public String getcity_name()
    {
        return city_name;
    }

    public void setclass_name(String city_name)
    {
        this.city_name=city_name;
    }
    
    @Override
    public String toString()
    {
        return "{"
                  +"class_id " + school_id +
                  "class_no " + school_name +
                  ",class_name" + city_name +
                "}";
    }

 
}
