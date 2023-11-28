package online.example.attendance.entity;

public class ClassModel {
    int class_id;
    int class_num;
    String class_name;


    public  ClassModel()
    {

    }

    
    public  ClassModel(int class_id,int class_num,String class_name)
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
                  ",class_name" + class_num +
                  ",class_name" + class_name +
                "}";
    }
    

}
