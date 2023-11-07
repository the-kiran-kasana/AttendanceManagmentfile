package online.example.attendance.repostery;

import online.example.attendance.Entity.TeacherDetailsTable;
import org.springframework.data.jpa.repository.JpaRepository;


public interface TeacherDetailsRepo extends JpaRepository<TeacherDetailsTable,Integer>  {
    
}
