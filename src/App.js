import React, { useState } from "react";
import CourseInput from "./components/CourseGoal/CourseInput";
import CourseList from "./components/CourseGoal/CourseList";

import styles from "./App.module.css";

function App() {
  // need to put in array cus we want to map through
  const [usersLists, setUsersList] = useState([]);

  //  this for lifting up from child to parent
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevList) => {
      return [
        ...prevList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <div className={styles.user_details}>
        <CourseInput onAddUser={addUserHandler} />
      </div>
      <CourseList users={usersLists} />
    </div>
  );
}

export default App;
