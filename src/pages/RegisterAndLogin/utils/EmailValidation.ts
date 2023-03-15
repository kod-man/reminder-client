export const EmailValidation = (value: string) => {
  const errors = {
    email: ""
  };
  if (!value) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(value)) {
    errors.email = "Email address is invalid!";
  }

  return errors;
};
