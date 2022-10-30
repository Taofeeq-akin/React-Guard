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
      {/* need to put in array cus we want to map through */}
      <CourseList users={[]} />
    </div>
  );
}

export default App;
