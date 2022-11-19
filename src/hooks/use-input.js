import { useState } from "react";
const useInput = (validity) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValueValid = validity(enteredValue);
  const showError = !isValueValid && isTouched;

  const inputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    setIsTouched,
    inputBlurHandler,
    inputChangeHandler,
    showError,
    isValueValid,
    reset,
  };
};

export default useInput;
