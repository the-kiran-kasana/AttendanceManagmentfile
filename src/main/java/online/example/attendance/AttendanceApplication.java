package online.example.attendance;


//import java.time.Month;
//import java.util.Date;
// import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import online.example.attendance.Entity.Attendancepage;
import online.example.attendance.repostery.AttnedanceRepo;


@SpringBootApplication
public class AttendanceApplication implements CommandLineRunner {

	@Autowired AttnedanceRepo ob;


	public static void main(String[] args) {
		SpringApplication.run(AttendanceApplication.class, args);
	}

	@Override
    public void run(String... args) throws Exception
    {
    }


}

