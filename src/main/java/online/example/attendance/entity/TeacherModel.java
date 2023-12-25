package online.example.attendance.entity;

public class TeacherModel {
    int teacher_id;
    String teacher_name;
    String subject;
    int class_id;

    public TeacherModel() {

    }

    public TeacherModel(int teacher_id, String teacher_name, String subject, int class_id) {
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

    public void setSubject(String subject) {
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
