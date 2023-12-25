package online.example.attendance.Models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "school_table")
public class schooltable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "school_id", nullable = false)
    private int school_id;

    @Column(name = "school_name", nullable = false)
    private String school_name;

    @Column(name = "local_address", nullable = false)
    private String local_address;

    @Column(name = "district", nullable = false)
    private String district;

    @Column(name = "principal", nullable = false)
    private String principal;

    @Column(name = "password", nullable = false)
    private String password;

    public schooltable() {

    }

    public schooltable(int school_id, String school_name, String local_address, String district, String principal,
            String password) {

        this.school_id = school_id;
        this.school_name = school_name;
        this.local_address = local_address;
        this.district = district;
        this.principal = principal;
        this.password = password;
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

    public String getlocal_address() {
        return local_address;
    }

    public void setlocal_address(String local_address) {
        this.local_address = local_address;
    }

    public String getdistrict() {
        return district;
    }

    public void setdistrict(String district) {
        this.district = district;
    }

    public String getprincipal() {
        return principal;
    }

    public void setprincipal(String principal) {
        this.principal = principal;
    }

    public String getpassword() {
        return password;
    }

    public void setpassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "{"
                + "school_id " + school_id +
                "school_name " + school_name +
                ",local_address" + local_address +
                ",district" + district +
                ",Principal " + principal +
                ",password" + password +
                "}";
    }

}
