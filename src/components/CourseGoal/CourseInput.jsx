import styles from "./CourseInput.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import { useState } from "react";

const CourseInput = (props) => {
  const [enterdUsername, setEnterdUsername] = useState("");
  const [enterdAge, setEnterdAge] = useState("");
  const [error, setError] = useState()

  const addUserHandler = (event) => {
    event.preventDefault();
    // Input validation
    if (enterdUsername.trim().length === 0 || enterdAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non empty value)"
      })
      return;
    }
    if (+enterdAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)"
      })
      return;
    }

    // will move username and age to App.js file
    props.onAddUser(enterdUsername, enterdAge);

    // Clear Input
    setEnterdUsername("");
    setEnterdAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnterdUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnterdAge(event.target.value);
  };

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} />}
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
    </>
  );
};

export default CourseInput;
