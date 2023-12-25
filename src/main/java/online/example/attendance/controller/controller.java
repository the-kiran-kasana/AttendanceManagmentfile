package online.example.attendance.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class controller {

    @GetMapping("/Welcome_Page")
    String welcompage() {
        return "WelcomePageForAttendance";
    }

    @GetMapping("/About_Page")
    String aboutpage() {
        return "About";
    }

    @GetMapping("/Contact_Page")
    String contactpage() {
        return "Contact";
    }

    @GetMapping("/School_Registration")
    String schooolregirstion() {
        return "SchoolRegistrationForm";
    }

    @GetMapping("/Online_Attendance")
    String attendanceAPI() {
        return "HomePage";
    }

    @GetMapping("/Add_Student_Details")
    String addstudent() {
        return "AddStudentDetails";
    }

    @GetMapping("/Add_Teacher_Details")
    String addteachers() {
        return "AddTeacherDetails";
    }

    @GetMapping("/Add_Class_Details")
    String addclasses() {
        return "AddClassDetails";
    }

    @GetMapping("/Main_Page")
    String API() {
        return "MainAttendancePage";
    }

    @GetMapping("/Signup_Page")
    String sign() {
        return "SignupPage";
    }

}
