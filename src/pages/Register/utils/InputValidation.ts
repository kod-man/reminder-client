export const InputValidation = (name: string, value: string) => {
  const errors = {
    email: "",
    password: "",
  };

  if (name === "email") {
    if (!value) {
      errors[name] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      errors[name] = "Email address is invalid !";
    }
  }
  if (name === "password") {
    if (!value) {
      errors[name] = "Password is required !";
    } else if (value.length < 7) {
      errors[name] = "Password needs to be 7 characters or more !";
    } else if (!/\d/.test(value)) {
      errors[name] = "Password must caontain number !";
    } else if (!/[A-Z]/.test(value)) {
      errors[name] = "Password must caontain one UpperCase !";
    } else if (!/[a-z]/.test(value)) {
      errors[name] = "Password must caontain one LowerCase !";
    } else if (!/\W|_/g.test(value)) {
      errors[name] = "Password must caontain one special character(symbol) !";
    }
  }
  return errors;
};
