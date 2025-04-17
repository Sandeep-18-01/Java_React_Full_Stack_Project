package sapient.UserApiApplication.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "users")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User {
    @Id
    private Long id;
    private String firstName;
    private String lastName;
    private int age;
    private String role;
    private String ssn;
    private String image;
}
