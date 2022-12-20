import { Divider, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../utils/paths";
function Footer({ page }: { page: string }) {
  const navigate = useNavigate();
  return (
    <>
      {page === "login" ? (
        <Text
          as="u"
          ml="1"
          textDecoration="underline"
          fontSize="sm"
          color="gray.500"
        >
          Forgot your password?
        </Text>
      ) : null}
      <Text fontSize="xs" width="350px">
        By continuing with Google, Apple, or Email, you agree to Todoist’s
        <Text as="u" mr="1" ml="1" textDecoration="underline" cursor="pointer">
          Terms of Service
        </Text>
        and
        <Text as="u" ml="1" textDecoration="underline" cursor="pointer">
          Privacy Policy
        </Text>
        .
      </Text>
      <Divider orientation="horizontal" />
      <Text fontSize="sm" textAlign="center" width="350px" ml="25">
        {page === "register" ? "Already signed up?" : "Don't have an account?"}
        <Text
          as="u"
          ml="1"
          textDecoration="underline"
          cursor="pointer"
          onClick={() =>
            page === "register"
              ? navigate(PATHS.LOGIN)
              : navigate(PATHS.REGISTER)
          }
        >
          {page === "register" ? "Log in" : "Sign up"}
        </Text>
      </Text>
    </>
  );
}

export default Footer;
