package online.example.attendance.restcontroller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.jdbc.core.JdbcTemplate;
import online.example.attendance.Models.Attendancepage;
import online.example.attendance.Models.StudentClassDetailsTable;
import online.example.attendance.Models.StudentDetailsTable;
import online.example.attendance.Models.TeacherDetailsTable;
import online.example.attendance.Models.schooltable;
import online.example.attendance.entity.schoolmodel;
import online.example.attendance.repostery.AttnedanceRepo;
import online.example.attendance.repostery.SchoolRepo;
import online.example.attendance.repostery.StudentClassDetailsRepo;
import online.example.attendance.repostery.TeacherDetailsRepo;
import online.example.attendance.requestbody.SchoolRequestBody;
import online.example.attendance.repostery.StudentDetailsRepo;
import online.example.attendance.repostery.AttendanceRepository;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;





@RestController
public class Restcontrollerfordetails {

    @Autowired
    private StudentDetailsRepo repo;
    @Autowired
    private StudentClassDetailsRepo repo1;
    @Autowired
    private TeacherDetailsRepo repo2;
    @Autowired
    private SchoolRepo repo3;
    @Autowired
    private AttnedanceRepo repo4;
    @Autowired
    private AttendanceRepository attendanceRepository;



    private final JdbcTemplate jdbcTemplate;

