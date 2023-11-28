package online.example.attendance.repostery;


import org.springframework.data.jpa.repository.JpaRepository;

import online.example.attendance.Models.schooltable;

 
public interface SchoolRepo extends JpaRepository<schooltable,Integer>{
    
}
