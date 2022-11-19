import { useReducer } from "react";

const initState = {
  value: "",
  touched: false,
};

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, touched: state.touched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, touched: true };
  }
  if (action.type === "RESET") {
    return initState;
  }
  return initState;
};

const useInput = (validity) => {
  const [inputState, dispatch] = useReducer(inputReducer, initState);

  const isValueValid = validity(inputState.value);

  const valueChangeHandler = (e) => {
    dispatch({ type: "INPUT", value: e.target.value });
  };

  const showError = !isValueValid && inputState.touched;

  const valueBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    hasError: showError,
    isValid: isValueValid,
    valueChangeHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInput;
