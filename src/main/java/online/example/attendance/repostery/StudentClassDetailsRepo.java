package online.example.attendance.repostery;


import org.springframework.data.jpa.repository.JpaRepository;
import online.example.attendance.Entity.StudentClassDetailsTable;

 

public interface StudentClassDetailsRepo extends JpaRepository<StudentClassDetailsTable,Integer>  {
    
}

