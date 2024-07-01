import styles from "./FriendListItem.module.css";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusColor = {
    color: isOnline ? "green" : "red",
  };

  return (
    <div className={styles.item_container}>
      <img className={styles.avatar} src={avatar} alt="Avatar" width="120" />
      <p className={styles.name}>{name}</p>
      <p style={statusColor}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
