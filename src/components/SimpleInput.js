// import { useRef } from "react";
import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");

  // const nameInputRef = useRef();
  // const [enteredInputIsValid, setEnteredInputIsValid] = useState(false);

  // To prevent enteredInputIsValid running whenever the page relaod even with empty input value
  const [enteredInputTouched, setEnteredInputTouched] = useState(false);

  const enteredInputIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredInputIsValid && enteredInputTouched;

  // Managing overall form validation by disabling te botton
  let formIsValid = false;

  if (enteredInputIsValid) {
    formIsValid = true;
  }

  const inputEnteredHandler = (event) => {
    setEnteredName(event.target.value);

    // remove error on keyStroke
    // if (event.target.value.trim() !== "") {
    //   setEnteredInputIsValid(true);
    // }
  };

  // Hnadling on lost focus
  const nameInputBlurHandler = (event) => {
    setEnteredInputTouched(true);

    // if (enteredName.trim() === "") {
    //   setEnteredInputIsValid(false);
    // }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setEnteredInputTouched(true);

    if (!enteredInputIsValid) {
      // setEnteredInputIsValid(false);
      return;
    }

    // setEnteredInputIsValid(true);

    // TO clear value input after submit
    setEnteredName("");

    // To reset touch after submit
    setEnteredInputTouched(false);

    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue);

    // can also be done like while using useRef  --But not reallly adviceable
    // nameInputRef.current.value = "";
    console.log(enteredName);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={inputEnteredHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className="error-text">Input your name.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
