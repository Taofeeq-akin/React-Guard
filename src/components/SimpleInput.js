import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsvalid,
    hasError: nameInputHasError,
    inputEnteredHandler: nameEnteredHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsvalid,
    hasError: emailInputHasError,
    inputEnteredHandler: emailEnteredHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => value.includes("@"));

  // Managing overall form validation by disabling te botton
  let formIsValid = false;

  if (enteredNameIsvalid && enteredEmailIsvalid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsvalid || !enteredEmailIsvalid) {
      return;
    }

    nameInputReset();
    emailInputReset();

    console.log(enteredName);
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameEnteredHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className="error-text">Input your name.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Emailaddress</label>
        <input
          type="text"
          id="name"
          onChange={emailEnteredHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Input your Emailaddress.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
