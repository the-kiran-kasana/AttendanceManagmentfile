package online.example.attendance.repostery;

import org.springframework.data.jpa.repository.JpaRepository;

import online.example.attendance.Models.Attendancepage;

public interface AttnedanceRepo extends JpaRepository<Attendancepage, Integer> {

}
