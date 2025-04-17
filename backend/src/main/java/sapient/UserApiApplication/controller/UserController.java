package sapient.UserApiApplication.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import sapient.UserApiApplication.entity.User;
import sapient.UserApiApplication.repository.UserRepository;
import sapient.UserApiApplication.service.UserService;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/load")
    public ResponseEntity<String> loadUsers() {
        userService.loadUsersFromExternalApi();
        return ResponseEntity.ok("Users loaded successfully");
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    @GetMapping("/role/{role}")
    public ResponseEntity<List<User>> getUsersByRole(@PathVariable String role) {
        return ResponseEntity.ok(userService.getUsersByRole(role));
    }

    @GetMapping("/sorted")
    public ResponseEntity<List<User>> getUsersSortedByAge(@RequestParam String order) {
        return ResponseEntity.ok(userService.getUsersSortedByAge(order));
    }

    @GetMapping("/search")
    public ResponseEntity<User> findUserByIdOrSsn(@RequestParam(required = false) Long id,
            @RequestParam(required = false) String ssn) {
        Optional<User> user = userService.findUserByIdOrSsn(id, ssn);
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping("/roles")
    public ResponseEntity<List<String>> getDistinctRoles() {
        List<String> roles = userRepository.findDistinctRoles();
        return ResponseEntity.ok(roles);
    }
}
