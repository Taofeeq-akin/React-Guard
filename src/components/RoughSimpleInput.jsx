// import { useRef } from "react";
import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");

  // const nameInputRef = useRef();
  // const [enteredNameIsvalid, setenteredNameIsvalid] = useState(false);

  // To prevent enteredNameIsvalid running whenever the page relaod even with empty input value
  const [enteredNameTouched, setenteredNameTouched] = useState(false);

  const enteredNameIsvalid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsvalid && enteredNameTouched;

  // Managing overall form validation by disabling te botton
  let formIsValid = false;

  if (enteredNameIsvalid) {
    formIsValid = true;
  }

  const inputEnteredHandler = (event) => {
    setEnteredName(event.target.value);

    // remove error on keyStroke
    // if (event.target.value.trim() !== "") {
    //   setenteredNameIsvalid(true);
    // }
  };

  // Hnadling on lost focus
  const nameInputBlurHandler = (event) => {
    setenteredNameTouched(true);

    // if (enteredName.trim() === "") {
    //   setenteredNameIsvalid(false);
    // }
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setenteredNameTouched(true);

    if (!enteredNameIsvalid) {
      // setenteredNameIsvalid(false);
      return;
    }

    // setenteredNameIsvalid(true);

    // TO clear value input after submit
    setEnteredName("");

    // To reset touch after submit
    setenteredNameTouched(false);

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
