import React, { useCallback, useState } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showParagraph, setShowParagragh] = useState(false);
  console.log("App Running");

  const toggleParagraphHandler = useCallback(() => {
    setShowParagragh((prevShowParagraph) => !prevShowParagraph);
  }, []);
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragrph!</Button>
    </div>
  );
}

export default App;
