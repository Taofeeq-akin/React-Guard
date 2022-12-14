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

  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [enteredEmailTouched, setenteredEmailTouched] = useState(false);

  // const enteredEmailIsvalid = enteredEmail.includes("@");
  // const emailInputIsInvalid = !enteredEmailIsvalid && enteredEmailTouched;

  // Managing overall form validation by disabling te botton
  let formIsValid = false;

  if (enteredNameIsvalid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsvalid) {
      return;
    }

    nameInputReset();

    console.log(enteredName);
  };

  const nameInputClasses = nameInputHasError
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
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
