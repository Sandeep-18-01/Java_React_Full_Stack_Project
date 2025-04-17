import React from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../services/api";
import styles from "./UserCard.module.css";
interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/users/${user.id}`);
  };

  return (
    <div className={styles.userCard} onClick={handleClick}>
      <p className={styles.userName}>
        {user.firstName} {user.lastName}
      </p>
    </div>
  );
};

export default UserCard;
