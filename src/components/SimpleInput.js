import { useRef } from "react";
import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();
  const [enteredInputIsValid, setEnteredInputIsValid] = useState(true);

  const inputEnteredHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "") {
      setEnteredInputIsValid(false);
      return;
    }

    enteredInputIsValid(true);

    const enteredValue = nameInputRef.current.value;
    console.log(enteredValue);

    // TO clear value input after submit
    setEnteredName("");

    // can also be done like while using useRef  --But not reallly adviceable
    // nameInputRef.current.value = "";
    console.log(enteredName);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          type="text"
          id="name"
          onChange={inputEnteredHandler}
          value={enteredName}
        />
        {!enteredInputIsValid && <p className="error-text">Input your name.</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