    public Restcontrollerfordetails(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @GetMapping("/attendanceAndStudent")
    public List<Object[]> getAttendanceAndStudentDetails() {
        return attendanceRepository.getAttendanceAndStudentDetails();
    }


    @GetMapping("/classrowlength")
    public long list() {return repo1.count();}
    

    @GetMapping("/student")
    public List<StudentDetailsTable> getAlldetailofstudent(){return repo.findAll();}

    @GetMapping("/classes")
    public List<StudentClassDetailsTable> getAlldetailofclass(){return repo1.findAll();}

    @GetMapping("/teacher")
    public List<TeacherDetailsTable> getAlldetailofteacher(){return repo2.findAll();}

    @GetMapping("/school")
    public List<schooltable> getAlldetailofschool(){return repo3.findAll();}

    @GetMapping("/attendance")
    public List<Attendancepage> getAlldetailofattendancetable(){return repo4.findAll();}

    





    @GetMapping("/student/{id}")
    public Optional<StudentDetailsTable> getstudentById(@PathVariable(value = "id") int id){return repo.findById(id);}

    @GetMapping("/classes/{id}")
    public Optional<StudentClassDetailsTable> getclassById(@PathVariable(value = "id") int id){ return repo1.findById(id); }

    @GetMapping("/teacher/{id}")
    public Optional<TeacherDetailsTable> getteacherById(@PathVariable(value = "id") int id){ return repo2.findById(id); }

    @GetMapping("/school/{id}")
    public Optional<schooltable> getschoolById(@PathVariable(value = "id") int id){ return repo3.findById(id); }




    @DeleteMapping("/deletestudent/{id}")
    public void deleteStudent(@PathVariable(value = "id") int id){ repo.deleteById(id); }

    @DeleteMapping("/deleteclass/{id}")
    public void deleteclass(@PathVariable(value = "id") int id){repo1.deleteById(id); }

    @DeleteMapping("/deleteteacher/{id}")
    public void deleteteacher(@PathVariable(value = "id") int id){repo2.deleteById(id); }

    @DeleteMapping("/deleteschool/{id}")
    public void deleteschool(@PathVariable(value = "id") int id){repo3.deleteById(id); }







    @PostMapping("/add_student_details")
    @ResponseStatus(HttpStatus.CREATED)
    public StudentDetailsTable addstudent(@RequestBody StudentDetailsTable student)
    {
        int student_id=student.getstudent_id();
        int student_roll_no=student.getstudent_roll_no();
        int class_id=student.getclass_id();
        String student_full_name=student.getstudent_full_name();
        String student_father_name=student.getstudent_father_name();
        String student_mother_name=student.getstudent_mother_name();
        String student_gender=student.getstudent_gender();
        String student_dob=student.getstudent_dob();
        int contact_number=student.getcontact_number();
        String student_address=student.getstudent_address();
        StudentDetailsTable student1 = new StudentDetailsTable(student_id,student_roll_no,class_id,student_full_name,student_father_name,student_mother_name,student_gender,student_dob,contact_number,student_address);
        return repo.save(student1);
    }

    @PostMapping("/add_class_details")
    @ResponseStatus(HttpStatus.CREATED)
    public StudentClassDetailsTable addstudent(@RequestBody StudentClassDetailsTable classes)
    {
        int class_id=classes.getclass_id();
        int class_num=classes.getclass_num();
        String class_name=classes.getclass_name();
        StudentClassDetailsTable classdetail = new StudentClassDetailsTable(class_id,class_num,class_name);
        return repo1.save(classdetail);
    }

    @PostMapping("/add_teacher_details")
    @ResponseStatus(HttpStatus.CREATED)
    public TeacherDetailsTable addteacher(@RequestBody TeacherDetailsTable teacher)
    {
        int teacher_id=teacher.getteacher_id();
        String teacher_name=teacher.getteacher_name();
        String subject=teacher.getsubject();
        int class_id=teacher.getclass_id();
        TeacherDetailsTable teacherdetails = new TeacherDetailsTable(teacher_id,teacher_name,subject,class_id);
        return repo2.save(teacherdetails);
    }

    @PostMapping("/add_school_details")
    @ResponseStatus(HttpStatus.CREATED)
    public schooltable addschool(@RequestBody schooltable school)
    {
        int school_id=school.getschool_id();
        String school_name=school.getschool_name();
        String local_address=school.getlocal_address();
        String district=school.getdistrict();
        String principal=school.getprincipal();
        String password=school.getpassword();
        schooltable schooltable = new schooltable(school_id,school_name,local_address,district,principal,password);
        return repo3.save(schooltable);
    }


    @PostMapping("/add__details_in_attendance_table")
    @ResponseStatus(HttpStatus.CREATED)
    public Attendancepage addAttendanceTableDetails(@RequestBody Attendancepage attendance)
    {
        int attendance_id= attendance.getattendance_id();
        int student_id   = attendance.getstudent_id();
        int teacher_id   = attendance.getteacher_id();
        String date      = attendance.getdate();
        boolean isPresent= attendance.getisPresent();

        Attendancepage attendancetable = new Attendancepage(attendance_id,student_id,teacher_id,date,isPresent);
        return repo4.save(attendancetable);
    }

    @PutMapping("/student/{id}")
    public ResponseEntity<Object> updateStudent(@RequestBody StudentDetailsTable student,@PathVariable int id)
    {
        Optional<Optional<StudentDetailsTable>> StudentDetailsRepo = Optional.ofNullable(repo.findById(id));

        if (!StudentDetailsRepo.isPresent())
            return ResponseEntity.notFound().build();

        student.setstudent_id(id);
        repo.save(student);

            return ResponseEntity.noContent().build();
    }


    @PostMapping("/login_controller")
    public  List<schoolmodel> forid(@RequestBody SchoolRequestBody data)
     {
          System.out.println(data.getprincipal());
          System.out.println(data.getpassword());

          String username=data.getprincipal();
          String password=data.getpassword();
          List<schoolmodel> datafromdb = new ArrayList<>();
          String query="select *from school_table where principal= '"+username+"' and password= '"+password+"';";
          jdbcTemplate.execute(query); 
          jdbcTemplate.query(query,rs ->{   
          schoolmodel user1 = new schoolmodel();
          user1.setschool_name(rs.getString("school_name"));
          user1.setprincipal(rs.getString("principal"));
          user1.setpassword(rs.getString("password"));
          datafromdb.add(user1);
          });
          System.out.println(datafromdb);
          System.out.println(datafromdb.size());

          return datafromdb;  
      }
    

    }
