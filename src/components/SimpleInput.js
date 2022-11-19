// import useInput from "../hooks/use-input";
// const SimpleInput = (props) => {
//   const {
//     enteredValue: enteredName,
//     inputBlurHandler: nameBlurHandler,
//     inputChangeHandler: nameChangeHandler,
//     showError: nameHasError,
//     isValueValid: isNameValid,
//     reset: nameReset,
//   } = useInput((value) => value.trim() !== "");

//   const {
//     enteredValue: enteredEmail,
//     inputBlurHandler: emailBlurHandler,
//     inputChangeHandler: emailChangeHandler,
//     showError: emailHasError,
//     isValueValid: isEmailValid,
//     reset: emailReset,
//   } = useInput((value) => value.trim().includes("@"));

//   let isFormValid = false;
//   if (isNameValid && isEmailValid) isFormValid = true;

//   const formSubmissionHandler = (e) => {
//     e.preventDefault();
//     if (!isNameValid || !isEmailValid) return;
//     console.log(enteredName, enteredEmail);
//     nameReset();
//     emailReset();
//   };

//   const nameClass = nameHasError ? "form-control invalid" : "form-control";
//   const emailClass = emailHasError ? "form-control invalid" : "form-control";

//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameClass}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           type="text"
//           id="name"
//           onChange={nameChangeHandler}
//           onBlur={nameBlurHandler}
//           value={enteredName}
//         />
//         {nameHasError && (
//           <p className="error-text">Name should not be empty.</p>
//         )}
//       </div>
//       <div className={emailClass}>
//         <label htmlFor="email">Your Email</label>
//         <input
//           type="text"
//           id="email"
//           onChange={emailChangeHandler}
//           onBlur={emailBlurHandler}
//           value={enteredEmail}
//         />
//         {emailHasError && <p className="error-text">Email must contain @.</p>}
//       </div>
//       <div className="form-actions">
//         <button disabled={!isFormValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;
