package online.example.attendance.repostery;


import org.springframework.data.jpa.repository.JpaRepository;

import online.example.attendance.Models.StudentDetailsTable;

 

public interface StudentDetailsRepo extends JpaRepository<StudentDetailsTable,Integer>  {
    
}

