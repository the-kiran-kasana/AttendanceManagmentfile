package online.example.attendance;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class controller {
    @GetMapping("/kasana")
    String logiiiiin()
    {
        return "kiran";
    }

}
