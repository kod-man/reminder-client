import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  useToast
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import InvisibleIcon from "../../../icons/InvisibleIcon";
import VisibleIcon from "../../../icons/VisibleIcon";
import { Axios } from "../../../utils/axios";
import {
  defaultToastProps,
  genericErrorToast
} from "../../../utils/genericToast";
import { PATHS } from "../../../utils/paths";
import { API } from "../../../utils/usedApi";
import { InputValidation } from "../utils/InputValidation";
import PassStandards from "./PassStandards";

const Inputs = ({ page }: { page: string }) => {
  const toast = useToast();
  const [disabled, setDisabled] = React.useState(true);
  const navigate = useNavigate();
  const [passStandard, setPassStandard] = React.useState(page === "register");

  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  });

  const [formErrors, setFormErros] = React.useState({
    email: "",
    password: ""
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
      password: errors.password
    }));

    //how to make  button default disabled
    const hasErrors = errors.password || errors.email;
    const hasEmptyValues = !(formData.password && formData.email);
    setDisabled(Boolean(hasErrors) || Boolean(hasEmptyValues));
  };

  const submitHandler = () => {
    if (page === "register") {
      setPassStandard(true);
      Axios.post(API.register, formData)
        .then((res) => {
          console.log(res);
          toast({
            ...defaultToastProps,
            title: "Account created.",
            description: "We've created your account for you.",
            status: "success"
          });
          navigate(PATHS.LOGIN);
        })
        .catch((err) => {
          genericErrorToast(err, toast);
        });
    }
    // validation in login and then redirect to the home
    if (page === "login") {
      Axios.post(API.login, formData)
        .then((res) => {
          toast({
            ...defaultToastProps,
            title: "Successfully logged in.",
            description: "You're logged in.",
            status: "success"
          });
          sessionStorage.setItem("token", res.data.response.token);
          sessionStorage.setItem("userId", res.data.response.user.id);

          navigate(PATHS.ONBOARD);
          // update local storage
          window.location.reload();
        })
        .catch((err) => {
          genericErrorToast(err, toast);
        });
    }
  };

  return (
    <>
      <FormControl width="350px">
        <Stack width="100%" spacing={3}>
          <Input
            id="email"
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
              id="password"
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
              children={open ? <VisibleIcon /> : <InvisibleIcon />}
            />
          </InputGroup>
          {passStandard && <PassStandards formData={formData} />}
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
