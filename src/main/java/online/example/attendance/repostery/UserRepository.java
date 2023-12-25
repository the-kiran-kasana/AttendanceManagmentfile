package online.example.attendance.repostery;

import org.springframework.data.jpa.repository.JpaRepository;
import online.example.attendance.Models.UserTable;

public interface UserRepository extends JpaRepository<UserTable, Integer> {

}
