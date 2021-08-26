import React, { useState } from "react";

//It is very important that the name of this functional component starts with “use”. This functional component is actually going to be our custom hook. And in order for React to recognize any custom hooks in our apps, their name should start with “use”.
const useSignUpForm = (callback) => {
  const [inputs, setInputs] = useState({});

  // this function manage the submit event. and return callback
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  };

  // It is very important that the name of this functional component starts with “use”. This functional component is actually going to be our custom hook. And in order for React to recognize any custom hooks in our apps, their name should start with “use”.
  const handleInputChange = (event) => {
    event.persists();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useSignUpForm;
