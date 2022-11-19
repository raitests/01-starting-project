import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [nameTouched, setnameTouched] = useState(false);

  const isNameValid = enteredName.trim() !== "";
  const isInvalid = !isNameValid && nameTouched;
  let isFormValid = false;

  if (isNameValid) {
    isFormValid = true;
  }

  const inputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const inputBlurHandler = () => {
    setnameTouched(true);
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setnameTouched(true);

    if (!isNameValid) return;
    console.log(enteredName);

    // inputRef.current.value = ""; Do NOT manipulate the DOM, let react handle the DOM
    setEnteredName("");
    setnameTouched(false);
  };

  const inputClass = isInvalid ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={inputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={inputChangeHandler}
          onBlur={inputBlurHandler}
          value={enteredName}
        />
        {isInvalid && <p className="error-text">Name should not be empty.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
