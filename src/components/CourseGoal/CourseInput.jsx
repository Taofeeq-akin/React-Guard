import styles from "./CourseInput.module.css";
import Button from "../UI/Button";

const CourseInput = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <div className={styles.form_control}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className={styles.form_control}>
        <label htmlFor="age">Age (Years) </label>
        <input type="number" id="age" />
      </div>
      <Button />
    </form>
  );
};

export default CourseInput;
