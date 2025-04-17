package sapient.UserApiApplication.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.retry.annotation.Retryable;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import sapient.UserApiApplication.entity.User;
import sapient.UserApiApplication.repository.UserRepository;
import sapient.UserApiApplication.response.UserResponse;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;
    @Value("${default.limit}")
    private int defaultLimit;
    private static final String EXTERNAL_API_URL = "https://dummyjson.com/users?limit=";

    @Retryable(value = Exception.class, maxAttempts = 3)
    public void loadUsersFromExternalApi() {
        RestTemplate restTemplate = new RestTemplate();
        var response = restTemplate.getForObject(EXTERNAL_API_URL + defaultLimit, UserResponse.class);
        if (response != null && response.getUsers() != null) {
            userRepository.saveAll(response.getUsers());
        }
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public List<User> getUsersByRole(String role) {
        return userRepository.findByRole(role);
    }

    public List<User> getUsersSortedByAge(String order) {
        return order.equalsIgnoreCase("asc") ? userRepository.findAllByOrderByAgeAsc()
                : userRepository.findAllByOrderByAgeDesc();
    }

    public Optional<User> findUserByIdOrSsn(Long id, String ssn) {
        return id != null ? userRepository.findById(id) : userRepository.findBySsn(ssn);
    }
}
