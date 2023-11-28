package online.example.attendance.entity;


public class schoolmodel {
      
    private int school_id; 
    private String school_name;
    private String local_address;
    private String district;
    private String principal;
    private String password;


    public schoolmodel()
    {
        
    }


    public schoolmodel(int school_id,String school_name, String local_address,String district,String principal,String password)
    {
        this.school_id=school_id;
        this.school_name=school_name;
        this.local_address=local_address;
        this.district=district;
        this.principal=principal;
        this.password=password;
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

    public String getlocal_address()
    {
        return local_address;
    }

    public void setlocal_address(String local_address)
    {
        this.local_address=local_address;
    }
    

     public String getdistrict()
    {
        return district;
    }

    public void setdistrict(String district)
    {
        this.district=district;
    }
    

     public String getprincipal()
    {
        return principal;
    }

    public void setprincipal(String principal)
    {
        this.principal=principal;
    }
    

     public String getpassword()
    {
        return password;
    }

    public void setpassword(String password)
    {
        this.password=password;
    }
    
    @Override
    public String toString()
    {
        return "{"
                  +"class_id " + school_id +
                  "class_no " + school_name +
                  ",local_address" + local_address +
                  ",district" + district +
                  ",Principal "+ principal +
                  ",password" + password +
                "}";
    }

 
}
