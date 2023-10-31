package online.example.attendance.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class controller {
    
    @GetMapping("/online_attendance")
    String attendanceAPI()
    {
        return "AttendaacePage";
    }

}
