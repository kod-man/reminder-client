import { Divider, Text } from "@chakra-ui/react";

function Footer({ page }: { page: string }) {
  return (
    <>
      <Text
        as="u"
        ml="1"
        textDecoration="underline"
        fontSize="sm"
        color="gray.500"
      >
        Forgot your password?
      </Text>
      <Text fontSize="xs" width="350px">
        By continuing with Google, Apple, or Email, you agree to Todoist’s
        <Text as="u" mr="1" textDecoration="underline">
          Terms of Service
        </Text>
        and
        <Text as="u" ml="1" textDecoration="underline">
          Privacy Policy
        </Text>
        .
      </Text>
      <Divider orientation="horizontal" />
      <Text fontSize="sm" textAlign="center" width="350px" ml="25">
        {page === "register" ? "Already signed up?" : "Don't have an account?"}
        <Text as="u" ml="1" textDecoration="underline">
          {page === "register" ? "Log in" : "Sign up"}
        </Text>
      </Text>
    </>
  );
}

export default Footer;
