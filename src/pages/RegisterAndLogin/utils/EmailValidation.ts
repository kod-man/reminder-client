export const EmailValidation = (value: string) => {
  let emailError = "";

  if (!value) {
    emailError = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(value)) {
    emailError = "Email address is invalid!";
  }

  return emailError;
};
