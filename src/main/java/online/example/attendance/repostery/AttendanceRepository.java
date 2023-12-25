package online.example.attendance.repostery;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import online.example.attendance.Models.Attendancepage;

public interface AttendanceRepository extends JpaRepository<Attendancepage, Long> {

    @Query("SELECT attendance_details_table, student_details  FROM Attendancepage attendance_details_table JOIN StudentDetailsTable student_details ON attendance_details_table.student_id = student_details.student_id")
    List<Object[]> getAttendanceAndStudentDetails();
}
