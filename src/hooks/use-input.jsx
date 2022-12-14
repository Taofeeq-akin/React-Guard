import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueTouched, setenteredValueTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && enteredValueTouched;

  const inputEnteredHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  // Hnadling on lost focus
  const inputBlurHandler = (event) => {
    setenteredValueTouched(true);
  };

  const reset = () => {
    // TO clear value input after submit
    setEnteredValue("");

    // To reset touch after submit
    setenteredValueTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    inputEnteredHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
