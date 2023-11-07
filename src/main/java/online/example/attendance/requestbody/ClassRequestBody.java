package online.example.attendance.requestbody;

public class ClassRequestBody {
    

    String class_id;
    String class_num;
    String class_name;


    public  ClassRequestBody()
    {

    }

    
    public  ClassRequestBody(String class_id,String class_num,String class_name)
    {
        this.class_id=class_id;
        this.class_num=class_num;
        this.class_name=class_name;   
    }
    public String getclass_id() {
        return class_id;
    }
 
    public void setclass_id(String class_id) {
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
