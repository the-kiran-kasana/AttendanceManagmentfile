package online.example.attendance.requestbody;

public class UserRequestBoby {

    private String user_id;
    private String school_id;
    private String user_name;
    private String user_password;

    public UserRequestBoby() {

    }

    public UserRequestBoby(String user_id, String school_id, String user_name, String user_password) {
        this.user_id = user_id;
        this.school_id = school_id;
        this.user_name = user_name;
        this.user_password = user_password;
    }

    public String getschool_id() {
        return school_id;
    }

    public void setschool_id(String school_id) {
        this.school_id = school_id;
    }

    public String getuser_id() {
        return user_id;
    }

    public void setuser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getuser_name() {
        return user_name;
    }

    public void setuser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getuser_password() {
        return user_password;
    }

    public void setuser_password(String user_password) {
        this.user_password = user_password;
    }

    @Override
    public String toString() {
        return "details [user_id=" + user_id + "school_id=" + school_id + "user_name =" + user_name + "user_password="
                + user_password + "]";
    }

}
