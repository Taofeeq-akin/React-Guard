import styles from "./CourseList.module.css";
import CourseItem from "./CourseItem";

const CourseList = () => {
  return <ul className={styles.goal_list}>
    <CourseItem />
  </ul>;
};

export default CourseList;
