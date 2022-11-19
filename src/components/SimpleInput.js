import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  const {
    enteredValue: enteredName,
    setIsTouched: setNameTouched,
    inputBlurHandler: nameBlurHandler,
    inputChangeHandler: nameChangeHandler,
    showError: nameHasError,
    isValueValid: isNameValid,
    reset,
  } = useInput((value) => value.trim() !== "");

  let isFormValid = false;
  if (isNameValid) isFormValid = true;

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setNameTouched(true);

    if (!isNameValid) return;

    // inputRef.current.value = ""; Do NOT manipulate the DOM, let react handle the DOM
    reset();
  };

  const inputClass = nameHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameHasError && (
          <p className="error-text">Name should not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
