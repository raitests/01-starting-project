import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    hasError: firstError,
    isValid: isFirstValid,
    valueBlurHandler: firstBlurHandler,
    valueChangeHandler: firstChangeHandler,
    reset: firstReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastName,
    hasError: lastError,
    isValid: isLastValid,
    valueBlurHandler: lastBlurHandler,
    valueChangeHandler: lastChangeHandler,
    reset: lastReset,
  } = useInput((value) => value.trim() !== "");
  const {
    value: email,
    hasError: emailError,
    isValid: isEmailValid,
    valueBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
    reset: emailReset,
  } = useInput((value) => value.trim().includes("@") && value.trim() !== "");

  let isFormValid = false;
  if (isFirstValid && isLastValid && isEmailValid) isFormValid = true;

  const FormSubmitHandler = (e) => {
    e.preventDefault();
    if (isFormValid) return;
    firstReset();
    lastReset();
    emailReset();
  };

  const firstClass = firstError ? "form-control invalid" : "form-control";
  const lastClass = lastError ? "form-control invalid" : "form-control";
  const emailClass = emailError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={FormSubmitHandler}>
      <div className="control-group">
        <div className={firstClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstChangeHandler}
            value={firstName}
            onBlur={firstBlurHandler}
          />
          {firstError && <p>First name must not be empty.</p>}
        </div>

        <div className={lastClass}>
          <label htmlFor="Lname">Last Name</label>
          <input
            type="text"
            id="Lname"
            onChange={lastChangeHandler}
            value={lastName}
            onBlur={lastBlurHandler}
          />
          {lastError && <p>Last name must not be empty.</p>}
        </div>

        <div className={emailClass}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="name"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={email}
          />
          {emailError && <p>Email must contain @ and must not be empty</p>}
        </div>
        <div className="form-actions">
          <button disabled={!isFormValid}>Submit</button>
        </div>
      </div>
    </form>
  );
};

export default BasicForm;
