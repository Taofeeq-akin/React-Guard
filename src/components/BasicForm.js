import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    inputEnteredHandler: firstNameEnteredHandler,
    inputBlurHandler: firstNameBlurdHandler,
    reset: firstNameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    inputEnteredHandler: lastNameEnteredHandler,
    inputBlurHandler: lastNameBlurdHandler,
    reset: lastNameInputReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    inputEnteredHandler: emailEnteredHandler,
    inputBlurHandler: emailBlurdHandler,
    reset: emailInputReset,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    if (
      !enteredFirstNameIsValid ||
      !enteredLastNameIsValid ||
      !enteredEmailIsValid
    ) {
      return;
    }

    firstNameInputReset();
    lastNameInputReset();
    emailInputReset();

    console.log(enteredFirstName);
  };

  const inputClasses = firstNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastinputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={inputClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredFirstName}
            onChange={firstNameEnteredHandler}
            onBlur={firstNameBlurdHandler}
          />
          {firstNameInputHasError && (
            <p className="error-text">Input your first name</p>
          )}
        </div>
        <div className={lastinputClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameEnteredHandler}
            onBlur={lastNameBlurdHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text">Input your last name</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailEnteredHandler}
          onBlur={emailBlurdHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Input correct email address</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
