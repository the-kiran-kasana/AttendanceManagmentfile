package online.example.attendance.repostery;

import org.springframework.data.jpa.repository.JpaRepository;

import online.example.attendance.Models.TeacherDetailsTable;


public interface TeacherDetailsRepo extends JpaRepository<TeacherDetailsTable,Integer>  {
    
}
