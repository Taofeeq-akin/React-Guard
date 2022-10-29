import styles from "./CourseInput.module.css";
import Button from "../UI/Button";

const CourseInput = () => {
  return (
    <form>
      <div className={styles.form_control}>
        <label>Username</label>
        <input type="text" />
      </div>
      <div className={styles.form_control}>
        <label>Age (Years) </label>
        <input type="text" />
      </div>
      <Button />
    </form>
  );
};

export default CourseInput;
