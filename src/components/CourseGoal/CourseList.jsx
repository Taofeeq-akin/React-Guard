import styles from "./CourseList.module.css";

const CourseList = (props) => {
  return (
    <div className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
