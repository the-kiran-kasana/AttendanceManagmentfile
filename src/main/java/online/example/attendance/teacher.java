package online.example.attendance;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="teachers_details")
public class teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name="Teacher_id",length = 10,nullable = false)
    private int Teacher_id;
    @Column(name="Teacher_id",length = 10,nullable = false)
    private String Teacher_name;
    @Column(name="Teacher_id",length = 10,nullable = true)
    private String subjec;
    @Column(name="Teacher_id",length = 10,nullable = false)
    private String class_teacher;


    
}
