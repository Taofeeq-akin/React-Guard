import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");

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
  };

  // Hnadling on lost focus
  const nameInputBlurHandler = (event) => {
    setenteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    setenteredNameTouched(true);

    if (!enteredNameIsvalid) {
      return;
    }

    // TO clear value input after submit
    setEnteredName("");

    // To reset touch after submit
    setenteredNameTouched(false);

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
