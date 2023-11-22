package online.example.attendance.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class controller {
    
    @GetMapping("/online_attendance")
    String attendanceAPI()
    {
        return "HomePage";
    }

    @GetMapping("/newpage")
    String API()
    {
        return "newattendancepage";
    }

    @GetMapping("/addstudentdetails")
    String addstudent()
    {
        return "AddStudentDetails";
    }

    @GetMapping("/addteacherdetails")
    String addteachers()
    {
        return "AddTeacherDetails";
    }

    @GetMapping("/addclassdetails")
    String addclasses()
    {
        return "AddClassDetails";
    }
}
