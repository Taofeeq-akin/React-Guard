import styles from "./CourseInput.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import { useState, useRef } from "react";

const CourseInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [enterdUsername, setEnterdUsername] = useState("");
  const [enterdAge, setEnterdAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;

    // Input validation
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non empty value)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0)",
      });
      return;
    }

    // will move username and age to App.js file
    // props.onAddUser(enterdUsername, enterdAge);
    props.onAddUser(enteredName, enteredUserAge);

    // Clear Input
    // setEnterdUsername("");
    // setEnterdAge("");
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  // const usernameChangeHandler = (event) => {
  //   setEnterdUsername(event.target.value);
  // };

  // const ageChangeHandler = (event) => {
  //   setEnterdAge(event.target.value);
  // };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClear={errorHandler}
        />
      )}
      <form onSubmit={addUserHandler}>
        <div className={styles.form_control}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            // value={enterdUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="age">Age (Years) </label>
          <input
            type="number"
            id="age"
            // value={enterdAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </>
  );
};

export default CourseInput;
