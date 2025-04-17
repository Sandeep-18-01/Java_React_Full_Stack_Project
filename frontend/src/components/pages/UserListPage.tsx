import { useEffect, useState } from "react";
import { fetchUsers, fetchUsersByRole, fetchRoles, User } from "../../services/api";
import UserGrid from "../organisms/UserGrid";

const UserListPage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [roles, setRoles] = useState<string[]>([]);
  const [role, setRole] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      const data = role ? await fetchUsersByRole(role) : await fetchUsers();
      setUsers(data);
    };
    loadUsers();
  }, [role]);

  useEffect(() => {
    const loadRoles = async () => {
      const data = await fetchRoles();
      setRoles(data);
    };
    loadRoles();
  }, []);

  return (
    <div className="container">
      <h1>Users List</h1>
      <select onChange={(e) => setRole(e.target.value)}>
        <option value="">All Roles</option>
        {roles.map((r) => (
          <option key={r} value={r}>
            {r.charAt(0).toUpperCase() + r.slice(1)}
          </option>
        ))}
      </select>
      <UserGrid users={users} />
    </div>
  );
};

export default UserListPage;
