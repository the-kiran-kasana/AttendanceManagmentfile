package online.example.attendance.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GenerationType;

@Entity
@Table(name = "teachers_details")
public class TeacherDetailsTable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "teacher_id", nullable = false)
    private int teacher_id;

    @Column(name = "teacher_name", nullable = false)
    private String teacher_name;

    @Column(name = "subject", nullable = true)
    private String subject;

    @Column(name = "class_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int class_id;

    public TeacherDetailsTable() {

    }

    public TeacherDetailsTable(int teacher_id, String teacher_name, String subject, int class_id) {
        this.teacher_id = teacher_id;
        this.teacher_name = teacher_name;
        this.subject = subject;
        this.class_id = class_id;
    }

    public int getteacher_id() {
        return teacher_id;
    }

    public void setteacher_id(int teacher_id) {
        this.teacher_id = teacher_id;
    }

    public String getteacher_name() {
        return teacher_name;
    }

    public void setteacher_name(String teacher_name) {
        this.teacher_name = teacher_name;
    }

    public String getsubject() {
        return subject;
    }

    public void setsubject(String subject) {
        this.subject = subject;
    }

    public int getclass_id() {
        return class_id;
    }

    public void setclass_id(int class_id) {
        this.class_id = class_id;
    }

    @Override
    public String toString() {
        return "{"
                + "teacher_id" + teacher_id + ", teacher_name " + teacher_name +
                ", subject " + subject + " , class_id " + class_id +
                "}";
    }

}
