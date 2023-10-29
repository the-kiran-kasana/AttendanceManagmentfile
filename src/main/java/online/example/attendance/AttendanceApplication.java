package online.example.attendance;

// import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


import online.example.attendance.repostery.Std_Repo;
import online.example.attendance.table.student;

@SpringBootApplication
public class AttendanceApplication implements CommandLineRunner {


	@Autowired Std_Repo ob;
	public static void main(String[] args) {
		SpringApplication.run(AttendanceApplication.class, args);
	}

	@Override
    public void run(String... args) throws Exception
    {
        // student first = new student(1, 1,"10","kiran kasana","vinodi lal gurjar","prem devi","female","3-jan-2003",703068330,"bhojpura"); 
		// student second = new student(3, 3,"10","kirwergf","vqwretgurjar","pdfghi","female","3-jan-200we",703063230,"bhojwqura"); 
		// ob.save(first);
		// ob.save(second);
		// Optional<student> record=ob.findById(1);
		// System.out.println("record"  );
       // record.stream().forEach(e->{
        // //     System.out.print(e.student_id+"  "+e.student_full_name+" "e.student_roll_no+" "+e.student_class+" "+e.student_father_name+" "+e.student_mother_name+" "+e.student_gender+" "+e.student_DOB+" "+e.Contact_number+" "+e.student_address);
        // // });
		ob.deleteById(5);
    }


}

