package online.example.attendance.repostery;


import org.springframework.data.jpa.repository.JpaRepository;

import online.example.attendance.table.student;
 

public interface Std_Repo extends JpaRepository<student,Integer>  {

}
