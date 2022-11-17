import { useState, useEffect } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isNameValid, setisNameValid] = useState(false);
  const [nameTouched, setnameTouched] = useState(false);

  useEffect(() => {
    if (!isNameValid) {
      console.log("User name invalid");
    }
  }, [isNameValid]);

  const inputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const inputBlurHandler = () => {
    setnameTouched(true);
    
    if (enteredName.trim() === "") {
      setisNameValid(false);
      return;
    }
  };

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setnameTouched(true);

    if (enteredName.trim() === "") {
      setisNameValid(false);
      return;
    }

    setisNameValid(true);
    console.log(enteredName);

    // inputRef.current.value = ""; Do NOT manipulate the DOM, let react handle the DOM
    setEnteredName("");
  };

  const isInvalid = !isNameValid && nameTouched;

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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
