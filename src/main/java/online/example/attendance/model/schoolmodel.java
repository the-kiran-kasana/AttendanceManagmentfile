package online.example.attendance.model;

public class schoolmodel {
    int school_id;
    String school_name;
    String city_name;

     public  schoolmodel()
    {

    }

    public schoolmodel(int school_id,String school_name, String city_name)
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



    