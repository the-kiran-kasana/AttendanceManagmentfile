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
import online.example.attendance.Entity.StudentDetailsTable;
import online.example.attendance.Entity.StudentClassDetailsTable;
import online.example.attendance.Entity.TeacherDetailsTable;
import online.example.attendance.repostery.StudentClassDetailsRepo;
import online.example.attendance.repostery.TeacherDetailsRepo;
import online.example.attendance.repostery.StudentDetailsRepo;
import java.util.List;
import java.util.Optional;





@RestController
public class Restcontrollerfordetails {

    @Autowired
    private StudentDetailsRepo repo;
    private StudentClassDetailsRepo repo1;
    private TeacherDetailsRepo repo2;


    @GetMapping("/student")
    public List<StudentDetailsTable> getAlldetailofstudent(){return repo.findAll();}

    @GetMapping("/classes")
    public List<StudentClassDetailsTable> getAlldetailofclass(){return repo1.findAll();}

    @GetMapping("/teacher")
    public List<TeacherDetailsTable> getAlldetailofteacher(){return repo2.findAll();}





    @GetMapping("/student/{id}")
    public Optional<StudentDetailsTable> getstudentById(@PathVariable(value = "id") int id){return repo.findById(id);}

    @GetMapping("/classes/{id}")
    public Optional<StudentClassDetailsTable> getclassById(@PathVariable(value = "id") int id){ return repo1.findById(id); }

    @GetMapping("/teacher/{id}")
    public Optional<TeacherDetailsTable> getteacherById(@PathVariable(value = "id") int id){ return repo2.findById(id); }




    @DeleteMapping("/deletestudent/{id}")
    public void deleteStudent(@PathVariable(value = "id") int id){ repo.deleteById(id); }

    @DeleteMapping("/deleteclass/{id}")
    public void deleteclass(@PathVariable(value = "id") int id){repo1.deleteById(id); }

    @DeleteMapping("/deleteteacher/{id}")
    public void deleteteacher(@PathVariable(value = "id") int id){repo2.deleteById(id); }






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
}
