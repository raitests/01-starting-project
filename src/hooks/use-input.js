import { useState } from "react";

const useInput = (validity) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [touched, setTouched] = useState(false);

  const isValueValid = validity(enteredValue);

  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const showError = !isValueValid && touched;

  const valueBlurHandler = () => {
    setTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setTouched(false);
  };

  return {
    value: enteredValue,
    setTouched,
    hasError: showError,
    isValid: isValueValid,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
