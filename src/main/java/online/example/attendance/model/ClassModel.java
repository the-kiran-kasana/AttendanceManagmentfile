package online.example.attendance.model;

public class ClassModel {
    int Class_Id;
    String Class_Name;


    public  ClassModel()
    {

    }

    
    public  ClassModel(int Class_Id,String Class_Name)
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
