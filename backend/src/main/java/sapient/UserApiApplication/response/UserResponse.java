package sapient.UserApiApplication.response;

import sapient.UserApiApplication.entity.User;
import java.util.List;

public class UserResponse {
    private List<User> users;

    public List<User> getUsers() {
        return users;
    }

    public void setUsers(List<User> users) {
        this.users = users;
    }
}
