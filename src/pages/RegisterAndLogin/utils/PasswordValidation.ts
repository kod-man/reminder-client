export const PasswordValidation = (value: string) => {
  let passwordError = "";

  if (!value) {
    passwordError = "Password is required!";
  } else if (value.length < 7) {
    passwordError = "Password needs to be 7 characters or more!";
  } else if (!/\d/.test(value)) {
    passwordError = "Password must contain at least one number!";
  } else if (!/[A-Z]/.test(value)) {
    passwordError = "Password must contain at least one upperCase!";
  } else if (!/[a-z]/.test(value)) {
    passwordError = "Password must contain at least one lowerCase!";
  } else if (!/\W|_/g.test(value)) {
    passwordError =
      "Password must contain at least one special character(symbol)!";
  }

  return passwordError;
};
