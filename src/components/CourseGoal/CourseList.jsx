import styles from "./CourseList.module.css";
import CourseItem from "./CourseItem";

const CourseList = (props) => {
  return (
    <div className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseList;
