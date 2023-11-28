package online.example.attendance.repostery;


import org.springframework.data.jpa.repository.JpaRepository;

import online.example.attendance.Models.StudentClassDetailsTable;

 

public interface StudentClassDetailsRepo extends JpaRepository<StudentClassDetailsTable,Integer>  {
    
}

