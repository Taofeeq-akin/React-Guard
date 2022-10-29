import React from "react";
import CourseInput from "./components/CourseGoal/CourseInput";
import CourseList from "./components/CourseGoal/CourseList";

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <div className={styles.user_details}>
        <CourseInput />
      </div>
      <CourseList />
    </div>
  );
}

export default App;
