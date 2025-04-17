import { useEffect, useState } from "react";
import { fetchUsersByRole } from "../services/api";

export const useFetchUsers = (role: string = 'user') => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetchUsersByRole(role).then((data) => {
      setUsers(data);
      setLoading(false);
    });
  }, [role]);

  return { users, loading };
};
