package online.example.attendance.model;

public class TeacherModel {
    int Teacher_Id;
    String Teacher_Name;
    String Subject;
    int Class_Id;

    public TeacherModel()
    {

    }
    public TeacherModel(int Teacher_Id,String Teacher_Name,String Subject,int Class_Id)
    {
        this.Teacher_Id=Teacher_Id;
        this.Teacher_Name=Teacher_Name;
        this.Subject=Subject;
        this.Class_Id=Class_Id; 
    }
    public int getTeacher_Id()
    {
        return Teacher_Id;
    }

    public void setTeacher_Id(int Teacher_Id)
    {
        this.Teacher_Id=Teacher_Id;
    }


    public String getTeacher_Name()
    {
        return Teacher_Name;
    }

    public void setTeacher_Name(String Teacher_Name)
    {
        this.Teacher_Name=Teacher_Name;
    }


    public String getSubject()
    {
        return Subject;
    }

    public void setSubject(String Subject)
    {
        this.Subject=Subject;
    }

    public int getClass_Id()
    {
        return Class_Id;
    }

    public void setClass_Id(int Class_Id)
    {
        this.Class_Id=Class_Id;
    }

    @Override
    public String toString()
    {
        return "{"
                   +"teacher_id" + Teacher_Id +", teacher_name " + Teacher_Name + 
                    ", subject " + Subject + " , class_id " + Class_Id +
                "}";
    }

}
