import styles from "./CourseInput.module.css";
import Button from "../UI/Button";
import { useState } from "react";

const CourseInput = (props) => {
  const [enterdUsername, setEnterdUsername] = useState("");
  const [enterdAge, setEnterdAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enterdAge, enterdUsername);
    setEnterdUsername("");
    setEnterdAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnterdUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnterdAge(event.target.value );
  };

  return (
    <form onSubmit={addUserHandler}>
      <div className={styles.form_control}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={enterdUsername}
          id="username"
          onChange={usernameChangeHandler}
        />
      </div>
      <div className={styles.form_control}>
        <label htmlFor="age">Age (Years) </label>
        <input
          type="number"
          value={enterdAge}
          id="age"
          onChange={ageChangeHandler}
        />
      </div>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default CourseInput;
