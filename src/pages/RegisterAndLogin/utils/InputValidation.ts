export const InputValidation = (name: string, value: string) => {
  const errors = {
    email: "",
    password: ""
  };

  if (name === "email") {
    if (!value) {
      errors[name] = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      errors[name] = "Email address is invalid!";
    }
  }
  if (name === "password") {
    if (!value) {
      errors[name] = "Password is required!";
    } else if (value.length < 7) {
      errors[name] = "Password needs to be 7 characters or more!";
    } else if (!/\d/.test(value)) {
      errors[name] = "Password must contain at least one number!";
    } else if (!/[A-Z]/.test(value)) {
      errors[name] = "Password must contain at least one upperCase!";
    } else if (!/[a-z]/.test(value)) {
      errors[name] = "Password must contain at least one lowerCase!";
    } else if (!/\W|_/g.test(value)) {
      errors[name] =
        "Password must contain at least one special character(symbol)!";
    }
  }
  return errors;
};
