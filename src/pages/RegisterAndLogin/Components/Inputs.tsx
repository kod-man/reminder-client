import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Axios } from "../../../utils/axios";
import { InputValidation } from "../utils/InputValidation";

const Inputs = ({ page }: { page: string }) => {
  const toast = useToast();
  const [disabled, setDisabled] = React.useState(true);

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErros] = React.useState({
    email: "",
    password: "",
  });

  // to make password visible or invisible
  const [open, setOpen] = React.useState(false);
  const toggleHandle = () => setOpen(!open);

  const HandleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Error handling
    const errors = InputValidation(name, value);

    setFormErros((prev) => ({
      ...prev,
      email: errors.email,
      password: errors.password,
    }));

    //how to make  button default disabled
    const hasErrors = errors.password || errors.email;
    const hasEmptyValues = !(formData.password && formData.email);
    setDisabled(Boolean(hasErrors) || Boolean(hasEmptyValues));
  };

  const submitHandler = () => {
    Axios.post("/user/register", formData)
      .then((res) => {
        console.log(res);
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          position: "top-right",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err.response.data.meessage);
        toast({
          title: "something went wrong.",
          position: "top-right",
          description: err.response.data.meessage,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <>
      <FormControl>
        <Stack width="100%" spacing={3}>
          <Input
            name="email"
            size="lg"
            pr="4"
            type="email"
            placeholder="Enter your email..."
            onChange={HandleOnChange}
            value={formData.email}
          />
          {formErrors.email ? (
            <Text color="red" as="i">
              {formErrors.email}{" "}
            </Text>
          ) : null}
          <InputGroup size="lg">
            <Input
              name="password"
              pr="4.5rem"
              type={open ? "text" : "password"}
              placeholder="Enter your password..."
              onChange={HandleOnChange}
              value={formData.password}
            />
            <InputRightElement
              cursor="pointer"
              onClick={toggleHandle}
              children={open ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            />
          </InputGroup>
          {formErrors.password ? (
            <Text color="red" as="i">
              {formErrors.password}{" "}
            </Text>
          ) : null}
        </Stack>
      </FormControl>
      <Button
        disabled={disabled}
        onClick={submitHandler}
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt="4"
        variant="solid"
        width="350px"
        size="lg"
        height="52px"
        border="2px"
        color="white"
        colorScheme="red"
        borderRadius="9"
      >
        <Text>{page === "register" ? "Sign up with Email" : "Log in"}</Text>
      </Button>
    </>
  );
};

export default Inputs;
