import styles from "./UsersList.module.css";

function UsersList(props) {
  return (
    <div className={styles["users-list"]}>
      {props.users.map((user) => {
        return (
          <div className={styles["users-list__user"]} key={user.id}>
            {user.username} ({user.age} years old)
          </div>
        );
      })}
    </div>
  );
}

export default UsersList;
