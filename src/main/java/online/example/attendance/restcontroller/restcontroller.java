package online.example.attendance.restcontroller;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.BadSqlGrammarException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import online.example.attendance.StudentRequestBody;

import online.example.attendance.Entity.StudentDetailsTable;
import online.example.attendance.model.StudentModel;

@RestController
public class restcontroller extends Throwable{

    private final JdbcTemplate jdbcTemplate;
    public restcontroller(JdbcTemplate jdbcTemplat)
    {
        this.jdbcTemplate=jdbcTemplat;
    }

    @RequestMapping("/Student_details")
    public List<StudentModel> extractData()
    {
        List<StudentModel> dataList = new ArrayList<>();
        try {
        String sql = "SELECT *FROM student_details";
        jdbcTemplate.query(sql,rs -> {
            StudentModel data = new StudentModel();
        data.setstudent_id(rs.getInt("student_id"));
        data.setstudent_roll_no(rs.getInt(" student_roll_no"));
        data.setclass_id(rs.getInt(" class_id"));
        data.setstudent_full_name(rs.getString("student_full_name"));
        data.setstudent_father_name(rs.getString("student_father_name"));
        data.setstudent_mother_name(rs.getString("student_mother_name"));
        data.setstudent_gender(rs.getString("student_gender"));
        data.setstudent_dob(rs.getString("student_dob"));
        data.setcontact_number(rs.getInt("contact_number"));
        data.setstudent_address(rs.getString("student_address"));
        dataList.add(data);
         });
          }catch (BadSqlGrammarException e)
    {
         System.out.println("error : "+e);
    }
        return dataList;

     }




  
    @PostMapping("/add_student_details")
    public List<StudentDetailsTable> extractfromsignup(@Validated @RequestBody StudentRequestBody  data) throws SQLIntegrityConstraintViolationException
    {

        String student_roll_no=data.getstudent_roll_no();
        String class_id=data.getclass_id();
        String student_full_name=data.getstudent_full_name();
        String student_father_name=data.getstudent_father_name();
        String student_mother_name=data.getstudent_mother_name();
        String student_gender=data.getstudent_gender();
        String student_dob=data.getstudent_dob();
        String contact_number=data.getcontact_number();
        String student_address=data.getstudent_address();


        System.out.println(student_full_name);
        System.out.println(student_father_name);
        System.out.println(student_mother_name);


        List<StudentDetailsTable> studentList = new ArrayList<>();
        String sql = "insert into student_details (student_roll_no,class_id,student_full_name,student_father_name,student_mother_name,student_gender,student_dob,contact_number,student_address) values ( " +  student_roll_no + ", " +  class_id + ", '"
                     +  student_full_name + "', '" +  student_father_name + "', '" +  student_mother_name + "', '" +  student_gender + "', '" +  student_dob + "', " +  contact_number + ", '" +  student_address + "');";
        String query="select *from users_details;";
        jdbcTemplate.execute(sql);
        jdbcTemplate.query(query,rs -> {
        StudentDetailsTable data1 = new StudentDetailsTable();

        data1.setstudent_roll_no(rs.getInt("student_roll_no"));
        data1.setclass_id(rs.getInt("class_id"));
        data1.setstudent_full_name(rs.getString("student_full_name"));
        data1.setstudent_father_name(rs.getString("student_father_name"));
        data1.setstudent_mother_name(rs.getString("student_mother_name"));
        data1.setstudent_gender(rs.getString("student_gender"));
        data1.setstudent_dob(rs.getString("student_dob"));
        data1.setcontact_number(rs.getInt("contact_number"));
        data1.setstudent_address(rs.getString("student_address"));

        studentList.add(data1);
        });
        System.out.println(studentList);
    return studentList;
     }
   
    
  
}



