package sapient.UserApiApplication.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import sapient.UserApiApplication.entity.User;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByRole(String role);

    List<User> findAllByOrderByAgeAsc();

    List<User> findAllByOrderByAgeDesc();

    Optional<User> findBySsn(String ssn);

    @Query("SELECT DISTINCT u.role FROM User u")
    List<String> findDistinctRoles();
}
