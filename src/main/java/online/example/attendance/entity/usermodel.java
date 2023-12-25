package online.example.attendance.entity;

public class usermodel {

    private int user_id;
    private int school_id;
    private String user_name;
    private String user_password;

    public usermodel() {

    }

    public usermodel(int user_id, int school_id, String user_name, String user_password) {
        this.user_id = user_id;
        this.school_id = school_id;
        this.user_name = user_name;
        this.user_password = user_password;
    }

    public int getschool_id() {
        return school_id;
    }

    public void setschool_id(int school_id) {
        this.school_id = school_id;
    }

    public int getuser_id() {
        return user_id;
    }

    public void setuser_id(int user_id) {
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
