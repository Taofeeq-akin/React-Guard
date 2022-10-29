import React from "react";
import CourseInput from "./components/CourseGoal/CourseInput";

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <div className={styles.user_details}>
        <CourseInput />
      </div>
    </div>
  );
}

export default App;
