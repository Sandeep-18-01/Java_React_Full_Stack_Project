import { User } from "../../services/api";
import UserCard from "../molecules/UserCard";

const UserGrid = ({ users }: { users: User[] }) => {
  return (
    <div className="user-grid">
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserGrid;
