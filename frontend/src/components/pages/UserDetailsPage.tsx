import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById, User } from "../../services/api";
import styles from "./UserDetailsPage.module.css";

const UserDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (id) {
      fetchUserById(Number(id)).then(setUser);
    }
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.userCard}>
        <img src={user.image} alt={user.firstName} className={styles.userImage} />
        <h1>{user.firstName} {user.lastName}</h1>
        <p>Age: {user.age}</p>
        <p>Role: {user.role}</p>
        <p>SSN: {user.ssn}</p>
      </div>
    </div>
  );
};

export default UserDetailsPage;
