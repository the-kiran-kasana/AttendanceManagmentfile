package online.example.attendance.requestbody;

public class TeacherReqestBody {

    String teacher_id;
    String teacher_name;
    String subject;
    String class_id;

    public TeacherReqestBody() {

    }

    public TeacherReqestBody(String teacher_id, String teacher_name, String subject, String class_id) {
        this.teacher_id = teacher_id;
        this.teacher_name = teacher_name;
        this.subject = subject;
        this.class_id = class_id;
    }

    public String getteacher_id() {
        return teacher_id;
    }

    public void setteacher_id(String teacher_id) {
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

    public String getclass_id() {
        return class_id;
    }

    public void setclass_id(String class_id) {
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
